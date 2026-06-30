import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Hero() {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = [
    'Full Stack Developer',
    'Backend Developer',
    'AI Enthusiast',
    'Problem Solver'
  ];

  const TYPING_SPEED = 100;
  const DELETING_SPEED = 50;
  const PAUSE_DURATION = 2000;

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing characters
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, TYPING_SPEED);

      if (text === currentWord) {
        // Word completed, pause before starting deletion
        clearTimeout(timer);
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION);
      }
    } else {
      // Deleting characters
      timer = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, DELETING_SPEED);

      if (text === '') {
        setIsDeleting(false);
        setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="section container">
      <div className="hero-content reveal">
        <span className="hero-subtitle">Hello World, I'm</span>
        <h1 className="hero-title">
          <span className="text-gradient">ARUN T</span>
        </h1>
        <div className="hero-tagline">
          I'm a <span style={{ borderRight: '2px solid hsl(var(--accent-glow))', paddingRight: '4px', animation: 'blink 0.8s infinite' }}>{text}</span>
        </div>
        <p className="hero-desc">
          Building AI-powered applications and scalable web solutions with a passion for innovation and real-world problem solving.
        </p>
        
        <div className="hero-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => handleScrollTo('projects')}
          >
            Explore Projects <ArrowRight size={18} />
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => handleScrollTo('contact')}
          >
            Get In Touch
          </button>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/ARUN-1-tech" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/arun-t-84b61b328" target="_blank" rel="noopener noreferrer" className="hero-social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:moorthyarun2007@gmail.com" className="hero-social-link" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
      
      {/* Dynamic Cursor blinking animation keyframe inline */}
      <style>{`
        @keyframes blink {
          50% { border-color: transparent }
        }
      `}</style>
    </section>
  );
}
