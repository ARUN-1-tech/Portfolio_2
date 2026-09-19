import React, { useState } from 'react';
import {
  IconHtml,
  IconCss,
  IconJavascript,
  IconTypescript,
  IconReact,
  IconPython,
  IconJava,
  IconSpringBoot,
  IconDjango,
  IconDrf,
  IconPostgresql,
  IconMysql,
  IconSqlite,
  IconGenerativeAi,
  IconGemini,
  IconOpencv,
  IconMediapipe,
  IconGit,
  IconGithub,
  IconDocker,
  IconPostman,
  IconVercel,
  IconRender,
} from './TechIcons';

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all');

  const techStacks = [
    // Languages
    { id: 'html', name: 'HTML', category: 'languages', icon: <IconHtml size={40} /> },
    { id: 'css', name: 'CSS', category: 'languages', icon: <IconCss size={40} /> },
    { id: 'javascript', name: 'JAVASCRIPT', category: 'languages', icon: <IconJavascript size={40} /> },
    { id: 'typescript', name: 'TYPESCRIPT', category: 'languages', icon: <IconTypescript size={40} /> },
    { id: 'python', name: 'PYTHON', category: 'languages', icon: <IconPython size={40} /> },
    { id: 'java', name: 'JAVA', category: 'languages', icon: <IconJava size={40} /> },

    // Frameworks & Web
    { id: 'react', name: 'REACT', category: 'frameworks', icon: <IconReact size={40} /> },
    { id: 'spring-boot', name: 'SPRING BOOT', category: 'frameworks', icon: <IconSpringBoot size={40} /> },
    { id: 'django', name: 'DJANGO', category: 'frameworks', icon: <IconDjango size={40} /> },
    { id: 'drf', name: 'DJANGO REST FRAMEWORK', category: 'frameworks', icon: <IconDrf size={40} /> },

    // Databases
    { id: 'postgresql', name: 'POSTGRESQL', category: 'databases', icon: <IconPostgresql size={40} /> },
    { id: 'mysql', name: 'MYSQL', category: 'databases', icon: <IconMysql size={40} /> },
    { id: 'sqlite', name: 'SQLITE', category: 'databases', icon: <IconSqlite size={40} /> },

    // AI & Vision
    { id: 'genai', name: 'GENERATIVE AI', category: 'ai', icon: <IconGenerativeAi size={40} /> },
    { id: 'gemini', name: 'GEMINI API', category: 'ai', icon: <IconGemini size={40} /> },
    { id: 'opencv', name: 'OPENCV', category: 'ai', icon: <IconOpencv size={40} /> },
    { id: 'mediapipe', name: 'MEDIAPIPE', category: 'ai', icon: <IconMediapipe size={40} /> },

    // Tools & Cloud
    { id: 'git', name: 'GIT', category: 'tools', icon: <IconGit size={40} /> },
    { id: 'github', name: 'GITHUB', category: 'tools', icon: <IconGithub size={40} /> },
    { id: 'docker', name: 'DOCKER', category: 'tools', icon: <IconDocker size={40} /> },
    { id: 'postman', name: 'POSTMAN', category: 'tools', icon: <IconPostman size={40} /> },
    { id: 'vercel', name: 'VERCEL', category: 'tools', icon: <IconVercel size={40} /> },
    { id: 'render', name: 'RENDER', category: 'tools', icon: <IconRender size={40} /> },
  ];

  const filterCategories = [
    { id: 'all', label: 'All Tech' },
    { id: 'languages', label: 'Languages' },
    { id: 'frameworks', label: 'Frameworks' },
    { id: 'databases', label: 'Databases' },
    { id: 'ai', label: 'AI & Vision' },
    { id: 'tools', label: 'Tools & Cloud' },
  ];

  const filteredStacks = activeFilter === 'all'
    ? techStacks
    : techStacks.filter((tech) => tech.category === activeFilter);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="skills" className="section container">
      <div className="section-header reveal">
        <h2>Tech Stack & Skills</h2>
        <p>Technologies, frameworks, and developer tools I build with</p>
      </div>

      {/* Filter Tabs */}
      <div className="tech-filters reveal">
        {filterCategories.map((cat) => (
          <button
            key={cat.id}
            className={`tech-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Tech Stacks Grid */}
      <div className="tech-grid reveal">
        {filteredStacks.map((tech) => (
          <div
            key={tech.id}
            className="glass-card tech-card"
            onMouseMove={handleMouseMove}
          >
            <div className="tech-icon-wrap">
              {tech.icon}
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
