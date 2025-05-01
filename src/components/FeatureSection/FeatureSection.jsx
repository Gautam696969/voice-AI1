import React from "react";
import "./FeatureSection.css";

const features = [
  {
    icon: "🗣️",
    title: "Natural Voice Conversations",
    description: "Powered by cutting-edge LLMs.",
  },
  {
    icon: "⚙️",
    title: "Flexible APIs & SDKs",
    description: "Easy RESTful APIs + language SDKs.",
  },
  {
    icon: "🧵",
    title: "Real-Time Transcription",
    description: "Streaming STT + TTS with low latency.",
  },
  {
    icon: "🤖",
    title: "Custom Voice Flows with AI",
    description: "Define intents, fallback logic, and actions.",
  },
  {
    icon: "📞",
    title: "Built-in Telephony & SIP Integration",
    description: "Twilio, Vonage, etc.",
  },
  {
    icon: "💬",
    title: "Multilingual Support",
    description: "Speak your user's language.",
  },
];

const FeatureSection = () => {
  return (
    <section className="features">
      <h2 className="features-title">🧰 Key Developer-First Features</h2>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
