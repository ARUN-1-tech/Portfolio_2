import React from 'react';
import { MapPin, GraduationCap, Award, Download, Award as CertificationIcon } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

export default function About() {
  const handleDownloadResume = () => {
    const resumeUrl = '/ARUN_T_Resume.txt';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'ARUN_T_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const certifications = [
    'Full Stack Development Intern at EliteCrows InfoTech, Gobichettipalayam',
    'UI/UX Course Credit (1 Credit) organized by PinesPhere Solutions',
    'Completed programming certifications (Python, Java, HTML) via Simplilearn & GreatLearning',
    'Certified in Cloud Computing via NPTEL Platform (Score: 65%)'
  ];

  return (
    <section id="about" className="section container">
      <div className="section-header reveal">
        <h2>About Me</h2>
        <p>A brief insight into who I am and my academic background</p>
      </div>

      <div className="about-grid">
        {/* Left Column - Card Profile */}
        <div className="about-left reveal reveal-left">
          <div className="glass-card about-card">
            <div className="about-avatar-container">
              <div className="about-avatar">
                <img src={profileImg} alt="Arun T" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <span className="about-badge">Active</span>
            </div>
            
            <h3>ARUN T</h3>
            <p>Full Stack & Backend Developer</p>
            
            <div className="about-meta">
              <div className="about-meta-item">
                <MapPin size={18} />
                <span>Coimbatore, TamilNadu</span>
              </div>
              <div className="about-meta-item">
                <GraduationCap size={18} />
                <span>B.E. Computer Science & Eng.</span>
              </div>
              <div className="about-meta-item">
                <Award size={18} />
                <span>Dr. NGP Institute of Technology</span>
              </div>
            </div>

            <button 
              className="btn btn-primary" 
              style={{ marginTop: '30px', width: '100%', justifyContent: 'center' }}
              onClick={handleDownloadResume}
            >
              <Download size={18} /> Download CV / Resume
            </button>
          </div>
        </div>

        {/* Right Column - Text Bio */}
        <div className="about-right reveal reveal-right">
          <h3>My Profile & Aspiration</h3>
          <div className="about-text">
            <p>
              I am a Computer Science Engineering student with hands-on experience building full stack web applications using Django, React, Spring Boot, and REST APIs. I maintain a strong foundation in Python, Java, SQL, Git, and cloud deployment.
            </p>
            <p>
              I am passionate about backend engineering, AI applications, and solving real-world problems through software development. I continuously improve my skills through personal projects, hackathons, competitive programming, and exploring emerging AI technologies.
            </p>
          </div>

          <div className="glass-card career-goal-card">
            <h4>Career Goal</h4>
            <p>
              "To become a skilled AI Engineer developing intelligent, scalable, and impactful software solutions."
            </p>
          </div>

          {/* Certifications list */}
          <div style={{ marginBottom: '30px' }}>
            <h4 style={{ marginBottom: '12px', color: 'hsl(var(--text-primary))' }}>Certifications & Experience</h4>
            <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {certifications.map((cert, idx) => (
                <li key={idx} style={{ marginBottom: '4px', paddingLeft: '15px', position: 'relative', fontSize: '0.95rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'hsl(var(--accent-glow))' }}>▹</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>

          <div className="education-details">
            <h4 style={{ marginBottom: '15px', color: 'hsl(var(--text-primary))' }}>Education Summary</h4>
            <div className="glass-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '5px' }}>
                  <strong style={{ color: 'hsl(var(--text-primary))' }}>B.E. in Computer Science & Engineering</strong>
                  <span className="text-gradient" style={{ fontWeight: '700' }}>CGPA: 8.4</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>Dr. NGP Institute of Technology | 2024 — 2028</p>
              </div>
              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '5px' }}>
                  <strong style={{ color: 'hsl(var(--text-primary))' }}>Higher Secondary Schooling</strong>
                  <span className="text-gradient" style={{ fontWeight: '700' }}>HSLC: 90%</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>BAVN Higher Secondary School, Sathy, Erode | 2022 — 2024</p>
              </div>
              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '5px' }}>
                  <strong style={{ color: 'hsl(var(--text-primary))' }}>Secondary Schooling</strong>
                  <span className="text-gradient" style={{ fontWeight: '700' }}>SSLC: 91%</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'hsl(var(--text-muted))' }}>Best Matriculation School, Kallippatti, Erode | 2012 — 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
