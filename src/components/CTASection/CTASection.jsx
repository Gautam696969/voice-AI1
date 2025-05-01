import React from "react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2 className="cta-title">📥 Get your API key in 2 mins.</h2>
      <p className="cta-subtext">Build your first voice agent today. No credit card required.</p>

      <form className="cta-form">
        <input type="email" placeholder="Enter your email" required />
        <div className="cta-buttons">
          <button type="submit" className="primary-btn">Start Building</button>
          <button type="button" className="secondary-btn">Talk to Tech Team</button>
        </div>
      </form>
    </section>
  );
};

export default CTASection;
