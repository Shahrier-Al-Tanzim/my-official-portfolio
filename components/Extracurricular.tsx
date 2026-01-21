'use client';

import { motion } from 'framer-motion';
import { FaCode, FaChalkboardTeacher } from 'react-icons/fa';
import { SiCodeforces, SiCodechef, SiLeetcode } from 'react-icons/si';

export default function Extracurricular() {
  const platforms = [
    {
      name: 'Codeforces',
      username: 'Ryuzaki_L_07',
      stats: 'Max Rating 1425',
      link: 'https://codeforces.com/profile/Ryuzaki_L_07',
      icon: SiCodeforces,
      color: 'text-blue-600',
    },
    {
      name: 'CodeChef',
      username: 'ryuzaki_l_07',
      stats: '3⭐ | Max Rating 1646',
      link: 'https://www.codechef.com/users/ryuzaki_l_07',
      icon: SiCodechef,
      color: 'text-orange-600',
    },
    {
      name: 'LeetCode',
      username: 'Ryuzaki_L_07',
      stats: 'Active Problem Solver',
      link: 'https://leetcode.com/Ryuzaki_L_07',
      icon: SiLeetcode,
      color: 'text-yellow-600',
    },
  ];

  return (
    <section id="extracurricular" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.3]">
            Extracurricular Activities
          </h2>

          <div className="space-y-12">
            {/* Competitive Programming */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6 mb-8">
                <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                  <FaCode className="text-4xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Competitive Programming
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    1300+ Problems Solved | 230+ Contest Participations
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {platforms.map((platform, index) => {
                  const Icon = platform.icon;
                  return (
                    <motion.a
                      key={platform.name}
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                    >
                      <Icon className={`text-5xl ${platform.color} mb-3`} />
                      <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                        {platform.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        {platform.username}
                      </p>
                      <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                        {platform.stats}
                      </p>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Mentorship */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl">
                  <FaChalkboardTeacher className="text-4xl text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    IUT Computer Society
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    Mentored competitive programming classes of 60+ people
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
