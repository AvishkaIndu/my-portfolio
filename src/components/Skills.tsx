'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  Braces, 
  Server, 
  Database, 
  Code2, 
  GitBranch,
  Settings,
  Globe
} from 'lucide-react'
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiPostgresql, 
  SiDocker, 
  SiAmazon, 
  SiGit, 
  SiTailwindcss,
  SiFirebase,
  SiExpress,
  SiFigma,
  SiLaravel,
  SiRedis,
  SiVercel
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Braces,
    color: 'cyber-green',
    level: 89,
    description: 'React, Next.js, TypeScript, Tailwind CSS'
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'cyber-blue',
    level: 79,
    description: 'Node.js, Python, API Design, Authentication'
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    color: 'cyber-purple',
    level: 75,
    description: 'MongoDB, PostgreSQL, AWS, Docker'
  },
  {
    title: 'Tools & Others',
    icon: Settings,
    color: 'cyber-green',
    level: 82,
    description: 'Git, VS Code, Figma, Testing'
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const skillLevels: { [key: string]: number } = {}
        skillCategories.forEach(category => {
          skillLevels[category.title] = category.level
        })
        setAnimatedSkills(skillLevels)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 lg:py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="glow-text-subtle">Technical</span>{' '}
              <span className="text-cyber-green">Skills</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyber-green mx-auto shadow-neon" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              const level = animatedSkills[category.title] || 0
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="group"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 h-full">
                    
                    {/* Header */}
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-600/30">
                        <Icon className="text-gray-300" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {category.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Simple Progress Section */}
                    <div className="space-y-4">
                      {/* Progress Bar */}
                      <div className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-300 font-medium">Proficiency</span>
                          <span className="text-lg font-bold text-white">
                            {level}%
                          </span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ 
                              width: isInView ? `${level}%` : '0%' 
                            }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.2,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-gray-400 to-gray-300 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Experience Level */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                        <span className="text-sm text-gray-400">Experience Level</span>
                        <motion.span 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: isInView ? 1 : 0 }}
                          transition={{ delay: categoryIndex * 0.2 + 0.5 }}
                          className="text-sm font-medium text-white px-3 py-1 rounded-full bg-gray-800/50 border border-gray-600/30"
                        >
                          {level >= 90 ? 'Expert' : 
                           level >= 80 ? 'Advanced' :
                           level >= 70 ? 'Intermediate' : 
                           level >= 60 ? 'Proficient' :
                           'Developing'}
                        </motion.span>
                      </div>
                    </div>

                    {/* Subtle Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Technology Stack - Modern Icon List */}
          <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30">
            {/* Section Header */}
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-800/50 border border-gray-600/30 mb-4">
                <Code2 className="text-cyber-green" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Technology Stack
              </h3>
              <p className="text-gray-400">
                Technologies and tools I work with
              </p>
            </div>

            {/* Modern Icon Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
              {[
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'TypeScript', icon: SiTypescript },
                { name: 'React', icon: SiReact },
                { name: 'Next.js', icon: SiNextdotjs },
                { name: 'Node.js', icon: SiNodedotjs },
                { name: 'Python', icon: SiPython },
                { name: 'MongoDB', icon: SiMongodb },
                { name: 'PostgreSQL', icon: SiPostgresql },
                { name: 'Docker', icon: SiDocker },
                { name: 'AWS', icon: SiAmazon },
                { name: 'Git', icon: SiGit },
                { name: 'Tailwind CSS', icon: SiTailwindcss },
                { name: 'Firebase', icon: SiFirebase },
                { name: 'Express.js', icon: SiExpress },
                { name: 'Figma', icon: SiFigma },
                { name: 'Laravel', icon: SiLaravel },
              ].map((tech, index) => {
                const IconComponent = tech.icon
                return (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.05,
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -4,
                      transition: { duration: 0.2 }
                    }}
                    className="group relative"
                  >
                    <div className="flex flex-col items-center space-y-2 p-4 rounded-xl bg-gray-800/20 border border-gray-700/40 hover:border-cyber-green/60 hover:bg-gray-800/40 transition-all duration-300">
                      {/* Icon Container */}
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <IconComponent 
                          className="text-3xl text-gray-400 group-hover:text-cyber-green transition-all duration-300" 
                        />
                        {/* Green glow on hover */}
                        <div className="absolute inset-0 rounded-lg bg-cyber-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                      </div>
                      
                      {/* Technology Name - Hidden by default, shown on hover */}
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                        <div className="bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-md border border-cyber-green/30">
                          <span className="text-xs font-medium text-cyber-green whitespace-nowrap">
                            {tech.name}
                          </span>
                        </div>
                        {/* Tooltip Arrow */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
                          <div className="w-2 h-2 bg-gray-900/90 border-l border-t border-cyber-green/30 rotate-45" />
                        </div>
                      </div>
                      
                      {/* Green highlight dot */}
                      <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-cyber-green group-hover:shadow-[0_0_8px_rgba(64,224,208,0.6)] transition-all duration-300" />
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Simple Status Indicator */}
            <div className="mt-10 pt-6 border-t border-gray-700/30">
              <div className="text-center">
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="inline-flex items-center space-x-3 px-4 py-2 rounded-lg bg-gray-800/30 border border-cyber-green/30"
                >
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <motion.div 
                        key={i}
                        className="w-1.5 h-1.5 bg-cyber-green rounded-full"
                        animate={{
                          opacity: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-cyber-green font-medium text-sm">
                    Always evolving
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Learning Journey */}
          <motion.div
            variants={itemVariants}
            className="cyber-card p-8 rounded-xl text-center"
          >
            <motion.div
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 360 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="mb-6"
            >
              <Globe className="text-cyber-green mx-auto glow-border rounded-full p-4" size={80} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning
            </h3>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              The tech world evolves rapidly, and so do I. I&apos;m always exploring new frameworks, 
              learning best practices, and staying updated with the latest industry trends. 
              <span className="text-cyber-green font-semibold"> Growth never stops</span>.
            </p>
            
            <div className="flex justify-center items-center space-x-4 mt-6">
              <GitBranch className="text-cyber-blue" size={20} />
              <span className="text-gray-400 font-mono text-sm">
                git commit -m &quot;Keep learning and improving&quot;
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}