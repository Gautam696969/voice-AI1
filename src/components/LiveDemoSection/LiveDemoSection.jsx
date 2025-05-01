import React, { useState } from "react";
import "./LiveDemoSection.css";

const LiveDemoSection = () => {
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  const handleMicClick = () => {
    // Placeholder for real speech-to-text
    setTranscript("Hi, I’d like to schedule an appointment.");
    setResponse("Sure! What day and time works best for you?");
  };

  return (
    <section className="live-demo">
      <h2 className="demo-title">🎧 Try Our Live Voice Agent</h2>
      <p className="demo-subtext">Talk to an AI — see transcription + response live.</p>

      <div className="demo-box">
        <div className="mic-area">
          <button className="mic-button" onClick={handleMicClick}>
            🎙️
          </button>
          <p className="mic-label">Click to Speak</p>
        </div>

        <div className="transcript-area">
          <div className="bubble user">🗣️ {transcript || "Your voice will appear here..."}</div>
          {response && <div className="bubble bot">🤖 {response}</div>}
        </div>

        <button className="cta-button">Test a Sample Agent</button>
      </div>
    </section>
  );
};

export default LiveDemoSection;
