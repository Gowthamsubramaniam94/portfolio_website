import React from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';
import { profile } from '../../data/profile';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-secondary-900 overflow-hidden">
        <div className="absolute -right-64 -top-64 w-128 h-128 rounded-full bg-primary-100 dark:bg-primary-900/10 blur-3xl"></div>
        <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-secondary-100 dark:bg-secondary-800/50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300 rounded-full mb-4">
                {profile.title}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 dark:text-white mb-6">
                Hello, I'm <span className="text-primary-600 dark:text-primary-400">{profile.name}</span>
              </h1>
              <p className="text-xl text-secondary-700 dark:text-secondary-300 mb-8 max-w-lg">
                {profile.tagline}
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button href="#contact" size="lg">
                  Get in Touch
                </Button>
                <Button href={profile.resumeUrl} variant="outline" size="lg">
                  Download Resume
                </Button>
              </div>
              
              <div className="flex items-center mt-8 space-x-4">
                <span className="text-secondary-600 dark:text-secondary-400">Connect with me:</span>
                <motion.a
                  href={profile.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-700 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub Profile"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  href={profile.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-700 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn Profile"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} />
                </motion.a>
                {profile.socialLinks.twitter && (
                  <motion.a
                    href={profile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-700 hover:text-primary-600 dark:text-secondary-400 dark:hover:text-primary-400 transition-colors"
                    aria-label="Twitter Profile"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Twitter size={20} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-secondary-800 shadow-xl">
                <img 
                  src={profile.profileImage} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-secondary-800 px-4 py-2 rounded-lg shadow-md">
                <span className="text-primary-600 dark:text-primary-400 font-medium">10+ Years Experience</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a 
            href="#about" 
            className="text-secondary-600 dark:text-secondary-400 flex flex-col items-center"
            aria-label="Scroll to About section"
          >
            <span className="mb-2">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowDown size={20} />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;