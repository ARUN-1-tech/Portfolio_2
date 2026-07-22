import React, { useEffect, useState, useRef } from 'react';
import { Cpu, Server, Monitor, Database, Terminal } from 'lucide-react';

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.disconnect();
    };
  }, []);

  const skillCategories = [
    {
      title: 'Artificial Intelligence & ML',
      icon: <Cpu size={22} />,
      skills: [
        { name: 'Prompt Engineering', percent: 90 },
        { name: 'RAG (Retrieval-Augmented Gen)', percent: 80 },
        { name: 'FAISS Vector Search', percent: 80 },
        { name: 'Sentence Transformers', percent: 85 },
        { name: 'Hugging Face Hub', percent: 75 }
      ]
    },
    {
      title: 'Backend Development',
      icon: <Server size={22} />,
      skills: [
        { name: 'Python', percent: 90 },
        { name: 'Django & Django REST Framework', percent: 88 },
        { name: 'Java', percent: 80 },
        { name: 'Spring Boot', percent: 82 },
        { name: 'REST APIs', percent: 88 }
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Monitor size={22} />,
      skills: [
        { name: 'React', percent: 82 },
        { name: 'JavaScript (ES6+)', percent: 88 },
        { name: 'HTML5 & CSS3', percent: 92 },
        { name: 'Responsive Web Design', percent: 90 }
      ]
    },
    {
      title: 'Database Systems',
      icon: <Database size={22} />,
      skills: [
        { name: 'PostgreSQL & MySQL', percent: 85 },
        { name: 'SQLite', percent: 85 },
        { name: 'Firebase', percent: 78 }
      ]
    },
    {
      title: 'Tools & Ecosystems',
      icon: <Terminal size={22} />,
      skills: [
        { name: 'Git & GitHub', percent: 88 },
        { name: 'Docker (Basics)', percent: 70 },
        { name: 'Vercel / Render Deployment', percent: 85 },
        { name: 'Postman API Client', percent: 80 }
      ]
    }
  ];

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="skills" className="section container" ref={sectionRef}>
      <div className="section-header reveal">
        <h2>Expertise & Skills</h2>
        <p>My tech stack and proficiency ratings in engineering domains</p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="glass-card skills-category reveal" onMouseMove={handleMouseMove}>
            <h3>
              {category.icon}
              <span className="text-gradient">{category.title}</span>
            </h3>
            
            <div className="skills-list">
              {category.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percent}%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div 
                      className="skill-bar-progress" 
                      style={{ width: animate ? `${skill.percent}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
