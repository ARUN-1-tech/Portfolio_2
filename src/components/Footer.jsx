import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#hero" className="footer-logo" onClick={handleScrollToTop}>
          <span className="text-gradient">ARUN T</span>
        </a>
        
        <p className="footer-text">
          &copy; {currentYear} Arun T. All rights reserved. Built with React & Vanilla CSS.
        </p>

        <div className="footer-socials">
          <a href="https://github.com/ARUN-1-tech" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com/in/arun-t-84b61b328" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:moorthyarun2007@gmail.com" className="footer-social-link" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
