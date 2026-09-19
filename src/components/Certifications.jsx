import React, { useState, useRef } from 'react';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  X, 
  CheckCircle2, 
  Clock, 
  Calendar,
  Layers,
  Cpu
} from 'lucide-react';

import certNptel from '../assets/certificates/nptel_cloud.jpg';
import certCih from '../assets/certificates/cih_hackathon.jpg';
import certCynosure from '../assets/certificates/cynosure_2k25.jpg';
import certAstranova from '../assets/certificates/astranova_2k25.jpg';
import certDebate from '../assets/certificates/engineers_voice_debate.jpg';
import certIste from '../assets/certificates/iste_membership.jpg';
import certC from '../assets/certificates/c_for_beginners.jpg';
import certHtmlTut from '../assets/certificates/html_tutorial.jpg';
import certHtmlFront from '../assets/certificates/frontend_html.jpg';
import certElitecrows from '../assets/certificates/elitecrows_internship.jpg';
import certMatlab from '../assets/certificates/matlab_onramp.jpg';

function MidCertCard({ item, onOpenModal }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  const hasImage = item.images && item.images.length > 0;

  return (
    <div
      ref={cardRef}
      className={`glass-card mid-cert-card ${hasImage ? 'clickable' : ''}`}
      onMouseMove={handleMouseMove}
      onClick={() => hasImage && onOpenModal(item.images[0])}
    >
      {/* Top Banner / Certificate Preview */}
      <div className="mid-cert-banner">
        {hasImage ? (
          <>
            <img 
              src={item.images[0].src} 
              alt={item.title} 
              className="mid-cert-img" 
              loading="lazy"
            />
            <div className="mid-cert-overlay">
              <span className="mid-cert-view-badge">
                <Eye size={15} /> Click to View
              </span>
            </div>
          </>
        ) : (
          <div className="mid-cert-placeholder">
            {item.placeholderIcon || <Award size={32} className="mid-cert-placeholder-icon" />}
            <span className="mid-cert-placeholder-text">Verified Credential</span>
            <span className="mid-cert-placeholder-note">Image pending upload</span>
          </div>
        )}

        <span className="mid-cert-badge">{item.badge}</span>
      </div>

      {/* Content */}
      <div className="mid-cert-content">
        <h3 className="mid-cert-title">{item.title}</h3>
        
        <div className="mid-cert-meta">
          <span className="mid-cert-issuer">{item.issuer}</span>
          <span className="mid-cert-dot">•</span>
          <span className="mid-cert-date">
            <Calendar size={12} /> {item.year}
          </span>
        </div>

        <p className="mid-cert-desc">{item.description}</p>

        {/* Footer actions */}
        <div className="mid-cert-footer">
          {hasImage ? (
            <div className="mid-cert-action-row">
              <button 
                className="mid-cert-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenModal(item.images[0]);
                }}
              >
                <Eye size={14} /> View Certificate
              </button>
              {item.images.length > 1 && (
                <button
                  className="mid-cert-btn-sub"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenModal(item.images[1]);
                  }}
                  title="View second certificate"
                >
                  Part 2
                </button>
              )}
            </div>
          ) : (
            <span className="mid-cert-pending-pill">
              <Clock size={13} /> Certificate upload pending
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('all');

  const certificationsList = [
    {
      id: 'nptel-cloud',
      title: 'NPTEL Elite Certification: Cloud Computing',
      issuer: 'IIT Kharagpur & SWAYAM NPTEL',
      year: 'Jan-Apr 2026',
      badge: 'Elite 65%',
      category: 'certifications',
      description: 'Awarded Elite status with 65% consolidated score for completing the 12-week Cloud Computing curriculum.',
      images: [
        {
          title: 'NPTEL Online Certification: Cloud Computing (Elite)',
          issuer: 'IIT Kharagpur (SWAYAM)',
          date: 'Jan-Apr 2026',
          src: certNptel
        }
      ]
    },
    {
      id: 'cih-hackathon',
      title: 'Innovation Hackathon: CIH’26',
      issuer: 'Rathinam Global University & AIC RAISE',
      year: 'Aug 2026',
      badge: 'Hackathon',
      category: 'hackathons',
      description: 'Participated in the 24-hour innovation challenge CIH’26 (Coimbatore Innovation Hackathon) creating rapid software prototypes.',
      images: [
        {
          title: 'CIH’26 Coimbatore Innovation Hackathon',
          issuer: 'Rathinam Global University & AIC RAISE',
          date: 'August 2026',
          src: certCih
        }
      ]
    },
    {
      id: 'astranova-2k25',
      title: 'ASTRANOVA 2K25 Technical Symposium',
      issuer: 'Coimbatore Institute of Technology (CIT)',
      year: 'Feb-Mar 2025',
      badge: 'National Symposium',
      category: 'symposiums',
      description: 'National-level technical symposium organized by the Department of Information Technology at CIT.',
      images: [
        {
          title: 'ASTRANOVA 2K25 Certificate of Participation',
          issuer: 'Coimbatore Institute of Technology (CIT)',
          date: '28 Feb - 1 Mar 2025',
          src: certAstranova
        }
      ]
    },
    {
      id: 'cynosure-2k25',
      title: 'Cynosure 2K25 Technical Symposium',
      issuer: 'KGiSL Institute of Technology (KITE)',
      year: 'April 2025',
      badge: 'National Symposium',
      category: 'symposiums',
      description: 'National-level technical symposium organized by the Department of Computer Science and Engineering at KGiSL.',
      images: [
        {
          title: 'Cynosure 2K25 Certificate of Participation',
          issuer: 'KGiSL Institute of Technology (KITE)',
          date: '04 April 2025',
          src: certCynosure
        }
      ]
    },
    {
      id: 'engineers-voice',
      title: "Engineers' Voice: Tech for Peace",
      issuer: 'Dr. N.G.P. Institute of Technology',
      year: 'Sep 2024',
      badge: 'Debate Award',
      category: 'hackathons',
      description: 'Certificate of Appreciation for exemplary critical thinking and innovation in the Tech for Peace debate contest.',
      images: [
        {
          title: "Certificate of Appreciation: Engineers' Voice - Tech for Peace",
          issuer: 'Dr. N.G.P. Institute of Technology',
          date: '28 September 2024',
          src: certDebate
        }
      ]
    },
    {
      id: 'iste-member',
      title: 'ISTE Student Member',
      issuer: 'Indian Society for Technical Education',
      year: '2024 — 2028',
      badge: 'Membership',
      category: 'memberships',
      description: 'Admitted as Student Member (SM No.: 3189, SC Code: TN334) for engineering and technical education leadership.',
      images: [
        {
          title: 'The Indian Society for Technical Education - Student Member',
          issuer: 'ISTE Executive Council',
          date: '2024 to 2028',
          src: certIste
        }
      ]
    },
    {
      id: 'html-frontend',
      title: 'HTML / Front-End Development',
      issuer: 'Great Learning Academy',
      year: 'Nov 2024',
      badge: 'Dual Cert',
      category: 'certifications',
      description: 'Completed Front End Development - HTML and HTML Tutorial covering modern HTML5 document architecture.',
      images: [
        {
          title: 'Front End Development - HTML',
          issuer: 'Great Learning Academy',
          date: 'November 2024',
          src: certHtmlFront
        },
        {
          title: 'HTML Tutorial',
          issuer: 'Great Learning Academy',
          date: 'November 2024',
          src: certHtmlTut
        }
      ]
    },
    {
      id: 'c-beginners',
      title: 'C for Beginners',
      issuer: 'Great Learning Academy',
      year: 'Sep 2024',
      badge: 'Course Cert',
      category: 'certifications',
      description: 'Mastered foundational procedural programming, pointer operations, and memory logic in C.',
      images: [
        {
          title: 'C for Beginners Certificate of Completion',
          issuer: 'Great Learning Academy',
          date: 'September 2024',
          src: certC
        }
      ]
    },
    {
      id: 'elitecrows-internship',
      title: 'Full Stack Web Development Internship',
      issuer: 'Elitecrows Infotech, Gobichettipalayam',
      year: 'May 2026',
      badge: 'Internship',
      category: 'memberships',
      description: '15-day hands-on engineering internship building responsive web apps with frontend and backend frameworks.',
      images: [
        {
          title: 'Internship Completion Certificate: Full Stack Web Development',
          issuer: 'Elitecrows Infotech, Gobichettipalayam',
          date: '15th May - 30th May, 2026',
          src: certElitecrows
        }
      ]
    },
    {
      id: 'matlab-onramp',
      title: 'MATLAB Onramp',
      issuer: 'MathWorks Training Services',
      year: 'Completed 100%',
      badge: '100% Score',
      category: 'certifications',
      description: 'Completed 100% of the MathWorks computational training program on numerical analysis and matrix computations.',
      images: [
        {
          title: 'MathWorks Progress Report: MATLAB Onramp (100%)',
          issuer: 'MathWorks Training Services',
          date: '18 November 2024',
          src: certMatlab
        }
      ]
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Credentials' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'hackathons', label: 'Hackathons & Contests' },
    { id: 'symposiums', label: 'Symposiums' },
    { id: 'memberships', label: 'Internships & Memberships' }
  ];

  const filteredItems = filter === 'all'
    ? certificationsList
    : certificationsList.filter(item => item.category === filter);

  return (
    <section id="certifications" className="section container">
      {/* Header */}
      <div className="section-header reveal">
        <h2>Certifications & Achievements</h2>
        <p>Verified professional certifications, hackathons, and technical symposiums</p>
      </div>

      {/* Filter Tabs */}
      <div className="mid-cert-filters reveal">
        {filterTabs.map(tab => (
          <button
            key={tab.id}
            className={`mid-cert-filter-btn ${filter === tab.id ? 'active' : ''}`}
            onClick={() => setFilter(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Mid-sized Cards Grid */}
      <div className="mid-cert-grid reveal">
        {filteredItems.map(item => (
          <MidCertCard
            key={item.id}
            item={item}
            onOpenModal={(img) => setSelectedCert(img)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
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
