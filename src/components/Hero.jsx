import React from 'react';
import { motion } from 'framer-motion';
import { Eye, ArrowRight, Activity } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Graphic Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,71,65,0.05) 0%, rgba(240,237,228,0) 70%)',
        zIndex: -1
      }}></div>
      
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', backgroundColor: 'rgba(0, 71, 65, 0.05)', borderRadius: '50px', color: 'var(--color-cyprus)', fontWeight: 600, marginBottom: '1.5rem' }}>
              <Activity size={18} />
              <span>Vision Enabled Digital Assistant</span>
            </div>
            
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', color: 'var(--color-cyprus)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Restoring <span style={{ color: 'var(--color-cyprus-light)' }}>Communication</span>, Independence, and Dignity.
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
              A low-cost, eye-tracking-based assistive communication and IoT control system for people with severe motor disabilities.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#download" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Download VEDA <ArrowRight size={20} />
              </a>
              <a href="#how-to-use" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                Learn How It Works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
          >
            {/* Abstract Eye/Gaze Motif */}
            <div style={{
              width: '100%',
              maxWidth: '500px',
              aspectRatio: '1/1',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                position: 'absolute',
                inset: '10%',
                border: '2px solid rgba(0, 71, 65, 0.1)',
                borderRadius: '50%',
                animation: 'pulse 4s infinite alternate'
              }}></div>
              <div style={{
                position: 'absolute',
                inset: '25%',
                border: '2px solid rgba(0, 71, 65, 0.2)',
                borderRadius: '50%',
                animation: 'pulse 4s infinite alternate-reverse'
              }}></div>
              <div style={{
                backgroundColor: 'var(--color-cyprus)',
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--color-sand)',
                boxShadow: '0 20px 40px rgba(0, 71, 65, 0.2)'
              }}>
                <Eye size={64} />
              </div>
            </div>
            
            {/* Inline CSS for simple animations */}
            <style>{`
              @keyframes pulse {
                0% { transform: scale(1); opacity: 0.5; }
                100% { transform: scale(1.05); opacity: 1; }
              }
            `}</style>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
