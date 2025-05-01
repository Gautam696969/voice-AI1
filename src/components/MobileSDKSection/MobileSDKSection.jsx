import React from "react";
import "./MobileSDKSection.css";

const MobileSDKSection = () => {
  return (
    <section className="mobile-sdk">
      <div className="mobile-text">
        <h2 className="mobile-title">📱 Voice AI on Mobile</h2>
        <p className="mobile-subtext">
          Embed Voice AI in your mobile apps in <strong>&lt;10 lines of code</strong>.
        </p>
        <pre className="code-snippet">
{`const agent = createVoiceAgent({
  platform: 'ios',
  mic: true,
  intents: ['book', 'cancel'],
});`}
        </pre>
        <div className="platform-tags">
          <span>iOS</span>
          <span>Android</span>
          <span>React Native</span>
          <span>Flutter</span>
        </div>
      </div>
    </section>
  );
};

export default MobileSDKSection;
