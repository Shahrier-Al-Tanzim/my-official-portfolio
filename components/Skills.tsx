'use client';

import { motion } from 'framer-motion';
import { FaReact, FaPhp, FaJava, FaPython, FaDocker, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiMysql, SiLaravel, SiSpringboot, SiJira, SiTrello } from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'PHP', icon: FaPhp, color: 'text-purple-600' },
        { name: 'ReactJS', icon: FaReact, color: 'text-cyan-500' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
        { name: 'MySQL', icon: SiMysql, color: 'text-blue-700' },
        { name: 'JavaScript', icon: FaNodeJs, color: 'text-yellow-500' },
        { name: 'Java', icon: FaJava, color: 'text-red-600' },
        { name: 'Python', icon: FaPython, color: 'text-blue-500' },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'NodeJS', icon: FaNodeJs, color: 'text-green-600' },
        { name: 'Laravel', icon: SiLaravel, color: 'text-red-600' },
        { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-600' },
        { name: 'Docker', icon: FaDocker, color: 'text-blue-600' },
      ],
    },
    {
      title: 'Management Applications',
      skills: [
        { name: 'Trello', icon: SiTrello, color: 'text-blue-600' },
        { name: 'Jira', icon: SiJira, color: 'text-blue-700' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.3]">
            Skills & Technologies
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-3 border border-gray-200 dark:border-gray-700"
                      >
                        <Icon className={`text-5xl ${skill.color}`} />
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-center">
                          {skill.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
