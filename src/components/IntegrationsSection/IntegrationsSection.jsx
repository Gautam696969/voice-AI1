import React from "react";
import { motion } from "framer-motion";

const integrations = [
  { name: "Twilio", src: "src/public/logos/Twilio-Logo.wine.png" },
  { name: "Zapier", src: "src/public/logos/Zapier.png" },
  { name: "Dialogflow", src: "src/public/logos/Dialog.png" },
  { name: "OpenAI", src: "src/public/logos/openai-icon.png" },
  { name: "AWS", src: "src/public/logos/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png" },
  { name: "Stripe", src: "src/public/logos/Stripe-Logo.png" },
  { name: "GitHub", src: "src/public/logos/GitHub-Logo.png" },
  { name: "Postman", src: "src/public/logos/postman.png" },
  { name: "Webhooks", src: "src/public/logos/webhook.png" },
];

const IntegrationsSection = () => {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-[#030304] to-[#212324]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
          🔌 Integrations & Dev Tools
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Plug into your stack seamlessly.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {integrations.map( ( tool, index ) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: index * 0.1 }
              }}
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.2 }
              }}
              className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 
                         flex items-center justify-center shadow-lg 
                         border border-gray-700/50 hover:border-gray-500/50 
                         transition-all duration-300"
            >
              <img
                src={tool.src}
                alt={tool.name}
                className="max-w-[120px] h-auto object-contain 
                         transition-transform duration-200 filter 
                         hover:brightness-110"
              />
            </motion.div>
          ) )}
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
