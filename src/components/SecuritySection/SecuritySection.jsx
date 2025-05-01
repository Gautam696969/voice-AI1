import React from "react";
import "./SecuritySection.css";

const features = [
  "99.99% uptime",
  "End-to-end encryption",
  "ISO / GDPR / SOC-2 ready",
];

const SecuritySection = () => {
  return (
    <section className="security-section">
      <div className="security-content">
        <h2 className="security-title">🛡️ Secure, Scalable, Reliable</h2>
        <ul className="security-list">
          {features.map((feature, idx) => (
            <li key={idx}>
              <span className="check-icon">✅</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SecuritySection;


