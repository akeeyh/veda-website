import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, Activity, Clock } from 'lucide-react';

const Overview = () => {
  const stats = [
    {
      icon: <Camera size={32} />,
      title: "Standard Hardware",
      description: "Uses a standard webcam, eliminating the need for $10,000+ specialized trackers."
    },
    {
      icon: <Activity size={32} />,
      title: "Real-time Tracking",
      description: "Tracks 468 facial landmarks simultaneously with MediaPipe Face Mesh."
    },
    {
      icon: <Clock size={32} />,
      title: "Rapid Emergency Response",
      description: "Prolonged eye closure triggers safety alerts in under 10 seconds."
    },
    {
      icon: <Cpu size={32} />,
      title: "Accessible Tech",
      description: "Powered by Raspberry Pi / ESP32 for robust IoT and environmental control."
    }
  ];

  return (
    <section id="overview" className="section" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">What is VEDA?</h2>
          <p className="section-subtitle">
            VEDA is designed specifically for individuals with ALS, Locked-In Syndrome, high-level spinal cord injuries, and paralysis, transforming natural eye movements into a powerful tool for communication and independence.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginTop: '4rem'
        }}>
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ textAlign: 'center', backgroundColor: 'var(--color-sand)' }}
            >
              <div style={{ 
                display: 'inline-flex', 
                padding: '1rem', 
                backgroundColor: 'var(--color-cyprus)', 
                color: 'var(--color-sand)', 
                borderRadius: '50%', 
                marginBottom: '1.5rem' 
              }}>
                {stat.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-cyprus)' }}>{stat.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
