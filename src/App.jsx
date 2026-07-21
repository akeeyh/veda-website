import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import InteractiveDemo from './components/InteractiveDemo';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showPlatforms, setShowPlatforms] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Toggle Dark Mode
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Framer motion variants for professional fade-ups
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      {/* Floating Header / Navigation */}
      <header id="site-header" className="scrolled">
        <div className="nav-container">
          <a href="#hero" className="logo-area">
            <div className="logo-icon">
              <svg viewBox="0 0 100 100" className="logo-svg">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7C6FF0" />
                    <stop offset="100%" stopColor="#5B8DEF" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="40" fill="none" stroke="url(#logoGrad)" strokeWidth="8" />
                <path d="M25,50 C35,30 65,30 75,50 C65,70 35,70 25,50 Z" fill="none" stroke="url(#logoGrad)" strokeWidth="6" />
                <circle cx="50" cy="50" r="12" fill="url(#logoGrad)" />
                <circle cx="53" cy="47" r="4" fill="#FFFFFF" />
              </svg>
            </div>
            <span className="logo-text">VEDA</span>
          </a>

          <nav className={`nav-menu ${isNavOpen ? 'active' : ''}`} id="nav-menu" role="navigation" aria-label="Main Navigation">
            <ul>
              <li><a href="#hero" className="nav-link active" onClick={() => setIsNavOpen(false)}>Home</a></li>
              <li><a href="#overview" className="nav-link" onClick={() => setIsNavOpen(false)}>Overview</a></li>
              <li><a href="#how-to-use" className="nav-link" onClick={() => setIsNavOpen(false)}>How it Works</a></li>
              <li><a href="#features" className="nav-link" onClick={() => setIsNavOpen(false)}>Features</a></li>
              <li><a href="#download" className="nav-link" onClick={() => setIsNavOpen(false)}>Download</a></li>
              <li><a href="#why-veda" className="nav-link" onClick={() => setIsNavOpen(false)}>Why VEDA</a></li>
              <li><a href="#team" className="nav-link" onClick={() => setIsNavOpen(false)}>Team</a></li>
              <li className="mobile-only-cta">
                <a href="https://vedanurseapp.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline" style={{width: '100%', marginBottom: '10px', justifyContent: 'center'}}>VEDA Nurse Companion</a>
                <a href="#download" className="btn btn-sm btn-gradient" style={{width: '100%', justifyContent: 'center'}}>Get VEDA</a>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <button 
              id="dark-mode-toggle" 
              className="theme-btn" 
              aria-label="Toggle Dark Mode" 
              title="Toggle Dark/Light Mode"
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{ background: 'none', border: 'none', fontSize: '1.25rem', color: 'var(--text-dark)', cursor: 'pointer' }}
            >
              <i className={isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
            </button>
            <a href="https://veda-mobile-dashboard.onrender.com" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline nav-cta-btn">VEDA Nurse Companion</a>
            <a href="#download" className="btn btn-sm btn-gradient nav-cta-btn">Get VEDA</a>
            <button 
              className={`mobile-nav-toggle ${isNavOpen ? 'active' : ''}`} 
              id="mobile-toggle" 
              aria-label="Open Navigation Menu"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              <i className={isNavOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Section 1: Hero */}
        <section id="hero" className="hero-section">
          <div className="hero-bg-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>
          <div className="container hero-container">
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="hero-content">
              <motion.span variants={fadeUp} className="badge-label animate-up">Project VEDA</motion.span>
              <motion.h1 variants={fadeUp} className="hero-title animate-up">Vision Enabled Digital Assistant</motion.h1>
              <motion.p variants={fadeUp} className="hero-subtitle animate-up">Restoring communication, independence, and dignity through eye-tracking technology.</motion.p>
              <motion.p variants={fadeUp} className="hero-description animate-up">An affordable, non-invasive assistive system running on consumer-grade hardware (webcams and Raspberry Pi/ESP32) that empowers individuals with ALS, stroke, or severe motor impairment to interact with the world.</motion.p>
              
              <motion.div variants={fadeUp} className="hero-ctas animate-up">
                <a href="#download" className="btn btn-lg btn-gradient"><i className="fa-solid fa-download"></i> Download VEDA</a>
                <a href="#how-to-use" className="btn btn-lg btn-outline">Learn How It Works <i className="fa-solid fa-arrow-right"></i></a>
              </motion.div>

              <motion.div variants={fadeUp} className="hero-features-strip animate-up">
                <div className="strip-item"><i className="fa-solid fa-circle-check"></i> Standard Webcams</div>
                <div className="strip-item"><i className="fa-solid fa-circle-check"></i> Under ₹10,000 Hardware</div>
                <div className="strip-item"><i className="fa-solid fa-circle-check"></i> Real-time Alerts via Internet</div>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="hero-media animate-up">
              <div className="hero-illustration-wrapper" style={{width: '100%', maxWidth: '550px', background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{width: '100%', height: '480px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i className="fa-solid fa-eye" style={{fontSize: '150px', color: 'var(--primary-color)', opacity: 0.8, animation: 'pulse 3s infinite alternate'}}></i>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Overview */}
        <section id="overview" className="overview-section section-padding">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header text-center">
              <span className="section-tag">System Overview</span>
              <h2 className="section-title">What is VEDA?</h2>
              <p className="section-subtitle">A high-performance, low-cost assistive gateway to digital inclusion and physical control.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="overview-grid">
              <motion.div variants={fadeUp} className="overview-main-text card">
                <h3>Bridging the Gap in Assistive Technology</h3>
                <p>Traditional eye-tracking solutions are incredibly powerful but carry an exorbitant price tag, often costing between <strong>₹8,00,000 and ₹12,00,000</strong>. This places them far out of reach for families and medical centers in developing regions.</p>
                <p><strong>VEDA</strong> breaks down these barriers. By combining standard consumer webcams with compact edge devices like the Raspberry Pi or ESP32, and leveraging state-of-the-art computer vision models, VEDA delivers robust eye-tracking control at a hardware cost of <strong>under ₹10,000</strong>.</p>
                <p>Our software continuously monitors facial movements, tracking 468 precise landmarks to calculate gaze coordinates, blink patterns, and prolonged eye-closures. It acts as both a communication board and a smart controller for home appliances.</p>
                
                <div className="tech-badge-container">
                  <span className="tech-badge"><i className="fa-brands fa-python"></i> Python</span>
                  <span className="tech-badge"><i className="fa-solid fa-eye"></i> OpenCV</span>
                  <span className="tech-badge"><i className="fa-solid fa-network-wired"></i> MediaPipe</span>
                  <span className="tech-badge"><i className="fa-solid fa-microchip"></i> Raspberry Pi</span>
                  <span className="tech-badge"><i className="fa-solid fa-bolt"></i> ESP32</span>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="stats-container">
                <div className="stat-card">
                  <div className="stat-icon"><i className="fa-solid fa-tags"></i></div>
                  <div className="stat-num">~₹10,000</div>
                  <div className="stat-label">Hardware cost compared to ₹8,00,000+ commercial options</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fa-solid fa-bezier-curve"></i></div>
                  <div className="stat-num">468</div>
                  <div className="stat-label">Facial landmarks tracked in real-time for maximum precision</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fa-solid fa-shield-halved"></i></div>
                  <div className="stat-num">&lt; 10s</div>
                  <div className="stat-label">Emergency request activation &amp; priority escalation dispatch</div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fa-solid fa-face-smile"></i></div>
                  <div className="stat-num">100%</div>
                  <div className="stat-label">Non-invasive tracking using standard high-definition webcam</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: How to Use (Step-by-step Timeline) */}
        <section id="how-to-use" className="how-section section-padding">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header text-center">
              <span className="section-tag">User Journey</span>
              <h2 className="section-title">Getting Started with VEDA</h2>
              <p className="section-subtitle">Five simple steps to establish a direct connection with the system.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="timeline">
              {[
                { step: "Step 1", title: "Hardware Connection", icon: "fa-plug", desc: "Connect your standard USB webcam to the processing host (Raspberry Pi, laptop, or desktop) and power up the system. Position the webcam at eye level, roughly 50-70 cm away from the user, ensuring the face is adequately illuminated.", tag1: "720p/1080p Webcam", tag2: "Ambient lighting" },
                { step: "Step 2", title: "Blink Calibration", icon: "fa-sliders", desc: "When VEDA starts, it runs a 5-second automatic calibration sequence. The system records the user's natural eye aspect ratio (EAR) during normal resting states and intentional blinks. This establishes a highly personalized baseline to avoid false triggers.", tag1: "Adaptive thresholding", tag2: "5s quick calibration" },
                { step: "Step 3", title: "Gaze & Blink Selection", icon: "fa-keyboard", desc: "The screen displays a grid of core commands (Basic Needs, IoT items, letters). The system highlights rows and columns sequentially. The user simply performs an intentional, slightly prolonged blink (or holds their gaze on a cell) to select the desired command.", tag1: "Dwell/Blink selection", tag2: "Text-to-Speech feedback" },
                { step: "Step 4", title: "Continuous Safety Monitoring", icon: "fa-bell", desc: "The 'Dead Man's Switch' runs silently in the background. If the user's eyes remain completely opened for 8 seconds without blinking, VEDA detects a potential emergency. It triggers an audible siren and automatically escalates alerts to caregivers.", tag1: "Fail-safe protection", tag2: "Caregiver integration" },
                { step: "Step 5", title: "Smart Sleep Mode", icon: "fa-bed", desc: "To prevent fatigue and accidental inputs when the user is resting, watching TV, or sleeping, a specific double-blink sequence toggles the system into Smart Sleep Mode. The camera stops analyzing coordinates until the wakeup sequence is received.", tag1: "Double-blink wake", tag2: "Power saving" },
              ].map((item, index) => (
                <motion.div variants={fadeUp} key={index} className={`timeline-item ${index % 2 !== 0 ? 'right-align' : ''}`}>
                  <div className="timeline-img">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div className="timeline-content card">
                    <span className="step-num">{item.step}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <div className="timeline-detail">
                      <span className="detail-tag"><i className="fa-solid fa-check"></i> {item.tag1}</span>
                      <span className="detail-tag"><i className="fa-solid fa-check"></i> {item.tag2}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section: Simulator */}
        <InteractiveDemo />

        {/* Section 4: Features */}
        <section id="features" className="features-section section-padding">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header text-center">
              <span className="section-tag">Core Features</span>
              <h2 className="section-title">Designed for Care, Built for Independence</h2>
              <p className="section-subtitle">Explore VEDA's comprehensive feature set that ensures both safety and comfort.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="features-grid">
              {[
                { icon: "fa-eye", title: "Eye-Tracking Communication", desc: "A smart visual keyboard that allows users to select alphanumeric characters or pre-configured basic needs. Text is synthesized into speech immediately upon selection." },
                { icon: "fa-house-signal", title: "Smart IoT Integration", desc: "Connects directly with home appliances through low-cost relay circuits driven by Raspberry Pi or ESP32 microcontrollers. Control lights, fans, televisions." },
                { icon: "fa-heart-pulse", title: "Dead Man's Switch Safety", desc: "An autonomous safety system that tracks eyes continuously. If eyes remain completely opened for 8 seconds without blinking, it initiates emergency alarms." },
                { icon: "fa-triangle-exclamation", title: "Request Escalation Matrix", desc: "If a selected request is not acknowledged by a caretaker button-press, the system automatically elevates the issue, increasing speaker volume or sending SMS alerts." },
                { icon: "fa-moon", title: "Smart Sleep Protocol", desc: "Prevents unintentional device triggers when the user is resting. Simple blink shortcuts allow the system to sleep and wake up seamlessly." },
                { icon: "fa-puzzle-piece", title: "Democratized Hardware", desc: "No proprietary hardware dependencies. Runs on basic webcams and cheap computers, removing structural financial constraints for assistive medical equipment." }
              ].map((f, i) => (
                <motion.div variants={fadeUp} key={i} className="feature-card card">
                  <div className="feature-icon"><i className={`fa-solid ${f.icon}`}></i></div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section 5: Download Section */}
        <section id="download" className="download-section section-padding">
          <div className="container text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header">
              <span className="section-tag">Releases</span>
              <h2 className="section-title">Get VEDA System</h2>
              <p className="section-subtitle">VEDA is open-source and free to deploy. Choose your target operating system.</p>
            </motion.div>

            {!showPlatforms ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} id="initial-download-area" className="download-trigger-wrapper">
                <button id="btn-reveal-platforms" className="btn btn-xl btn-gradient" onClick={() => setShowPlatforms(true)}>
                  <i className="fa-solid fa-download"></i> Download VEDA Installer
                </button>
                <p className="download-meta" style={{marginTop: '1rem', color: 'var(--text-light)'}}>Available for Windows, Linux, and macOS.</p>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} id="platform-grid-container" className="platform-grid-wrapper">
                <div className="platform-grid">
                  <div className="platform-card card">
                    <div className="plat-icon"><i className="fa-brands fa-windows"></i></div>
                    <h3>Windows</h3>
                    <p className="plat-compat">Windows 10 / 11 (64-bit)</p>
                    <p className="plat-desc">Includes the core installer and dependencies compiled for Windows x64 systems.</p>
                    <a href="https://drive.google.com/uc?export=download&id=1Fu1CeVrV3jgKMauW5De6_M7xlHnDoPSl" className="btn btn-md btn-gradient download-link" target="_blank" rel="noopener noreferrer">
                      Download Installer <i className="fa-solid fa-arrow-down"></i>
                    </a>
                  </div>

                  <div className="platform-card card">
                    <div className="plat-icon"><i className="fa-brands fa-linux"></i></div>
                    <h3>Linux</h3>
                    <p className="plat-compat">Ubuntu 20.04+, Debian, Arch</p>
                    <p className="plat-desc">Available as a pre-packaged AppImage or Debian installer script for easy local execution.</p>
                    <a href="https://drive.google.com/uc?export=download&id=1IyzoG_u88WgyB1kK0G-icPMsp1Yao46Y" className="btn btn-md btn-gradient download-link" target="_blank" rel="noopener noreferrer">
                      Download Script <i className="fa-solid fa-arrow-down"></i>
                    </a>
                  </div>

                  <div className="platform-card card">
                    <div className="plat-icon"><i className="fa-brands fa-apple"></i></div>
                    <h3>macOS</h3>
                    <p className="plat-compat">macOS Catalina or later (M1/M2/Intel)</p>
                    <p className="plat-desc">Universal macOS build. May require adjusting security/privacy permissions in System Settings.</p>
                    <a href="https://drive.google.com/uc?export=download&id=1IyzoG_u88WgyB1kK0G-icPMsp1Yao46Y" className="btn btn-md btn-gradient download-link" target="_blank" rel="noopener noreferrer">
                      Download DMG <i className="fa-solid fa-arrow-down"></i>
                    </a>
                  </div>
                </div>

                <button className="btn btn-sm btn-outline btn-collapse" onClick={() => setShowPlatforms(false)} style={{marginTop: '3rem'}}>
                  <i className="fa-solid fa-chevron-up"></i> Close Platform List
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Section: Why VEDA */}
        <section id="why-veda" className="why-section section-padding">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header text-center">
              <span className="section-tag">Value Proposition</span>
              <h2 className="section-title">The VEDA Advantage</h2>
              <p className="section-subtitle">How VEDA compares to traditional, high-cost assistive systems.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="comparison-wrapper card" style={{overflowX: 'auto'}}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th scope="col">Feature</th>
                    <th scope="col" className="highlight-th">VEDA System</th>
                    <th scope="col">Traditional Trackers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="feat-name">Hardware Cost</td>
                    <td className="veda-val"><i className="fa-solid fa-check-double text-success"></i> ~₹10,000 (Webcam + Pi/ESP32)</td>
                    <td className="other-val">₹8,00,000 – ₹12,00,000</td>
                  </tr>
                  <tr>
                    <td className="feat-name">Specialized Hardware</td>
                    <td className="veda-val"><i className="fa-solid fa-check-double text-success"></i> None (Uses standard webcam)</td>
                    <td className="other-val">Proprietary IR sensors/receivers</td>
                  </tr>
                  <tr>
                    <td className="feat-name">Software License</td>
                    <td className="veda-val"><i className="fa-solid fa-check-double text-success"></i> Free &amp; Open Source (MIT)</td>
                    <td className="other-val">Expensive proprietary licenses</td>
                  </tr>
                  <tr>
                    <td className="feat-name">Device Integration</td>
                    <td className="veda-val"><i className="fa-solid fa-check-double text-success"></i> Direct IoT smart-device control</td>
                    <td className="other-val">Requires separate bridging adapters</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </div>
        </section>

        {/* Section: Tech Stack */}
        <section className="techstack-section section-padding">
          <div className="container text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header">
              <span className="section-tag">Technology</span>
              <h2 className="section-title">Engineered with Modern Open-Source Standards</h2>
              <p className="section-subtitle">Leveraging lightweight, robust computer vision frameworks and modular hardware controllers.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="tech-grid">
              <motion.div variants={fadeUp} className="tech-card-item card">
                <div className="tech-icon"><i className="fa-brands fa-python python-color"></i></div>
                <h4>Python 3.x</h4>
                <p>Main backend controller orchestrating face tracking, state logic, and output streams.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="tech-card-item card">
                <div className="tech-icon"><i className="fa-solid fa-eye opencv-color"></i></div>
                <h4>OpenCV</h4>
                <p>Handles real-time camera frames capture, rendering, and visual overlay feedback.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="tech-card-item card">
                <div className="tech-icon"><i className="fa-solid fa-chart-line mp-color"></i></div>
                <h4>MediaPipe Face Mesh</h4>
                <p>Provides 468 3D facial landmarks at sub-millisecond rates for precise iris/eyelid mapping.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="tech-card-item card">
                <div className="tech-icon"><i className="fa-solid fa-database sql-color"></i></div>
                <h4>SQLite</h4>
                <p>Maintains persistent local logs of requests, events, and customized system parameters.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="tech-card-item card">
                <div className="tech-icon"><i className="fa-solid fa-microchip pi-color"></i></div>
                <h4>Raspberry Pi 4</h4>
                <p>Executes coordinates calculations and hosts the visual interface as a standalone hub.</p>
              </motion.div>
              <motion.div variants={fadeUp} className="tech-card-item card">
                <div className="tech-icon"><i className="fa-solid fa-bolt esp-color"></i></div>
                <h4>ESP32 Nodes</h4>
                <p>Low-cost wireless relays connected via HTTP/WebSockets to control lights/appliances.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section: Roadmap */}
        <section className="roadmap-section section-padding">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header text-center">
              <span className="section-tag">Vision</span>
              <h2 className="section-title">VEDA Development Roadmap</h2>
              <p className="section-subtitle">Our ongoing targets to enhance the capabilities and accessibility of VEDA.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="roadmap-flow">
              <motion.div variants={fadeUp} className="roadmap-node card">
                <div className="roadmap-header">
                  <span className="roadmap-badge active">Current Release</span>
                  <h4>Phase 1: Basic Gateway</h4>
                </div>
                <ul>
                  <li><i className="fa-solid fa-circle-check text-success"></i> 468 point MediaPipe Tracking</li>
                  <li><i className="fa-solid fa-circle-check text-success"></i> Dwell and Blink interfaces</li>
                  <li><i className="fa-solid fa-circle-check text-success"></i> Relay-based IoT commands</li>
                  <li><i className="fa-solid fa-circle-check text-success"></i> Prolonged closure alarms</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="roadmap-node card">
                <div className="roadmap-header">
                  <span className="roadmap-badge pending">In Development</span>
                  <h4>Phase 2: AI Enhancements</h4>
                </div>
                <ul>
                  <li><i className="fa-solid fa-clock text-warning" style={{color: '#f59e0b'}}></i> LLM integration for contextual next-word predictions</li>
                  <li><i className="fa-solid fa-clock text-warning" style={{color: '#f59e0b'}}></i> Calibration-free user profiles using spatial tracking</li>
                  <li><i className="fa-solid fa-clock text-warning" style={{color: '#f59e0b'}}></i> Multi-lingual Speech synthesis</li>
                  <li><i className="fa-solid fa-clock text-warning" style={{color: '#f59e0b'}}></i> SQLite cloud backup integration</li>
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="roadmap-node card">
                <div className="roadmap-header">
                  <span className="roadmap-badge coming-soon">Future Scope</span>
                  <h4>Phase 3: Expanded Controls</h4>
                </div>
                <ul>
                  <li><i className="fa-solid fa-hourglass-start"></i> Non-contact camera vital sign monitoring (heart/resp rate)</li>
                  <li><i className="fa-solid fa-hourglass-start"></i> Direct motorized wheelchair controls via ESP32 interface</li>
                  <li><i className="fa-solid fa-hourglass-start"></i> Native Mobile application (iOS / Android)</li>
                  <li><i className="fa-solid fa-hourglass-start"></i> Smart home ecosystem integrations</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section: Meet the Team */}
        <section id="team" className="team-section section-padding">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header text-center">
              <span className="section-tag">Creators</span>
              <h2 className="section-title">The VEDA Development Team</h2>
              <p className="section-subtitle">Dedicated engineers and developers bridging healthcare and computer vision.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="team-grid">
              <motion.div variants={fadeUp} className="team-card card">
                <div className="team-avatar"><i className="fa-solid fa-people-group"></i></div>
                <h3>Ananthajith KS</h3>
                <p className="team-role">Team Lead<br />AI &amp; IOT Engineer</p>
                <p className="team-desc">Oversees the entire project architecture, integrating AI gaze tracking with the IoT ecosystem.</p>
                <div className="team-socials">
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="team-card card">
                <div className="team-avatar"><i className="fa-solid fa-user-gear"></i></div>
                <h3>Abhinav EG</h3>
                <p className="team-role">AI &amp; Computer Vision Engineer</p>
                <p className="team-desc">Specializes in face-mesh optimization, spatial calculations, and core gaze logic.</p>
                <div className="team-socials">
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="team-card card">
                <div className="team-avatar"><i className="fa-solid fa-microchip"></i></div>
                <h3>Abijith TS</h3>
                <p className="team-role">IoT &amp; Embedded Systems Engineer</p>
                <p className="team-desc">Manages microcontroller communications, relay control, and hardware integration.</p>
                <div className="team-socials">
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="team-card card">
                <div className="team-avatar"><i className="fa-solid fa-laptop-code"></i></div>
                <h3>Ajitha Dhanpal</h3>
                <p className="team-role">UI/UX &amp; Frontend Developer</p>
                <p className="team-desc">Designs and implements accessible, user-friendly interfaces tailored for low fatigue and maximum visibility.</p>
                <div className="team-socials">
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#"><i className="fa-brands fa-github"></i></a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Section: FAQ Accordion */}
        <section id="faq" className="faq-section section-padding">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="section-header text-center">
              <span className="section-tag">Common Inquiries</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">Find immediate answers to key operational and technical questions.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="faq-accordion">
              {[
                {q: "What specific hardware components do I need to run VEDA?", a: "To set up VEDA, you need a basic computing node (a laptop, desktop, or a Raspberry Pi 4), a standard high-definition webcam (720p or 1080p, 30fps), and optionally ESP32 nodes connected with relay modules if you wish to configure home appliance control. No expensive proprietary eye tracker hardware is necessary."},
                {q: "Does VEDA require an active internet connection to function?", a: "No. VEDA's core tracking, user interface, speech synthesis, and ESP32 home control operate entirely locally on the device. An active internet connection is only needed if you configure advanced remote alert actions (e.g., sending SMS or email via online notification APIs)."},
                {q: "How does calibration adjust for individual patient needs?", a: "When launching, VEDA initiates a fast calibration sequence. It profiles the patient's resting eye state and active blink patterns for 5 seconds. This calculates customized thresholds for the Eye Aspect Ratio (EAR) dynamically, accommodating patients with partial ptosis, asymmetrical facial structures, or varying lighting conditions."},
                {q: "Is VEDA open-source, and can we modify the source code?", a: "Yes, VEDA is completely open-source. The software code is hosted on GitHub, allowing medical researchers, students, and hobbyists to contribute, build custom integrations, or tailor the interface configuration for specific patients' cognitive and physical states."},
                {q: "How is user data and safety handled?", a: "Safety is our top priority. VEDA stores system settings and event logs locally in a secure SQLite database. Camera frames are processed in-memory and are never recorded, saved, or uploaded, protecting privacy. For safety, the 'Dead Man's Switch' runs in parallel to sound a physical siren if the camera is blocked or the patient appears unresponsive."}
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i} className="faq-item card">
                  <button className="faq-question" onClick={() => toggleFaq(i)}>
                    <span>{item.q}</span>
                    <span className="faq-icon"><i className={`fa-solid fa-chevron-${activeFaq === i ? 'up' : 'down'}`}></i></span>
                  </button>
                  <div className="faq-answer" style={{ display: activeFaq === i ? 'block' : 'none' }}>
                    <p style={{marginTop: '1rem', color: 'var(--text-gray)'}}>{item.a}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Section: Contact / Support Section */}
        <section className="contact-section section-padding">
          <div className="container">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp} className="contact-wrapper card">
              <div className="contact-info">
                <span className="badge-label">Get in Touch</span>
                <h3 style={{fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-dark)'}}>Support &amp; Collaborations</h3>
                <p>Are you a healthcare researcher, clinical center, or caregiver looking to deploy VEDA? We would love to collaborate or assist in setup.</p>
                
                <div className="contact-details">
                  <div className="detail-item">
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                      <h4>Email Us</h4>
                      <p><a href="mailto:support@veda-assist.org">support@veda-assist.org</a></p>
                    </div>
                  </div>
                  <div className="detail-item">
                    <i className="fa-solid fa-code-branch"></i>
                    <div>
                      <h4>GitHub Repository</h4>
                      <p><a href="https://github.com/abhinaveg/veda" target="_blank" rel="noopener noreferrer">github.com/abhinaveg/veda</a></p>
                    </div>
                  </div>
                </div>
              </div>

              <form className="contact-form" onSubmit={(e) => { e.preventDefault(); alert("Thanks! Message sent (simulation).") }}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="contact-name">Full Name</label>
                    <input type="text" id="contact-name" name="name" required placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-email">Email Address</label>
                    <input type="email" id="contact-email" name="email" required placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-role">I am a...</label>
                  <select id="contact-role" name="role">
                    <option value="caregiver">Caregiver / Family Member</option>
                    <option value="researcher">Medical Professional / Researcher</option>
                    <option value="engineer">Software/Hardware Engineer</option>
                    <option value="other">Other Interested Individual</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">How can we help you?</label>
                  <textarea id="contact-message" name="message" rows="5" required placeholder="Write your request or question here..."></textarea>
                </div>

                <button type="submit" className="btn btn-md btn-gradient">Send Message <i className="fa-solid fa-paper-plane" style={{marginLeft: '0.5rem'}}></i></button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <div className="container footer-container">
          <div className="footer-brand">
            <div className="logo-area">
              <div className="logo-icon">
                <svg viewBox="0 0 100 100" className="logo-svg">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="#7C6FF0" strokeWidth="8" />
                  <path d="M25,50 C35,30 65,30 75,50 C65,70 35,70 25,50 Z" fill="none" stroke="#7C6FF0" strokeWidth="6" />
                  <circle cx="50" cy="50" r="12" fill="#7C6FF0" />
                </svg>
              </div>
              <span className="logo-text" style={{color: 'white', fontWeight: 'bold'}}>VEDA</span>
            </div>
            <p className="footer-tagline">Vision Enabled Digital Assistant</p>
            <p className="footer-desc">Low-cost eye-tracking assistive gateway restoring autonomy and dignity to motor-disabled patients worldwide.</p>
          </div>

          <div className="footer-links">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#overview">Overview</a></li>
              <li><a href="#how-to-use">How it Works</a></li>
              <li><a href="#features">Features</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Resources</h4>
            <ul>
              <li><a href="#download">Downloads</a></li>
              <li><a href="https://github.com/abhinaveg/veda" target="_blank" rel="noopener noreferrer">Source Code</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom text-center">
          <p>&copy; {new Date().getFullYear()} VEDA Project. All rights reserved. Open-source prototype for assistive technology.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
