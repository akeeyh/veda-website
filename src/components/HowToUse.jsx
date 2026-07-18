import React from 'react';
import { motion } from 'framer-motion';

const HowToUse = () => {
  const steps = [
    {
      number: "01",
      title: "Connect & Power On",
      description: "Plug in the standard webcam and power on the VEDA device. No complex setup or specialized mounting required."
    },
    {
      number: "02",
      title: "Auto-Calibration",
      description: "VEDA automatically runs a quick calibration sequence to learn the user's natural blink baseline for accurate tracking."
    },
    {
      number: "03",
      title: "Blink to Select",
      description: "Navigate the intuitive on-screen interface. Gaze to highlight, and use purposeful blinks to select needs, commands, or IoT controls."
    },
    {
      number: "04",
      title: "Background Safety",
      description: "Emergency detection runs continuously. If a prolonged eye closure is detected, an alert is sent automatically."
    }
  ];

  return (
    <section id="how-to-use" className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            A seamless experience designed to reduce cognitive load and physical strain. VEDA is ready to use in minutes.
          </p>
        </motion.div>

        <div style={{ position: 'relative', marginTop: '4rem' }}>
          {/* Vertical line for desktop timeline */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            backgroundColor: 'rgba(0, 71, 65, 0.1)',
            transform: 'translateX(-50%)',
            display: 'none'
          }} className="timeline-line"></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2rem',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  flexWrap: 'wrap'
                }}
              >
                <div style={{ flex: '1 1 300px', textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <div style={{ 
                    fontSize: '4rem', 
                    fontWeight: 800, 
                    color: 'rgba(0, 71, 65, 0.1)', 
                    lineHeight: 1,
                    marginBottom: '0.5rem'
                  }}>
                    {step.number}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--color-cyprus)', marginBottom: '1rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {step.description}
                  </p>
                </div>
                
                {/* Center marker */}
                <div style={{
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'var(--color-cyprus)',
                  borderRadius: '50%',
                  border: '4px solid var(--color-sand)',
                  zIndex: 2,
                  margin: '0 auto',
                  flexShrink: 0
                }} className="timeline-marker"></div>

                <div style={{ flex: '1 1 300px' }}>
                  {/* Placeholder for illustration/graphic */}
                  <div style={{
                    width: '100%',
                    paddingTop: '60%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    borderRadius: 'var(--border-radius)',
                    border: '1px dashed rgba(0, 71, 65, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-muted)'
                  }}>
                    <span style={{ position: 'absolute', transform: 'translateY(-50%)' }}>Illustration for {step.title}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (min-width: 768px) {
          .timeline-line { display: block !important; }
        }
        @media (max-width: 767px) {
          .timeline-marker { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default HowToUse;
