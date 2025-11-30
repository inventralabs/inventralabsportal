import React from 'react';

function Services() {
  const services = [
    { icon: '💻', title: 'Product Development', desc: 'Custom software tailored to your business needs.' },
    { icon: '🤝', title: 'IT Consulting', desc: 'Expert guidance to optimize your tech strategy.' },
    { icon: '⚙️', title: 'Cloud & DevOps', desc: 'Scalable cloud infrastructure and CI/CD pipelines.' },
    { icon: '🧠', title: 'AI & Data Engineering', desc: 'Harness data to drive intelligent decisions.' },
  ];

  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <span className="icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href="/contact">Contact</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
