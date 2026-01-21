'use client';

import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.2] md:leading-[1.3]">
            Education
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
                <FaGraduationCap className="text-4xl text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
                  Islamic University of Technology
                </h3>
                <p className="text-xl text-blue-600 dark:text-blue-400 mb-4 font-semibold">
                  B.Sc in Software Engineering (SWE)
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FaCalendarAlt className="text-purple-600" />
                    <span>Jun 2021 - Oct 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                    <FaMapMarkerAlt className="text-purple-600" />
                    <span>Gazipur, Bangladesh</span>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold text-green-600 dark:text-green-400">CGPA: 3.68 / 4.00</span>
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
