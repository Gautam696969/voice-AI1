import React from "react";
import "./DevSupportSection.css";

const resources = [
  { title: "📚 Quickstart Guides", desc: "Get started in minutes with step-by-step docs." },
  { title: "💻 Sample GitHub Repos", desc: "Cloneable templates for real-world use cases." },
  { title: "📦 NPM Packages", desc: "Install voice SDKs with a single command." },
  { title: "📬 Postman Collections", desc: "Test APIs without writing a line of code." },
];

const DevSupportSection = () => {
  return (
    <section className="dev-support">
      <h2 className="dev-title">🗂️ Docs, SDKs & Dev Support</h2>
      <p className="dev-subtext">Everything you need to build fast — and ship faster.</p>

      <div className="dev-grid">
        {resources.map((res, index) => (
          <div className="dev-card" key={index}>
            <h3>{res.title}</h3>
            <p>{res.desc}</p>
          </div>
        ))}
      </div>

      <button className="dev-btn">Explore Developer Hub</button>
    </section>
  );
};

export default DevSupportSection;
