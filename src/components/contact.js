import React, { useEffect, useState } from "react";
import axios from "axios";

const HoverTile = ({ children }) => {
  const [hover, setHover] = useState(false);

  return (

    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        flex: "1 1 300px",
        padding: "20px",
        borderRadius: "12px",
        background: hover ? "#e3f2fd" : "#f9f9f9", // background changes on hover
        boxShadow: hover
          ? "0 8px 20px rgba(0,0,0,0.3)"
          : "0 4px 10px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-5px)" : "translateY(0)",
        cursor: "pointer"
      }}
    >
      {children}
    </div>
  );
};

const Contact = () => {
  const lat = 13.034252607978864;
  const lng = 77.6957914526738;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const mapEmbedUrl = `https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed`;

  return (
    <div style={{ padding: "1px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ color: "#1976d2", textAlign: "center", marginBottom: "40px" }}>📞 Contact Us</h2>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "space-between"
        }}
      >
        {/* Contact Info */}
        <HoverTile>
          <h3 style={{ color: "#1976d2", marginBottom: "15px" }}>Contact Info</h3>
          <p><b>📍 Address:</b><br />
            #35, 7th Cross,<br />
            RKM Layout Phase 3 Road,<br />
            Margondanahalli, Bengaluru,<br />
            Karnataka - 560036
          </p>

          <p><b>📞 Phone:</b> +91 9686602311</p>
          <p><b>📧 Email:</b> info@inventralabs.com</p>
        </HoverTile>

        {/* Social Media */}
        <HoverTile>
          <h3 style={{ color: "#1976d2", marginBottom: "15px" }}> Social Media</h3>
          <p><strong>🔗 Connect with us:</strong></p>
          <ul>
            <li><a href="https://www.instagram.com/inventralabs" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com/company/109334935/admin/dashboard/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>

        </HoverTile>

        {/* Map */}
        <HoverTile>
          <h3 style={{ color: "#1976d2", marginBottom: "15px" }}>Location</h3>
          <a href={mapsLink} target="_blank" rel="noopener noreferrer">
            <iframe
              title="RKM Layout Phase 3 Location"
              src={mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: "0", borderRadius: "10px" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </a>
          <p style={{ fontSize: "14px", marginTop: "8px", color: "#444" }}>📍 Click map to open in Google Maps</p>
        </HoverTile>

      </div>
    </div>
  );
};
export default Contact;