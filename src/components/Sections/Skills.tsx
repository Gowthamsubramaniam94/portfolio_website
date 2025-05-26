import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../UI/SectionHeading';
import { profile } from '../../data/profile';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Technical Expertise"
          subtitle="A comprehensive overview of my technical skills and proficiency levels."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {profile.skills.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
                {category.category}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-secondary-800 dark:text-secondary-200 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-xs text-secondary-600 dark:text-secondary-400">
                        {getProficiencyLabel(skill.proficiency)}
                      </span>
                    </div>
                    <div className="w-full bg-secondary-200 dark:bg-secondary-700 rounded-full h-2.5">
                      <motion.div
                        className="bg-primary-600 h-2.5 rounded-full"
                        style={{ width: `${skill.proficiency * 20}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency * 20}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 * skillIndex }}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Skills Section */}
        <motion.div
          className="mt-12 bg-white dark:bg-secondary-800 rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-6">
            Additional Skills
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Agile Methodology", "System Architecture", "CI/CD", "Team Leadership",
              "Project Management", "Database Design", "UX/UI Principles", "RESTful APIs",
              "Technical Writing", "Performance Optimization", "Test-Driven Development", "Microservices"
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="bg-secondary-100 dark:bg-secondary-700 px-4 py-3 rounded-md text-secondary-800 dark:text-secondary-200 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const getProficiencyLabel = (level: number): string => {
  switch(level) {
    case 1: return 'Beginner';
    case 2: return 'Elementary';
    case 3: return 'Intermediate';
    case 4: return 'Advanced';
    case 5: return 'Expert';
    default: return 'N/A';
  }
};

export default Skills;