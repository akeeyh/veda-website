import React, { useState, useEffect } from 'react';
import { Eye, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'How to Use', href: '#how-to-use' },
    { name: 'Features', href: '#features' },
    { name: 'Download', href: '#download' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: isScrolled ? '1rem 2rem' : '1.5rem 2rem',
      backgroundColor: isScrolled ? 'rgba(240, 237, 228, 0.9)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid rgba(0, 71, 65, 0.1)' : 'none',
      transition: 'var(--transition)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.5rem', color: 'var(--color-cyprus)' }}>
          <Eye size={32} />
          <span>VEDA</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center', margin: 0 }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} style={{ fontWeight: 500, color: 'var(--text-secondary)', transition: 'var(--transition)' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-cyprus)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="#download" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem' }}>Get VEDA</a>
            </li>
          </ul>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="mobile-toggle" style={{ display: 'block', background: 'none', border: 'none', color: 'var(--color-cyprus)' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-sand)',
          padding: '2rem',
          borderBottom: '1px solid rgba(0, 71, 65, 0.1)',
          boxShadow: 'var(--box-shadow)'
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', listStyle: 'none' }}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsMobileMenuOpen(false)} style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--color-cyprus)' }}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
