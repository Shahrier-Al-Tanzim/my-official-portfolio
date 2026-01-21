'use client';

import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
  const projects = [
    {
      title: 'IUT SIKS',
      year: '2025',
      description: 'A functional website providing an online platform for the IUT SIKS society to publish updates, blogs, and event announcements. Supports user interactions such as blog posting, commenting, liking, participating in quizzes, and browsing upcoming events.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Vercel CI/CD'],
      link: 'https://iutsiks.iutoic-dhaka.edu',
    },
    {
      title: 'Patient Management System',
      year: '2025',
      description: 'Spring Boot application for patient management with basic CRUD operations. Uses gRPC and REST requests along with API gateway and dockerized modules.',
      technologies: ['Spring Boot', 'Java', 'Docker', 'Kafka', 'PostgreSQL', 'REST API', 'JWT'],
    },
    {
      title: 'IUT TRMS',
      year: '2023',
      description: 'A traffic management system that detects vehicle license plates using EasyOCR and pretrained YOLOv5 object detection model with high accuracy on a custom traffic dataset of Bengali characters. Records entry and exit times in a PostgreSQL database to facilitate automated traffic monitoring and reporting.',
      technologies: ['Node.js', 'Express.js', 'JavaScript', 'PostgreSQL', 'Jupyter Notebook', 'YOLOv5'],
    },
    {
      title: 'Movie Recommendation System',
      year: '2023',
      description: 'Utilizes a k-Nearest Neighbors (k-NN) collaborative filtering model to recommend movies based on user input. It matches the mentioned movie title and suggests similar titles from a dataset of 10,000+ entries based on user rating patterns.',
      technologies: ['Python', 'pandas', 'scikit-learn', 'Jupyter Notebook'],
    },
    {
      title: 'Laravel CRUD Website',
      year: '2023',
      description: 'The official website of a university club. Does user creation, authentication, event create, read, update and delete with all the basic functionalities needed.',
      technologies: ['Laravel', 'PHP', 'Blade'],
    },

  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.3] leading-[1.2] md:leading-[1.3]">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">
                    {project.year}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    <FaExternalLinkAlt />
                    Visit Website
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
