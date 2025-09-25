'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.6
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Greeting */}
            <motion.h2 
              className="text-lg sm:text-xl font-mono text-cyber-green glow-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              &gt; Hello World! I&apos;m
            </motion.h2>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white"
              >
                <span className="glitch-effect glow-text" data-text="[Your Name]">
                  [Your Name]
                </span>
              </motion.h1>

              {/* Typewriter Effect */}
              <div className="text-xl sm:text-2xl lg:text-3xl font-mono text-cyber-blue min-h-[2.5rem]">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer',
                    2000,
                    'Software Engineer',
                    2000,
                    'Frontend Specialist',
                    2000,
                    'Backend Developer',
                    2000,
                    'Problem Solver',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="glow-blue"
                />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0"
            >
              Building scalable web applications with{' '}
              <span className="text-cyber-green font-semibold">Next.js</span>,{' '}
              <span className="text-cyber-green font-semibold">Node.js</span>, and modern technologies.
              Passionate about creating digital experiences that matter.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="cyber-button px-8 py-4 font-semibold text-lg rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowDown size={20} className="animate-bounce" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10 px-8 py-4 font-semibold text-lg rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:your.email@example.com', label: 'Email' }
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-cyber-green transition-all duration-300 p-2 rounded-full border border-transparent hover:border-cyber-green/50 hover:shadow-neon"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-first lg:order-last"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-cyber-green/30 shadow-neon"
              />
              
              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-cyber-blue/20"
              />

              {/* Inner Container */}
              <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-br from-cyber-green/10 to-cyber-blue/10 backdrop-blur-sm">
                {/* Scan Line Effect */}
                <div className="scanline absolute inset-0 rounded-full" />
                
                {/* Profile Image */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ 
                    scale: imageLoaded ? 1 : 0.8, 
                    opacity: imageLoaded ? 1 : 0 
                  }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full rounded-full overflow-hidden"
                >
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-cyber-gray to-cyber-dark flex items-center justify-center">
                    <div className="text-6xl font-mono text-cyber-green/50">
                      &lt;/&gt;
                    </div>
                  </div>
                  
                  {/* Uncomment and replace with your actual image */}
                  {/* <Image
                    src="/your-photo.jpg"
                    alt="Your Name"
                    fill
                    className="object-cover"
                    onLoad={() => setImageLoaded(true)}
                  /> */}
                  
                  {/* Glitch Overlay */}
                  <motion.div
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 bg-cyber-green/20 mix-blend-overlay"
                  />
                </motion.div>
              </div>

              {/* Corner Brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-cyber-green shadow-neon" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-cyber-green shadow-neon" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-cyber-green shadow-neon" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-cyber-green shadow-neon" />

              {/* Tech Stats Display */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -right-4 top-4 bg-cyber-dark/80 border border-cyber-green/30 rounded-lg p-3 backdrop-blur-sm"
              >
                <div className="font-mono text-xs text-cyber-green space-y-1">
                  <div>Status: <span className="text-white">Active</span></div>
                  <div>Projects: <span className="text-white">15+</span></div>
                  <div>Experience: <span className="text-white">3+ Years</span></div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-sm text-gray-400 font-mono">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-cyber-green/50 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-cyber-green rounded-full mt-2 shadow-neon" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}