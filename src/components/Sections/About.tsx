import React from 'react';
import { motion } from 'framer-motion';
import { Award, Book, Briefcase, CalendarClock } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import Card from '../UI/Card';
import { profile } from '../../data/profile';

const About: React.FC = () => {
  const stats = [
    { icon: <CalendarClock size={24} />, value: '10+', label: 'Years Experience' },
    { icon: <Briefcase size={24} />, value: '50+', label: 'Projects Completed' },
    { icon: <Award size={24} />, value: '12', label: 'Awards & Honors' },
    { icon: <Book size={24} />, value: '5', label: 'Publications' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="About Me"
          subtitle="Get to know my background, expertise, and what drives me professionally."
          centered
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-secondary-900 dark:text-white mb-6">
              Professional Story
            </h3>
            <div className="space-y-4 text-secondary-700 dark:text-secondary-300">
              <p>
                {profile.bio}
              </p>
              <p>
                My journey in software engineering began at UC Berkeley, where I earned my Bachelor's degree in Computer Engineering. I later pursued my Master's in Computer Science at Stanford, specializing in AI and Machine Learning.
              </p>
              <p>
                Throughout my career, I've had the privilege of working with innovative companies where I've led teams in developing scalable solutions, implementing modern technologies, and mentoring junior developers. I'm particularly passionate about creating elegant, user-focused software that solves real business problems.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source projects, speaking at tech conferences, or exploring the latest developments in software architecture and AI.
              </p>
            </div>
          </motion.div>
          
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-secondary-900 dark:text-white mb-6">
              Educational Background
            </h3>
            <div className="space-y-6">
              {profile.education.map((edu, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-secondary-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    <span className="text-sm text-secondary-600 dark:text-secondary-400">
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    {edu.institution}, {edu.location}
                  </p>
                  {edu.description && (
                    <p className="text-secondary-700 dark:text-secondary-300 text-sm">
                      {edu.description}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center text-primary-600 dark:text-primary-400 mb-4">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
                {stat.value}
              </h4>
              <p className="text-secondary-600 dark:text-secondary-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;