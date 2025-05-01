import React from "react";
import "./QuickstartSection.css";

const QuickstartSection = () => {
  return (
    <section className="quickstart">
      <h2 className="quickstart-title">🧑‍💻 Quickstart</h2>
      <p className="quickstart-subtext">
        Get started with just a few lines of code.
      </p>

      <div className="quickstart-container">
        <div className="code-block">
          <pre>
            <code>
{`const agent = createVoiceAgent({
  language: 'en',
  intents: ['schedule', 'cancel'],
  fallback: () => 'Sorry, can you repeat that?',
});`}
            </code>
          </pre>
        </div>

        <div className="quickstart-buttons">
          <button className="btn primary">View Full Docs</button>
          <button className="btn">Run in Sandbox</button>
        </div>
      </div>
    </section>
  );
};

export default QuickstartSection;
