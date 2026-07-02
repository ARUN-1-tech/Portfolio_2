import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error on change
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const { name, email, subject, message } = formData;
      const mailtoSubject = encodeURIComponent(subject);
      
      const bodyTemplate = `Hi Arun,

${message}

Best regards,
${name}
Email: ${email}`;

      const mailtoBody = encodeURIComponent(bodyTemplate);
      
      // Trigger user's native mail client
      window.location.href = `mailto:moorthyarun2007@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }
  };

  return (
    <section id="contact" className="section container">
      <div className="section-header reveal">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for career opportunities, collaboration, or queries</p>
      </div>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info reveal reveal-left">
          <div className="glass-card contact-info-card">
            <div className="contact-info-icon">
              <Mail size={22} />
            </div>
            <div className="contact-info-text">
              <h4>Email</h4>
              <p><a href="mailto:moorthyarun2007@gmail.com">moorthyarun2007@gmail.com</a></p>
            </div>
          </div>

          <div className="glass-card contact-info-card">
            <div className="contact-info-icon">
              <Phone size={22} />
            </div>
            <div className="contact-info-text">
              <h4>Phone</h4>
              <p><a href="tel:+918778487067">+91 8778487067</a></p>
            </div>
          </div>

          <div className="glass-card contact-info-card">
            <div className="contact-info-icon">
              <MapPin size={22} />
            </div>
            <div className="contact-info-text">
              <h4>Location</h4>
              <p>Gobichettipalayam, Erode, TamilNadu</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card contact-form-container reveal reveal-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-input" 
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-input" 
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="form-input" 
                value={formData.subject}
                onChange={handleChange}
                placeholder="Collaboration Proposal"
              />
              {errors.subject && <span className="form-error">{errors.subject}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                id="message" 
                name="message" 
                className="form-textarea" 
                value={formData.message}
                onChange={handleChange}
                placeholder="Hi Arun, I would love to connect and discuss..."
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
