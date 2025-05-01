import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    quote: "We replaced 3 full-time agents with a voice AI bot in 2 weeks.",
    name: "Alex Kim",
    title: "CTO at NovaHealth",
  },
  {
    quote: "The SDK was plug-and-play. We deployed in less than a day.",
    name: "Maya Singh",
    title: "Lead Engineer at FinVoice",
  },
  {
    quote: "This saved us hours on support tickets — and our users love it.",
    name: "Dan Romero",
    title: "Indie Hacker, VoiceGuru",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">💬 Trusted by Dev Teams</h2>
      <div className="testimonial-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <p className="quote">“{t.quote}”</p>
            <p className="author">— {t.name}</p>
            <p className="title">{t.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
