import React from 'react';
import { motion } from 'framer-motion';
import { CalendarClock, MapPin } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import { profile } from '../../data/profile';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Professional Experience"
          subtitle="A timeline of my career journey, highlighting key roles and accomplishments."
          centered
        />
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-secondary-200 dark:bg-secondary-700"></div>
          
          {profile.experience.map((exp, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className="mb-12 md:mb-0"
              >
                <motion.div 
                  className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Date indicator */}
                  <div className="md:w-1/2 text-center md:px-8 mb-4 md:mb-0">
                    <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-md font-medium">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary-500 border-4 border-white dark:border-secondary-800 z-10"></div>
                  
                  {/* Experience card */}
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-6">
                      <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                        {exp.position}
                      </h3>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 mb-4">
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center text-sm text-secondary-600 dark:text-secondary-400">
                          <MapPin size={14} className="mr-1" /> {exp.location}
                        </span>
                      </div>
                      <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                        {exp.description}
                      </p>
                      
                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-secondary-900 dark:text-white mb-2">
                          Key Achievements:
                        </h4>
                        <ul className="list-disc list-inside space-y-1 text-secondary-700 dark:text-secondary-300 text-sm">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span 
                            key={i}
                            className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-300 text-xs rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;