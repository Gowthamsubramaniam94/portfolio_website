import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import Card from '../UI/Card';
import { profile } from '../../data/profile';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-secondary-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Professional Achievements"
          subtitle="Recognition, contributions, and notable accomplishments throughout my career."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {profile.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full p-6 flex">
                <div className="text-primary-500 dark:text-primary-400 mr-4 mt-1">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                    {achievement.date}
                  </p>
                  <p className="text-secondary-700 dark:text-secondary-300 mb-3">
                    {achievement.description}
                  </p>
                  {achievement.url && (
                    <a 
                      href={achievement.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline text-sm"
                    >
                      Learn more <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading font-bold text-secondary-900 dark:text-white text-center mb-8">
            What Colleagues Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Alex is an exceptional engineer who consistently delivers high-quality code and innovative solutions. His leadership transformed our development process.",
                author: "Sarah Chen",
                position: "CTO, TechForward"
              },
              {
                quote: "Working with Alex was a game-changer for our team. His technical expertise and mentorship elevated everyone's performance.",
                author: "Michael Rodriguez",
                position: "Senior Developer, InnovateX"
              },
              {
                quote: "Alex's ability to tackle complex problems with elegant solutions is remarkable. His contributions to our projects were invaluable.",
                author: "Jennifer Park",
                position: "Product Manager, WebSolutions Inc."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-secondary-800 rounded-lg shadow-md p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-primary-500 dark:text-primary-400 mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11L8 13H5V10L7 8C7.8 7.2 7.3 5 5.5 5C4.7 5 4 5.7 4 6.5V10C4 12.2 5.8 14 8 14H9C10.1 14 11 13.1 11 12V9C11 7.9 10.1 7 9 7H8.2C8.1 7.7 10 9.8 10 11Z" fill="currentColor"/>
                    <path d="M19 11L17 13H14V10L16 8C16.8 7.2 16.3 5 14.5 5C13.7 5 13 5.7 13 6.5V10C13 12.2 14.8 14 17 14H18C19.1 14 20 13.1 20 12V9C20 7.9 19.1 7 18 7H17.2C17.1 7.7 19 9.8 19 11Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-secondary-700 dark:text-secondary-300 italic mb-4">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold text-secondary-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-secondary-600 dark:text-secondary-400">
                    {testimonial.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;