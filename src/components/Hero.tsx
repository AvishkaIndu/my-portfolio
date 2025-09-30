'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Mail, Github, Linkedin, Facebook, Instagram } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-12 xs:pt-16 pb-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 sm:gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6 xs:space-y-3 order-2 lg:order-1">
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
            <div className="space-y-4 sm:space-y-3 flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold text-white text-center whitespace-nowrap"
                style={{ 
                  fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
                  lineHeight: 1.1 
                }}
              >
                <span className="text-cyber-green glow-text-subtle">
                  Avishka Induwara
                </span>
              </motion.h1>

              {/* Typewriter Effect */}
              <div className="text-base xs:text-lg sm:text-xl lg:text-2xl xl:text-3xl font-mono text-white min-h-[2rem] sm:min-h-[5.5rem] text-center">
                <TypeAnimation
                  sequence={[
                    'Full-Stack Developer',
                    2000,
                    'UI/UX enthusiast',
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
                  className="text-white glow-white"
                  style={{ 
                    color: '#ffffff',
                    fontSize: 'clamp(1rem, 4vw, 1.875rem)'
                  }}
                />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-sm xs:text-base sm:text-lg lg:text-xl text-gray-300 max-w-xl sm:max-w-2xl mx-auto lg:mx-0 px-4 sm:px-0"
            >
              Building scalable and high-performance web applications with{' '}
              <span className="text-cyber-green font-semibold">Next.js</span>,{' '}
              <span className="text-cyber-green font-semibold">React</span>,{' '}
              <span className="text-cyber-green font-semibold">Node.js</span>,{' '}
              <span className="text-cyber-green font-semibold">Laravel</span>, and modern cloud technologies.
              <br className="hidden xs:block" />
              Skilled in designing efficient databases, crafting secure APIs, and delivering seamless deployment solutions.
              <br className="hidden xs:block" />
              Passionate about innovation, problem-solving, and bringing creative ideas to life through software engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col xs:flex-row gap-2 xs:gap-3 justify-center px-4 sm:px-0"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="cyber-button px-4 xs:px-6 py-2 xs:py-3 font-medium text-sm xs:text-base rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View My Work</span>
                <ArrowDown size={16} className="animate-bounce" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border border-white text-white hover:bg-white/10 px-4 xs:px-6 py-2 xs:py-3 font-medium text-sm xs:text-base rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download size={16} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center space-y-4 relative z-50"
            >
              {/* First row - GitHub, LinkedIn, Email */}
              <div className="flex justify-center space-x-6 relative z-50">
                {[
                  { icon: Github, href: 'https://github.com/AvishkaIndu', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/avishka-induwara-822386310/', label: 'LinkedIn' },
                  { icon: Mail, href: 'mailto:avishkaindu2003@gmail.com', label: 'Email' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-cyber-green transition-all duration-300 p-3 rounded-full border border-transparent hover:border-cyber-green/50 hover:shadow-neon relative z-50 block cursor-pointer"
                    aria-label={label}
                    style={{ touchAction: 'manipulation', pointerEvents: 'auto' }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>

              {/* Second row - Facebook, Instagram */}
              <div className="flex justify-center space-x-6 relative z-50">
                {[
                  { icon: Facebook, href: 'https://web.facebook.com/avishka.indu', label: 'Facebook' },
                  { icon: Instagram, href: 'https://www.instagram.com/avishka_indu/', label: 'Instagram' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-gray-400 hover:text-cyber-green transition-all duration-300 p-3 rounded-full border border-transparent hover:border-cyber-green/50 hover:shadow-neon relative z-50 block cursor-pointer"
                    aria-label={label}
                    style={{ touchAction: 'manipulation', pointerEvents: 'auto' }}
                  >
                    <Icon size={24} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 xs:w-80 xs:h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem]">
              {/* Outer Glow Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-cyber-green/30 shadow-neon-subtle"
              />
              
              {/* Middle Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-cyber-blue/20"
              />

              {/* Inner Container */}
              <div className="absolute inset-1 xs:inset-2 rounded-full overflow-hidden bg-gradient-to-br from-cyber-green/10 to-cyber-blue/10 backdrop-blur-sm">
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
                  style={{ clipPath: 'circle(50%)' }}
                >
                  {/* Show placeholder only when image hasn't loaded */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-br from-cyber-gray to-cyber-dark flex items-center justify-center">
                      <div className="text-6xl font-mono text-cyber-green/50">
                        &lt;/&gt;
                      </div>
                    </div>
                  )}
                  
                  {/* Your photo - Replace "/your-photo.jpg" with your actual photo path */}
                  <Image
                    src="/avishka.jpg"
                    alt="Avishka Induwara - Portfolio Photo"
                    fill
                    className={`object-cover rounded-full transition-opacity duration-500 ${
                      imageLoaded ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => setImageLoaded(true)}
                    onError={() => setImageLoaded(false)}
                    priority
                    sizes="(max-width: 768px) 300px, 400px"
                  />
                  
                  {/* Glitch Overlay */}
                  <motion.div
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 3 }}
                    className="absolute inset-0 bg-cyber-green/20 mix-blend-overlay"
                  />
                </motion.div>
              </div>

              {/* Corner Brackets */}
              <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-cyber-green" />
              <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-cyber-green" />
              <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-cyber-green" />
              <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-cyber-green" />

              {/* Tech Stats Display - Console Style */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.6 }}
                className="absolute -right-1 xs:-right-0 -top-1 xs:top-0 bg-black/90 border border-cyber-green/50 rounded-md px-3 py-2 backdrop-blur-sm shadow-lg min-w-[120px] xs:min-w-[140px]"
              >
                {/* Console Header */}
                <div className="flex items-center justify-between mb-1 pb-1 border-b border-cyber-green/30">
                  <div className="flex space-x-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  </div>
                  <span className="font-mono text-[7px] xs:text-[8px] text-cyber-green/70">terminal</span>
                </div>
                
                {/* Console Content - Horizontal Layout */}
                <div className="font-mono text-[8px] xs:text-[9px] text-cyber-green text-left">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-cyber-green">$</span> 
                      <span className="text-white ml-0.5">status:</span>
                      <span className="text-white ml-1 text-[7px] xs:text-[8px]">Active</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-0.5">
                    <div className="flex items-center">
                      <span className="text-cyber-green">$</span> 
                      <span className="text-white ml-0.5">projects:</span>
                      <span className="text-white ml-1 text-[7px] xs:text-[8px]">5+</span>
                    </div>
                    <div className="hidden xs:flex items-center ml-2">
                      <span className="text-white">exp:</span>
                      <span className="text-white ml-1 text-[7px] xs:text-[8px]">2+</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-0.5">
                    <span className="text-cyber-green animate-pulse">$</span> 
                    <span className="text-white ml-0.5 animate-pulse">_</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex justify-center px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="cursor-pointer"
            onClick={scrollToNext}
          >
            <div className="flex flex-col items-center space-y-1 sm:space-y-2">
              <span className="text-xs sm:text-sm text-gray-400 font-mono text-center px-2">
                Scroll to explore
              </span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-6 sm:w-5 sm:h-8 md:w-6 md:h-10 border-2 border-cyber-green/50 rounded-full flex justify-center"
              >
                <div className="w-0.5 h-2 sm:w-0.5 sm:h-2.5 md:w-1 md:h-3 bg-cyber-green rounded-full mt-1 sm:mt-1.5 md:mt-2 shadow-neon" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}