import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Monitor, Command, Terminal, ChevronDown } from 'lucide-react';

const DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1IyzoG_u88WgyB1kK0G-icPMsp1Yao46Y";

const PlatformCard = ({ icon, name, reqs, url }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="card"
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        textAlign: 'center',
        padding: '2rem',
        border: '1px solid rgba(0, 71, 65, 0.1)',
        backgroundColor: 'var(--color-white)'
      }}
    >
      <div style={{ color: 'var(--color-cyprus)', marginBottom: '1rem' }}>
        {icon}
      </div>
      <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--color-cyprus)' }}>{name}</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>{reqs}</p>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-primary"
        style={{ width: '100%' }}
      >
        Download
      </a>
    </motion.div>
  );
};

const DownloadSection = () => {
  const [showPlatforms, setShowPlatforms] = useState(false);

  return (
    <section id="download" className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <h2 className="section-title">Get VEDA</h2>
          <p className="section-subtitle">
            Experience the future of accessible communication. Download the research prototype for your operating system today.
          </p>

          {!showPlatforms ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              onClick={() => setShowPlatforms(true)}
              style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}
            >
              <Download size={24} /> Download VEDA
            </motion.button>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ marginTop: '2rem' }}
            >
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
                gap: '2rem' 
              }}>
                <PlatformCard 
                  icon={<Monitor size={48} />} 
                  name="Windows" 
                  reqs="Windows 10/11, 64-bit" 
                  url={DOWNLOAD_URL} 
                />
                <PlatformCard 
                  icon={<Command size={48} />} 
                  name="macOS" 
                  reqs="macOS 11.0 or later" 
                  url={DOWNLOAD_URL} 
                />
                <PlatformCard 
                  icon={<Terminal size={48} />} 
                  name="Linux" 
                  reqs="Ubuntu 20.04+, 64-bit" 
                  url={DOWNLOAD_URL} 
                />
              </div>
            </motion.div>
          )}

          <AnimatePresence>
            {showPlatforms && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ 
                  marginTop: '3rem', 
                  fontSize: '0.875rem', 
                  color: 'var(--text-muted)' 
                }}
              >
                By downloading, you agree that this is a research and educational prototype.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
