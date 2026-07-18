import React from 'react';
import { Eye, Code, MessageCircle, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-cyprus)', color: 'var(--color-sand)', padding: '4rem 0 2rem 0' }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-sand)' }}>
              <Eye size={32} />
              <span>VEDA</span>
            </a>
            <p style={{ color: 'rgba(240, 237, 228, 0.7)', fontSize: '0.875rem', maxWidth: '250px' }}>
              Vision Enabled Digital Assistant. Restoring communication, independence, and dignity through accessible technology.
            </p>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-sand)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#overview" style={{ color: 'rgba(240, 237, 228, 0.7)' }}>Overview</a></li>
              <li><a href="#how-to-use" style={{ color: 'rgba(240, 237, 228, 0.7)' }}>How it Works</a></li>
              <li><a href="#features" style={{ color: 'rgba(240, 237, 228, 0.7)' }}>Features</a></li>
              <li><a href="#download" style={{ color: 'rgba(240, 237, 228, 0.7)' }}>Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 style={{ color: 'var(--color-sand)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>The Team</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ color: 'rgba(240, 237, 228, 0.7)' }}>Abhinav EG</li>
              <li style={{ color: 'rgba(240, 237, 228, 0.7)' }}>Abijith TS</li>
              <li style={{ color: 'rgba(240, 237, 228, 0.7)' }}>Ajidha Dhanpal</li>
              <li style={{ color: 'rgba(240, 237, 228, 0.7)' }}>Ananthajith KS</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'var(--color-sand)', marginBottom: '1.5rem', fontSize: '1.125rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'rgba(240, 237, 228, 0.7)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-sand)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(240, 237, 228, 0.7)'}>
                <Code size={24} />
              </a>
              <a href="#" style={{ color: 'rgba(240, 237, 228, 0.7)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-sand)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(240, 237, 228, 0.7)'}>
                <MessageCircle size={24} />
              </a>
              <a href="#" style={{ color: 'rgba(240, 237, 228, 0.7)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-sand)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(240, 237, 228, 0.7)'}>
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div style={{ 
          borderTop: '1px solid rgba(240, 237, 228, 0.1)', 
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          fontSize: '0.875rem',
          color: 'rgba(240, 237, 228, 0.5)'
        }}>
          <p>&copy; {new Date().getFullYear()} VEDA Project. All rights reserved.</p>
          <p>Designed for Accessibility.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
