import React, { useState, useRef } from 'react';
import { ExternalLink, Users, FileText, TrendingUp, Tv, PenTool, Mic, Activity } from 'lucide-react';
import { Github } from './BrandIcons';

function ProjectCard({ project }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt calculation (max 8 degrees)
    const rotateX = -((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
  };

  return (
    <div
      ref={cardRef}
      className="glass-card project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease' }}
    >
      <div className="project-card-inner">
        <div className="project-icon">
          {project.icon}
        </div>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        
        <div className="project-tags">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="project-tag">{tech}</span>
          ))}
        </div>

        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={16} /> Source Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      title: 'Automated Attendance System and Analysis',
      description: 'A smart attendance management platform with OTP-based verification, role-based access control, admin analytics dashboards, and teacher/student portals.',
      technologies: ['Django', 'Django REST Framework', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
      category: 'fullstack',
      github: 'https://github.com/ARUN-1-tech/Attendance_System.git',
      demo: 'https://attendance-system-ecru-xi.vercel.app/',
      icon: <Users size={22} />
    },
    {
      title: 'Banana Billing & Invoice Management',
      description: 'A React and Django REST billing and ledger solution for wholesale banana distributors. Integrates inventory metrics, tax invoice PDF generation, and admin control dashboards.',
      technologies: ['React', 'Django', 'Django REST Framework', 'PostgreSQL'],
      category: 'fullstack',
      github: 'https://github.com/ARUN-1-tech/Banana-Billing-and-Invoice-Management.git',
      demo: 'https://banana-billing-and-invoice-manageme.vercel.app/login',
      icon: <FileText size={22} />
    },
    {
      title: 'Personal Finance Tracker',
      description: 'A finance manager tool designed to log income, expense logs, budget planning thresholds, and savings benchmarks alongside analytic dashboard visualizations.',
      technologies: ['Django', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
      category: 'fullstack',
      github: 'https://github.com/ARUN-1-tech/FinanceTracker.git',
      demo: null,
      icon: <TrendingUp size={22} />
    },
    {
      title: 'Offline AI Voice Assistant',
      description: 'A speech recognition and local computer automation assistant. Translates natural voice syntax commands to execute local tasks, folder actions, and text transcription.',
      technologies: ['Python', 'Speech Recognition', 'Local AI', 'Automation'],
      category: 'ai',
      github: 'https://github.com/ARUN-1-tech',
      demo: null,
      icon: <Mic size={22} />
    },
    {
      title: 'Sora Gesture Control',
      description: 'A computer vision gesture controller. Captures hand skeletal landmark points via a standard webcam to execute mouse clicks, desktop scrolls, and system actions.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
      category: 'ai',
      github: 'https://github.com/ARUN-1-tech/Sora__Gesture-Control',
      demo: null,
      icon: <Tv size={22} />
    },
    {
      title: 'Cam Writing',
      description: 'A virtual writing pad utilizing a standard webcam. Tracks index fingertip coordinates to write or sketch in the air and render as digital vector strokes.',
      technologies: ['Python', 'OpenCV', 'MediaPipe'],
      category: 'ai',
      github: 'https://github.com/ARUN-1-tech/Cam-Writing',
      demo: null,
      icon: <PenTool size={22} />
    },
    {
      title: 'Voice AI Calculator',
      description: 'A vocal input calculator utility. Uses browser Web Speech Recognition to parse verbal math expressions and compute mathematical equations on screen.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Web Speech API'],
      category: 'ai',
      github: 'https://github.com/ARUN-1-tech/Voice_AI_Calculator',
      demo: null,
      icon: <Activity size={22} />
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="section container">
      <div className="section-header reveal">
        <h2>Selected Projects</h2>
        <p>A compilation of my engineering projects across full-stack applications and AI models</p>
      </div>

      <div className="projects-filter reveal">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
          onClick={() => setFilter('ai')}
        >
          AI & Python
        </button>
        <button 
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Full Stack
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, idx) => (
          <div key={project.title} className="reveal">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
