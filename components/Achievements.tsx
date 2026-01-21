'use client';

import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

export default function Achievements() {
  const achievements = [
    {
      title: 'IUT Coderush Programming Contest',
      position: '1st Runners UP',
      details: 'Out of 80+ teams',
      year: '2023',
      icon: FaTrophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Intra IUT Programming Contest',
      position: '2nd Runners UP',
      details: 'Out of 50+ teams',
      year: '2021',
      icon: FaMedal,
      color: 'from-gray-400 to-gray-600',
    },
    {
      title: 'IUT Coderush 3.0 Programming Contest',
      position: '5th Place',
      details: 'Out of 60+ teams',
      year: '2025',
      icon: FaAward,
      color: 'from-orange-500 to-red-500',
    },
    {
      title: 'Inter High School Programming Contest',
      position: 'Divisional Champion',
      details: 'Divisional Round',
      year: '2019',
      icon: FaTrophy,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Inter High School Programming Contest',
      position: 'Divisional Champion',
      details: 'Divisional Round',
      year: '2018',
      icon: FaTrophy,
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Programming Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={`${achievement.title}-${achievement.year}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-4 bg-gradient-to-br ${achievement.color} rounded-xl`}>
                      <Icon className="text-3xl text-white" />
                    </div>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-lg font-semibold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2">
                    {achievement.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {achievement.details}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
