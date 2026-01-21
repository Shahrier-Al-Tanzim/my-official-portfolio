'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 dark:bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>

          {/* Contact Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <motion.a
              href="https://github.com/Shahrier-Al-Tanzim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300"
            >
              <FaGithub className="text-2xl" />
              <span>GitHub</span>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/shahrier-tanzim"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300"
            >
              <FaLinkedin className="text-2xl" />
              <span>LinkedIn</span>
            </motion.a>

            <motion.a
              href="mailto:shahrier@iut-dhaka.edu"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300"
            >
              <FaEnvelope className="text-2xl" />
              <span>shahrier@iut-dhaka.edu</span>
            </motion.a>

            <motion.a
              href="tel:01760131119"
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300"
            >
              <FaPhone className="text-2xl" />
              <span>01760131119</span>
            </motion.a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Copyright */}
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {currentYear} Shahrier Al Tanzim. Made with
            <FaHeart className="text-red-500 animate-pulse" />
            using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
