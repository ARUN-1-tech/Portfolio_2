import React from 'react';

export default function Experience() {
  const milestones = [
    {
      date: 'Internship',
      title: 'Full Stack Developer Intern',
      subtitle: 'EliteCrows InfoTech, Gobichettipalayam',
      bullets: [
        'Served as an intern focusing on Full Stack Web Development.',
        'Worked with web technologies, building interactive user interfaces and connecting RESTful endpoints.'
      ]
    },
    {
      date: 'Present Focus',
      title: 'Aspiring Full Stack Developer',
      subtitle: 'Self-Directed Research & Projects',
      bullets: [
        'Deepening expertise in Backend engineering (Django, Spring Boot) and modern frontends (React).',
        'Implementing AI capabilities using sentence transformers and prompt engineering in web environments.'
      ]
    },
    {
      date: 'Hackathon Achievements',
      title: 'Hackathon Winner & Project Developer',
      subtitle: 'Coding Competitions & Deployments',
      bullets: [
        'Won 1st Prize in the BIT Hackathon (₹1500 Cash Prize) for software excellence.',
        'Won 3rd place in the Attendance Management System Hackathon.',
        'Built, containerized, and deployed multiple real-world web applications on Vercel and Render.'
      ]
    },
    {
      date: '2024 - 2028',
      title: 'B.E. in Computer Science & Engineering',
      subtitle: 'Dr. NGP Institute of Technology',
      bullets: [
        'Actively pursuing engineering degree with a strong current CGPA of 8.4.',
        'Hands-on experience developing projects using Django, React, Spring Boot, and REST APIs.'
      ]
    },
    {
      date: '2022 - 2024',
      title: 'Higher Secondary Schooling',
      subtitle: 'BAVN Higher Secondary School, Sathy, Erode',
      bullets: [
        'Completed higher secondary education with a score of 90% (HSLC).',
        'Cultivated advanced logical skills and mathematical foundations.'
      ]
    },
    {
      date: '2012 - 2022',
      title: 'Secondary Schooling',
      subtitle: 'Best Matriculation School, Kallippatti, Erode',
      bullets: [
        'Completed secondary education with a score of 91% (SSLC).',
        'Built a strong foundation in analytical subjects and basic sciences.'
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
    <section id="experience" className="section container">
      <div className="section-header reveal">
        <h2>Journey & Milestones</h2>
        <p>A timeline of my academic background, projects, and achievements</p>
      </div>

      <div className="timeline-container">
        {milestones.map((milestone, idx) => (
          <div key={idx} className="timeline-item reveal">
            <div className="timeline-marker" />
            <div className="glass-card timeline-content" onMouseMove={handleMouseMove}>
              <span className="timeline-date">{milestone.date}</span>
              <h3 className="timeline-title">{milestone.title}</h3>
              <h4 className="timeline-subtitle">{milestone.subtitle}</h4>
              <div className="timeline-desc">
                <ul>
                  {milestone.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
