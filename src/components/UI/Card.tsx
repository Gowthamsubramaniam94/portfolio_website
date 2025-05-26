import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = false,
  onClick
}) => {
  const baseClasses = 'bg-white dark:bg-secondary-800 rounded-lg shadow-md overflow-hidden';
  const hoverClasses = hoverEffect ? 'transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg' : '';
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;
  
  const cardProps = {
    className: combinedClasses,
    ...(onClick && { onClick, role: 'button', tabIndex: 0 })
  };
  
  return (
    <motion.div
      {...cardProps}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;