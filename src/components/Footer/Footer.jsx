import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text mb-4">
            VoiceAI
          </h3>
          <p className="text-gray-400 mb-4">
            Empowering developers with advanced voice AI solutions for the next generation of applications.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Documentation</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-semibold text-white mb-4">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-cyan-400 transition-colors">GitHub</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} VoiceAI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
