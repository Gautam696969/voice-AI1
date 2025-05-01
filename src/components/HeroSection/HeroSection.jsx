import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Create Powerful Voice Agents with AI — Fast.</h1>
          <p>
            A voice AI platform built for developers. Deploy intelligent,
            human-like voice agents in minutes.
          </p>
          <div className="hero-buttons">
            <button className="btn primary">Start Building</button>
            <button className="btn">Try a Live Call Demo</button>
            <button className="btn">See API Docs</button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-snippet">
            <pre>{`// Call the AI Voice Agent
const response = await fetch('/api/voice', {
  method: 'POST',
  body: JSON.stringify({ input: "Hello, world" })
});`}</pre>
          </div>

          <div className="waveform">
            {[...Array(20)].map((_, i) => (
              <span key={i} style={{ height: `${10 + Math.random() * 40}px` }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
