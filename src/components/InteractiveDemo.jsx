import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveDemo = () => {
  const [simMode, setSimMode] = useState('dwell');
  const [simLogs, setSimLogs] = useState([{ type: 'sys', msg: 'System initialized. Gaze tracker is ready.' }]);
  const [lightState, setLightState] = useState(false);
  const [fanState, setFanState] = useState(false);
  
  // Dwell state
  const [hoveredCell, setHoveredCell] = useState(null);
  const timerRef = useRef(null);
  const voiceRef = useRef(null);

  // Pre-load and cache a local voice to prevent network delays
  useEffect(() => {
    if ('speechSynthesis' in window) {
      const loadVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        // Prefer a local, english voice for instant TTS
        const localVoice = voices.find(v => v.localService && v.lang.startsWith('en')) || voices[0];
        if (localVoice) {
          voiceRef.current = localVoice;
        }
      };
      
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  // TTS Helper
  const speakAction = (text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // cancel pending
      const utterance = new SpeechSynthesisUtterance(text);
      if (voiceRef.current) {
        utterance.voice = voiceRef.current;
      }
      utterance.rate = 1.0;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const logMessage = (msg, type = 'action') => {
    setSimLogs(prev => {
      const newLogs = [...prev, { type, msg }];
      return newLogs.length > 4 ? newLogs.slice(newLogs.length - 4) : newLogs;
    });
  };

  const handleAction = (label) => {
    let actionText = label;

    // Handle toggles
    if (label === 'Light Toggle') {
      setLightState(prev => {
        const nextState = !prev;
        actionText = `Light turned ${nextState ? 'ON' : 'OFF'}`;
        logMessage(actionText);
        speakAction(actionText);
        return nextState;
      });
      return;
    }

    if (label === 'Fan Toggle') {
      setFanState(prev => {
        const nextState = !prev;
        actionText = `Fan turned ${nextState ? 'ON' : 'OFF'}`;
        logMessage(actionText);
        speakAction(actionText);
        return nextState;
      });
      return;
    }

    if (label === 'Water' || label === 'Food' || label === 'Doctor') {
       actionText = `${label} requested`;
    } else if (label === 'EMERGENCY') {
       actionText = `Emergency alert triggered!`;
    }

    logMessage(`Selected: ${label}`);
    speakAction(actionText);
  };

  const handleMouseEnter = (label) => {
    if (simMode !== 'dwell') return;
    
    setHoveredCell(label);
    
    // Start 1.5s timer
    timerRef.current = setTimeout(() => {
      handleAction(label);
      setHoveredCell(null); // Reset progress visually
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (simMode !== 'dwell') return;
    setHoveredCell(null);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  const handleClick = (label) => {
    if (simMode === 'click') {
      handleAction(label);
    }
  };

  // UI helpers
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const Cell = ({ id, icon, label, isDanger, isMode, overrideState, activeColor }) => {
    const isHovered = hoveredCell === id;
    
    let cellClass = "grid-cell interactive-cell";
    if (isDanger) cellClass += " danger-cell";
    if (isMode) cellClass += " mode-cell";
    if (overrideState) cellClass += " state-active";

    return (
      <div 
        className={cellClass}
        onClick={() => handleClick(id)}
        onMouseEnter={() => handleMouseEnter(id)}
        onMouseLeave={handleMouseLeave}
        style={{
          borderColor: overrideState ? activeColor : undefined,
          backgroundColor: overrideState ? `${activeColor}15` : undefined
        }}
      >
        <div className="cell-icon" style={{ color: overrideState ? activeColor : undefined, transition: 'color 0.3s' }}>
          <i className={`fa-solid ${icon}`}></i>
        </div>
        <span className="cell-label">{label}</span>
        
        {/* Progress Ring for Dwell */}
        {simMode === 'dwell' && isHovered && (
          <svg className="dwell-progress" viewBox="0 0 100 100">
             <circle className="dwell-progress-circle" cx="50" cy="50" r="46"></circle>
          </svg>
        )}
      </div>
    );
  };

  return (
    <section id="simulator" className="simulator-section section-padding">
      <div className="container">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header text-center">
          <span className="section-tag">Interactive Preview</span>
          <h2 className="section-title">Experience VEDA Virtual Interface</h2>
          <p className="section-subtitle">See how VEDA works. Select Dwell mode to hover and select, or Click mode to blink/click.</p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="simulator-wrapper card">
          <div className="simulator-controls">
            <div className="control-group">
              <span className="control-label"><i className="fa-solid fa-cog"></i> Input Mode:</span>
              <button className={`btn btn-sm ${simMode === 'dwell' ? 'btn-active' : 'btn-outline'}`} onClick={() => setSimMode('dwell')}><i className="fa-solid fa-eye"></i> Dwell (Hover)</button>
              <button className={`btn btn-sm ${simMode === 'click' ? 'btn-active' : 'btn-outline'}`} onClick={() => setSimMode('click')}><i className="fa-solid fa-hand-pointer"></i> Click (Blink)</button>
            </div>
            <div className="control-group status-group">
              <span className="system-status"><span className="status-dot"></span> System Calibrated &amp; Active</span>
            </div>
          </div>

          <div className="simulator-main">
            <div className="grid-board" id="simulator-grid">
              <Cell id="Water" icon="fa-glass-water" label="Water" />
              <Cell id="Food" icon="fa-bowl-food" label="Food" />
              <Cell id="Doctor" icon="fa-user-doctor" label="Doctor" />
              
              <Cell 
                id="Light Toggle" 
                icon="fa-lightbulb" 
                label={`Light: ${lightState ? 'ON' : 'OFF'}`} 
                overrideState={lightState}
                activeColor="#F59E0B"
              />
              <Cell 
                id="Fan Toggle" 
                icon="fa-fan" 
                label={`Fan: ${fanState ? 'ON' : 'OFF'}`} 
                overrideState={fanState}
                activeColor="#3B82F6"
              />
              
              <Cell id="Call Family" icon="fa-phone" label="Call Family" />
              <Cell id="Sleep Mode" icon="fa-bed" label="Sleep Mode" isMode={true} />
              <Cell id="Menu" icon="fa-gears" label="Menu" isMode={true} />
              <Cell id="EMERGENCY" icon="fa-triangle-exclamation" label="EMERGENCY" isDanger={true} />
            </div>

            <div className="simulator-log">
              <div className="log-title"><i className="fa-solid fa-terminal"></i> VEDA System Log</div>
              <div className="log-messages" id="sim-log-messages">
                {simLogs.map((log, index) => (
                  <div key={index} className="log-msg" style={{color: log.type === 'sys' ? 'var(--success)' : (log.msg.includes('EMERGENCY') ? '#ef4444' : '#F59E0B')}}>
                    {log.msg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveDemo;
