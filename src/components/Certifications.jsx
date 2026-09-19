import React, { useState, useRef } from 'react';
import { 
  Award, 
  Cloud, 
  Code, 
  Cpu, 
  Layers, 
  Zap, 
  ShieldCheck, 
  ExternalLink, 
  Eye, 
  X, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileCheck
} from 'lucide-react';

import certC from '../assets/certificates/c_for_beginners.jpg';
import certHtmlTut from '../assets/certificates/html_tutorial.jpg';
import certHtmlFront from '../assets/certificates/frontend_html.jpg';
import certAstranova from '../assets/certificates/astranova_2k25.jpg';
import certIste from '../assets/certificates/iste_membership.jpg';

function CertCard({ item, onOpenModal }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 7;
    const rotateY = ((x - centerX) / centerX) * 7;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  };

  return (
    <div
      ref={cardRef}
      className="glass-card cert-content-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="cert-card-inner">
        <div className="cert-card-header">
          <div className="cert-card-icon">
            {item.icon}
          </div>
          <span className="cert-badge">{item.badge}</span>
        </div>

        <h3 className="cert-title">{item.title}</h3>
        <p className="cert-issuer">
          <span>{item.issuer}</span>
          <span className="cert-dot">•</span>
          <span className="cert-year"><Calendar size={13} /> {item.year}</span>
        </p>

        <p className="cert-desc">{item.description}</p>

        <div className="cert-highlights">
          {item.highlights.map((h, i) => (
            <span key={i} className="cert-highlight-tag">{h}</span>
          ))}
        </div>

        <div className="cert-card-footer">
          {item.images && item.images.length > 0 ? (
            <button
              className="cert-view-btn"
              onClick={() => onOpenModal(item.images[0])}
            >
              <Eye size={16} /> View Certificate {item.images.length > 1 ? `(${item.images.length})` : ''}
            </button>
          ) : (
            <span className="cert-pending-tag">
              <Clock size={14} /> Certificate image pending
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [galleryFilter, setGalleryFilter] = useState('all');

  const certificationsData = [
    {
      id: 'nptel-cloud',
      title: 'NPTEL Elite Certification: Cloud Computing',
      issuer: 'IIT Kharagpur & NPTEL',
      year: '2026',
      badge: 'Elite Grade',
      category: 'cloud',
      icon: <Cloud size={24} />,
      description: 'Awarded Elite grade (65%) for successfully completing the comprehensive Cloud Computing certification curriculum by IIT Kharagpur on the SWAYAM NPTEL platform.',
      highlights: ['Cloud Virtualization', 'Distributed Storage', 'AWS & Cloud Architecture', 'Resource Management'],
      images: null,
    },
    {
      id: 'elitecrows-internship',
      title: 'Full Stack Web Development Internship',
      issuer: 'Elitecrows Infotech, Gobichettipalayam',
      year: '2026',
      badge: 'Internship',
      category: 'internship',
      icon: <Layers size={24} />,
      description: 'Completed an intensive 15-day full-stack engineering internship, working with modern web application architecture, database schemas, and REST API development.',
      highlights: ['Full Stack Architecture', 'REST APIs', 'Database Design', 'Production Deployment'],
      images: null,
    },
    {
      id: 'matlab-onramp',
      title: 'MATLAB Onramp Certification',
      issuer: 'MathWorks Training Services',
      year: 'Completed 100%',
      badge: '100% Score',
      category: 'computing',
      icon: <Cpu size={24} />,
      description: 'Completed 100% of the rigorous MathWorks MATLAB Onramp training, focusing on vector computation, data analytics, mathematical plotting, and algorithmic workflows.',
      highlights: ['Matrix Computations', 'Data Visualization', 'Algorithmic Workflows', 'MathWorks Certified'],
      images: null,
    },
    {
      id: 'c-beginners',
      title: 'C for Beginners',
      issuer: 'Great Learning Academy',
      year: 'September 2024',
      badge: 'Verified Course',
      category: 'programming',
      icon: <Code size={24} />,
      description: 'Mastered foundational concepts of procedural programming in C, including memory management, pointers, dynamic allocation, control structures, and modular code.',
      highlights: ['Pointers & Memory', 'Data Structures', 'Procedural Logic', 'Algorithms'],
      images: [
        {
          title: 'C for Beginners',
          issuer: 'Great Learning Academy',
          date: 'September 2024',
          src: certC,
          id: 'c-cert'
        }
      ],
    },
    {
      id: 'html-frontend',
      title: 'HTML / Front-End Development',
      issuer: 'Great Learning Academy',
      year: 'November 2024',
      badge: 'Dual Certification',
      category: 'frontend',
      icon: <FileCheck size={24} />,
      description: 'Successfully completed both the comprehensive HTML Tutorial and Front End Development - HTML certification tracks, developing deep knowledge in semantic web markup and accessible layouts.',
      highlights: ['HTML5 Semantics', 'Responsive Layouts', 'Front-End Architecture', 'Web Standards'],
      images: [
        {
          title: 'HTML Tutorial',
          issuer: 'Great Learning Academy',
          date: 'November 2024',
          src: certHtmlTut,
          id: 'html-tut-cert'
        },
        {
          title: 'Front End Development - HTML',
          issuer: 'Great Learning Academy',
          date: 'November 2024',
          src: certHtmlFront,
          id: 'html-front-cert'
        }
      ],
    },
    {
      id: 'astranova-cynosure',
      title: 'Technical Symposiums: ASTRANOVA 2K25 & Cynosure 2K25',
      issuer: 'Coimbatore Institute of Technology (CIT)',
      year: 'Feb - Mar 2025',
      badge: 'National Symposium',
      category: 'symposium',
      icon: <Award size={24} />,
      description: 'Participated in national-level technical symposiums at CIT (Department of IT) including ASTRANOVA 2K25 and Cynosure 2K25, demonstrating engineering problem solving in competitive events.',
      highlights: ['Technical Paper / Project', 'Competitive Coding', 'Inter-College Symposium', 'National Level'],
      images: [
        {
          title: 'ASTRANOVA 2K25 Participation',
          issuer: 'Coimbatore Institute of Technology',
          date: '28 Feb - 1 Mar 2025',
          src: certAstranova,
          id: 'astranova-cert'
        }
      ],
    },
    {
      id: 'cih-hackathon',
      title: 'Innovation Hackathon: CIH’26',
      issuer: 'Coimbatore Innovation Hackathon',
      year: '2026',
      badge: 'Hackathon',
      category: 'hackathon',
      icon: <Zap size={24} />,
      description: 'Competed in CIH’26 (Coimbatore Innovation Hackathon), collaborating under tight timelines to ideate, architect, and prototype innovative technology solutions addressing real-world challenges.',
      highlights: ['Rapid Prototyping', 'Team Collaboration', 'Problem Solving', 'Software Innovation'],
      images: null,
    },
    {
      id: 'iste-member',
      title: 'ISTE Student Member',
      issuer: 'Indian Society for Technical Education',
      year: '2024 — 2028',
      badge: 'Life Membership',
      category: 'membership',
      icon: <ShieldCheck size={24} />,
      description: 'Official Student Member of the Indian Society for Technical Education (SM No.: 3189, SC Code: TN334), committed to continuous technical advancement, workshops, and engineering leadership.',
      highlights: ['Membership No: 3189', 'Institutional Chapter', 'Technical Excellence', 'Professional Network'],
      images: [
        {
          title: 'ISTE Student Membership Card',
          issuer: 'Indian Society for Technical Education',
          date: '2024 to 2028',
          src: certIste,
          id: 'iste-cert'
        }
      ],
    }
  ];

  // Flatten all certificate images for the gallery section
  const galleryItems = [
    {
      id: 'cert-c',
      title: 'C for Beginners',
      issuer: 'Great Learning Academy',
      date: 'September 2024',
      src: certC,
      type: 'available',
      tag: 'Programming'
    },
    {
      id: 'cert-html-tut',
      title: 'HTML Tutorial',
      issuer: 'Great Learning Academy',
      date: 'November 2024',
      src: certHtmlTut,
      type: 'available',
      tag: 'Web Development'
    },
    {
      id: 'cert-html-front',
      title: 'Front End Development - HTML',
      issuer: 'Great Learning Academy',
      date: 'November 2024',
      src: certHtmlFront,
      type: 'available',
      tag: 'Web Development'
    },
    {
      id: 'cert-astranova',
      title: 'ASTRANOVA 2K25 - National Symposium',
      issuer: 'Coimbatore Institute of Technology',
      date: 'Feb - Mar 2025',
      src: certAstranova,
      type: 'available',
      tag: 'Symposium'
    },
    {
      id: 'cert-iste',
      title: 'ISTE Student Membership',
      issuer: 'Indian Society for Technical Education',
      date: '2024 — 2028',
      src: certIste,
      type: 'available',
      tag: 'Membership'
    },
    {
      id: 'cert-nptel',
      title: 'NPTEL Elite: Cloud Computing',
      issuer: 'IIT Kharagpur & NPTEL',
      date: '2026',
      src: null,
      type: 'pending',
      tag: 'Cloud Computing'
    },
    {
      id: 'cert-elitecrows',
      title: 'Full Stack Development Internship',
      issuer: 'Elitecrows Infotech',
      date: '2026',
      src: null,
      type: 'pending',
      tag: 'Internship'
    },
    {
      id: 'cert-matlab',
      title: 'MATLAB Onramp (100%)',
      issuer: 'MathWorks',
      date: 'Training Program',
      src: null,
      type: 'pending',
      tag: 'Data & Computation'
    },
    {
      id: 'cert-cih',
      title: 'Innovation Hackathon (CIH’26)',
      issuer: 'Coimbatore Innovation Hackathon',
      date: '2026',
      src: null,
      type: 'pending',
      tag: 'Hackathon'
    },
  ];

  const filteredGallery = galleryFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.type === galleryFilter);

  const handleGalleryCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleGalleryCardLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
  };

  return (
    <section id="certifications" className="section container">
      {/* 1. Main Header */}
      <div className="section-header reveal">
        <h2>Certifications & Achievements</h2>
        <p>Verified professional courses, internships, technical symposiums, and hackathons</p>
      </div>

      {/* 2. Part 1: All Certifications & Achievements Content */}
      <div className="cert-cards-grid reveal">
        {certificationsData.map((item) => (
          <CertCard 
            key={item.id} 
            item={item} 
            onOpenModal={(img) => setSelectedCert(img)} 
          />
        ))}
      </div>

      {/* 3. Part 2: All Certificates Gallery - Click to View */}
      <div className="cert-gallery-wrapper reveal" style={{ marginTop: '70px' }}>
        <div className="cert-gallery-header">
          <div>
            <h3 className="cert-gallery-title">Official Certificate Gallery</h3>
            <p className="cert-gallery-subtitle">Click any certificate thumbnail to inspect in high resolution</p>
          </div>
          
          <div className="cert-gallery-filters">
            <button
              className={`cert-pill-btn ${galleryFilter === 'all' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('all')}
            >
              All Certificates ({galleryItems.length})
            </button>
            <button
              className={`cert-pill-btn ${galleryFilter === 'available' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('available')}
            >
              Available ({galleryItems.filter(i => i.type === 'available').length})
            </button>
            <button
              className={`cert-pill-btn ${galleryFilter === 'pending' ? 'active' : ''}`}
              onClick={() => setGalleryFilter('pending')}
            >
              Pending Next Upload ({galleryItems.filter(i => i.type === 'pending').length})
            </button>
          </div>
        </div>

        <div className="cert-gallery-grid">
          {filteredGallery.map((cert) => (
            <div
              key={cert.id}
              className={`glass-card cert-thumb-card ${cert.type === 'available' ? 'clickable' : 'pending'}`}
              onMouseMove={handleGalleryCardMove}
              onMouseLeave={handleGalleryCardLeave}
              onClick={() => cert.type === 'available' && setSelectedCert(cert)}
            >
              <div className="cert-thumb-image-wrap">
                {cert.src ? (
                  <>
                    <img src={cert.src} alt={cert.title} loading="lazy" />
                    <div className="cert-thumb-overlay">
                      <span className="cert-zoom-btn">
                        <Eye size={18} /> Click to View
                      </span>
                    </div>
                  </>
                ) : (
                  <div className="cert-placeholder-visual">
                    <Award size={40} className="cert-placeholder-icon" />
                    <span className="cert-placeholder-text">Credential Verified</span>
                    <span className="cert-placeholder-sub">Image upload coming soon</span>
                  </div>
                )}
                <span className="cert-thumb-tag">{cert.tag}</span>
              </div>

              <div className="cert-thumb-info">
                <h4 className="cert-thumb-title">{cert.title}</h4>
                <div className="cert-thumb-meta">
                  <span className="cert-thumb-issuer">{cert.issuer}</span>
                  <span className="cert-thumb-date">{cert.date}</span>
                </div>
                {cert.src && (
                  <div className="cert-thumb-action">
                    <span>Click to inspect full certificate</span>
                    <ExternalLink size={14} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Lightbox Modal - Click to View */}
      {selectedCert && (
        <div className="cert-modal-backdrop" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="cert-modal-header">
              <div className="cert-modal-titles">
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.issuer} • {selectedCert.date}</p>
              </div>
              <button 
                className="cert-modal-close-btn" 
                onClick={() => setSelectedCert(null)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            <div className="cert-modal-body">
              <img src={selectedCert.src} alt={selectedCert.title} />
            </div>

            <div className="cert-modal-footer">
              <span className="cert-modal-status">
                <CheckCircle2 size={16} color="hsl(var(--accent-glow))" /> Verified Certificate Credential
              </span>
              <a
                href={selectedCert.src}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary cert-modal-download-btn"
              >
                <ExternalLink size={16} /> Open Full Size
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
