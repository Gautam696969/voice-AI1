import React from "react";
import "./PerformanceSection.css";

const metrics = [
  { stat: "< 300ms", label: "Response Latency" },
  { stat: "1M+", label: "Voice Sessions/Month" },
  { stat: "< 24h", label: "Custom Model Training" },
];

const PerformanceSection = () => {
  return (
    <section className="performance">
      <h2 className="performance-title">📈 Performance That Scales</h2>
      <div className="performance-grid">
        {metrics.map((item, i) => (
          <div key={i} className="metric-card">
            <h3 className="metric-stat">{item.stat}</h3>
            <p className="metric-label">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PerformanceSection;
