import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from '../UI/SectionHeading';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { projects } from '../../data/projects';

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'other';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  
  const categories: { value: ProjectCategory; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'mobile', label: 'Mobile' },
    { value: 'other', label: 'Other' }
  ];
  
  const filteredProjects = projects.filter(project => 
    activeCategory === 'all' || project.category === activeCategory
  );
  
  const toggleProject = (id: string) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Project Portfolio"
          subtitle="Explore my featured projects showcasing problem-solving skills and technical expertise."
          centered
        />
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.value
                  ? 'bg-primary-500 text-white'
                  : 'bg-secondary-100 text-secondary-800 hover:bg-secondary-200 dark:bg-secondary-800 dark:text-secondary-300 dark:hover:bg-secondary-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card hoverEffect className="h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                    
                    {/* Category badge */}
                    <div className="absolute top-2 right-2 bg-primary-500 text-white text-xs px-2 py-1 rounded">
                      {categories.find(c => c.value === project.category)?.label}
                    </div>
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-secondary-700 dark:text-secondary-300 mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-secondary-100 dark:bg-secondary-700 text-secondary-800 dark:text-secondary-300 text-xs rounded">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                    
                    {/* Expanded content */}
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-4"
                      >
                        <div className="space-y-3 text-sm">
                          <div>
                            <h4 className="font-semibold text-secondary-900 dark:text-white">Problem:</h4>
                            <p className="text-secondary-700 dark:text-secondary-300">{project.problem}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-secondary-900 dark:text-white">Solution:</h4>
                            <p className="text-secondary-700 dark:text-secondary-300">{project.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-secondary-900 dark:text-white">My Role:</h4>
                            <p className="text-secondary-700 dark:text-secondary-300">{project.role}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-secondary-900 dark:text-white">Outcomes:</h4>
                            <ul className="list-disc list-inside text-secondary-700 dark:text-secondary-300">
                              {project.outcomes.map((outcome, i) => (
                                <li key={i}>{outcome}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    <div className="mt-auto pt-4 flex flex-wrap gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => toggleProject(project.id)}
                        className="flex-1"
                      >
                        {expandedProject === project.id ? 'Show Less' : 'Learn More'}
                      </Button>
                      
                      <div className="flex gap-2">
                        {project.demoUrl && (
                          <Button 
                            href={project.demoUrl} 
                            variant="primary" 
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <ExternalLink size={16} /> Demo
                          </Button>
                        )}
                        
                        {project.githubUrl && (
                          <Button 
                            href={project.githubUrl} 
                            variant="secondary" 
                            size="sm"
                            className="flex items-center gap-1"
                          >
                            <Github size={16} /> Code
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;