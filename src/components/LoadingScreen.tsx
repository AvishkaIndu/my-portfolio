'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-cyber-dark z-50 flex items-center justify-center"
    >
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="matrix-bg w-full h-full" />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl font-mono text-cyber-green glow-text-medium"
        >
          &lt;Hi/&gt;
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="space-y-2"
        >
          <h1 className="text-2xl font-bold text-white">
            Initializing Portfolio<span className="loading-dots" />
          </h1>
          <p className="text-cyber-green font-mono text-sm">
            Loading cyberpunk experience...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="w-64 mx-auto"
        >
          <div className="h-1 bg-cyber-gray rounded-full overflow-hidden">
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.2, duration: 1.2, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-cyber-green to-cyber-blue shadow-neon"
            />
          </div>
        </motion.div>

        {/* Terminal-style Loading Messages */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="font-mono text-xs text-gray-400 space-y-1 min-h-[60px]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            &gt; Loading components...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            &gt; Initializing animations...
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            &gt; Ready to launch! 🚀
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}