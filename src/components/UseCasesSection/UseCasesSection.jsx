import React from "react";
import "./UseCasesSection.css";

const useCases = [
  {
    icon: "🏥",
    title: "Healthcare",
    description: "Appointment scheduling, patient check-ins.",
  },
  {
    icon: "🏦",
    title: "Fintech",
    description: "Voice KYC, fraud alerts.",
  },
  {
    icon: "🛍️",
    title: "E-Commerce",
    description: "Smart product assistant, voice returns.",
  },
  {
    icon: "🛠️",
    title: "Custom Support Bots",
    description: "Answer FAQs, route escalations.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="usecases">
      <h2 className="usecases-title">🧪 Use Cases for Voice AI</h2>
      <div className="usecases-grid">
        {useCases.map((item, index) => (
          <div className="usecase-card" key={index}>
            <div className="usecase-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCasesSection;
