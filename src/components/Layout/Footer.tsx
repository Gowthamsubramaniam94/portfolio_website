import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialIcons = [
    { 
      icon: <Github size={20} />, 
      url: profile.socialLinks.github,
      label: 'GitHub'
    },
    { 
      icon: <Linkedin size={20} />, 
      url: profile.socialLinks.linkedin,
      label: 'LinkedIn'
    }
  ];
  
  if (profile.socialLinks.twitter) {
    socialIcons.push({ 
      icon: <Twitter size={20} />, 
      url: profile.socialLinks.twitter,
      label: 'Twitter'
    });
  }

  return (
    <footer className="bg-secondary-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Alex Johnson</h3>
            <p className="text-secondary-300 mb-4">
              {profile.tagline}
            </p>
            <p className="text-secondary-400">
              {profile.location}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-secondary-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-secondary-300 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#experience" className="text-secondary-300 hover:text-primary-400 transition-colors">Experience</a></li>
              <li><a href="#projects" className="text-secondary-300 hover:text-primary-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-secondary-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4">Connect</h3>
            <p className="text-secondary-300 mb-4">
              {profile.email}
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-300 hover:text-primary-400 transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
          <p>© {currentYear} Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;