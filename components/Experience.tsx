'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.3]">
            Experience
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-8 md:p-12 hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                <FaBriefcase className="text-4xl text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  RedDot Digital Limited
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-2 font-semibold">
                  Software Engineer Intern
                </p>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-6">
                  <FaCalendarAlt className="text-purple-600" />
                  <span>June - October 2024</span>
                </div>

                {/* HRIS Application */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    HRIS Application
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Improved UI/UX by revamping icons, tooltips, and flash messages</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Proactively resolved persistent frontend issues</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Developed and deployed input logging modules with dynamic log table, enhancing traceability and system auditing</span>
                    </li>
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">
                      Laravel
                    </span>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">
                      PHP
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                      MySQL
                    </span>
                  </div>
                </div>

                {/* S&D Mobile App */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    S&D Mobile App
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Conducted comprehensive black-box testing across web and mobile platforms to ensure feature reliability</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-600 font-bold">•</span>
                      <span>Identified, reported, and verified critical bugs in close collaboration with the development team, accelerating issue resolution</span>
                    </li>
                  </ul>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 rounded-full text-sm">
                      Locust (Python)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
