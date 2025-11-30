import React from 'react';

function Contact() {
  return (
   <section id="contact" className="contact">
  <h2>Contact Us</h2>
  <p>Contact us and build the next big thing.</p>

  <div className="contact-details">
    <p><strong>📍 Location:</strong> #H.NO 35, 7th cross,RKM Layout(phase), Margondanahalli, Bengaluru - 560036, India</p>
    <p><strong>📧 Email:</strong> contact@inventralabs.com</p>
    <p><strong>📞 Phone:</strong> +91 9686602311</p>

    <div className="social-links">
      <p><strong>🔗 Connect with us:</strong></p>
      <ul>
        <li><a href="https://www.instagram.com/inventralabs" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.linkedin.com/company/109334935/admin/dashboard/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  </div>
</section>

  );
}

export default Contact;

