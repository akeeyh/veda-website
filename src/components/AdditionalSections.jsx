import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AdditionalSections = () => {
  const faqs = [
    {
      q: "Does VEDA need internet to work?",
      a: "No, core features including eye-tracking and emergency alerts run entirely locally on the device to ensure privacy and reliability."
    },
    {
      q: "What hardware do I need?",
      a: "All you need is a standard webcam and a base computer or Raspberry Pi. VEDA is designed to work with low-cost, readily available hardware."
    },
    {
      q: "Is my data stored securely?",
      a: "Yes. VEDA prioritizes patient privacy. Camera feeds are processed in real-time and are never stored or transmitted."
    }
  ];

  return (
    <>
      {/* Comparison Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">Why Choose VEDA?</h2>
            
            <div style={{ marginTop: '3rem', overflowX: 'auto' }}>
              <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-cyprus)' }}>
                    <th style={{ padding: '1rem', color: 'var(--color-cyprus)', width: '33%' }}>Feature</th>
                    <th style={{ padding: '1rem', color: 'var(--text-secondary)', width: '33%' }}>Traditional Systems</th>
                    <th style={{ padding: '1rem', color: 'var(--color-success)', width: '33%', fontSize: '1.25rem' }}>VEDA</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Cost', '$10,000 - $15,000+', '~$100'],
                    ['Hardware Required', 'Specialized IR Cameras', 'Standard Webcam'],
                    ['IoT Integration', 'Often requires expensive add-ons', 'Built-in (Raspberry Pi/ESP32)'],
                    ['Setup Complexity', 'Requires trained technician', 'Plug & Play, Auto-calibrating']
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <td style={{ padding: '1.5rem 1rem', fontWeight: 600, color: 'var(--color-cyprus)' }}>{row[0]}</td>
                      <td style={{ padding: '1.5rem 1rem', color: 'var(--text-muted)' }}>{row[1]}</td>
                      <td style={{ padding: '1.5rem 1rem', fontWeight: 700, color: 'var(--color-cyprus)' }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)', padding: '4rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)', fontWeight: 600, marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.875rem' }}>
            Built With Modern Technologies
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap', opacity: 0.6 }}>
            {/* Using text instead of logos for simplicity, but styled like badges */}
            {['Python', 'OpenCV', 'MediaPipe', 'Pygame', 'SQLite', 'Raspberry Pi', 'ESP32'].map((tech) => (
              <span key={tech} style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-cyprus)' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <details key={i} style={{
                backgroundColor: 'var(--color-sand)',
                padding: '1.5rem',
                borderRadius: 'var(--border-radius)',
                cursor: 'pointer'
              }}>
                <summary style={{ 
                  fontWeight: 600, 
                  color: 'var(--color-cyprus)', 
                  fontSize: '1.125rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  listStyle: 'none'
                }}>
                  {faq.q}
                  <ChevronDown size={20} />
                </summary>
                <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdditionalSections;
