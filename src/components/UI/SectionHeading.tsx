import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  centered = false,
  className = ''
}) => {
  const alignment = centered ? 'text-center' : 'text-left';
  const containerClasses = `mb-12 ${alignment} ${className}`;
  
  return (
    <motion.div 
      className={containerClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary-500 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionHeading;