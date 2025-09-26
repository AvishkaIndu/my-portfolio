'use client'

import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative bg-cyber-dark/50 backdrop-blur-md border-t border-cyber-green/20"
    >
      {/* Neon line effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyber-green to-transparent shadow-neon" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-gray-400 mb-2"
          >
            Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block text-cyber-green"
            >
              <Heart size={16} className="inline mx-1" />
            </motion.span>
            using Next.js, TypeScript, and Tailwind CSS
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center space-x-4 text-xs text-cyber-green font-mono"
          >
            <span className="glow-text">
              © {currentYear} Avishka Induwara | Full-Stack Developer
            </span>
          </motion.div>
          
          {/* Decorative elements */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-cyber-green/50 to-transparent mx-auto mt-4"
          />
        </div>
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-green/5 to-transparent pointer-events-none" />
    </motion.footer>
  )
}