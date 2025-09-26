'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { 
  Braces, 
  Server, 
  Database, 
  Cloud, 
  Smartphone, 
  Code2, 
  GitBranch,
  Settings,
  Globe,
  Layers
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Braces,
    color: 'cyber-green',
    skills: [
      { name: 'React/Next.js', level: 90, description: 'Building modern, scalable web applications' },
      { name: 'TypeScript', level: 85, description: 'Type-safe JavaScript development' },
      { name: 'Tailwind CSS', level: 88, description: 'Utility-first CSS framework mastery' },
      { name: 'HTML5/CSS3', level: 95, description: 'Semantic markup and modern styling' },
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    color: 'cyber-blue',
    skills: [
      { name: 'Node.js/Express', level: 82, description: 'RESTful APIs and server-side logic' },
      { name: 'Python/Django', level: 75, description: 'Web frameworks and automation' },
      { name: 'API Design', level: 80, description: 'RESTful and GraphQL API architecture' },
      { name: 'Authentication', level: 78, description: 'JWT, OAuth, and security best practices' },
    ]
  },
  {
    title: 'Database & Cloud',
    icon: Database,
    color: 'cyber-purple',
    skills: [
      { name: 'MongoDB', level: 83, description: 'NoSQL database design and optimization' },
      { name: 'PostgreSQL', level: 77, description: 'Relational database management' },
      { name: 'AWS/Vercel', level: 70, description: 'Cloud deployment and serverless functions' },
      { name: 'Docker', level: 68, description: 'Containerization and deployment' },
    ]
  },
  {
    title: 'Tools & Others',
    icon: Settings,
    color: 'cyber-green',
    skills: [
      { name: 'Git/GitHub', level: 88, description: 'Version control and collaboration' },
      { name: 'VS Code', level: 92, description: 'Development environment optimization' },
      { name: 'Figma', level: 75, description: 'UI/UX design and prototyping' },
      { name: 'Testing', level: 72, description: 'Jest, Cypress, and unit testing' },
    ]
  },
]

const technologies = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Docker', icon: '🐳' },
  { name: 'AWS', icon: '☁️' },
  { name: 'Git', icon: '📱' },
  { name: 'Tailwind', icon: '🎨' },
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
          category.skills.forEach(skill => {
            skillLevels[skill.name] = skill.level
          })
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
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="cyber-card p-8 rounded-xl"
                >
                  <div className="flex items-center space-x-3 mb-8">
                    <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/30`}>
                      <Icon className={`text-${category.color}`} size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-white group-hover:text-cyber-green transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-sm text-cyber-green font-mono">
                            {animatedSkills[skill.name] || 0}%
                          </span>
                        </div>
                        
                        {/* Skill Bar */}
                        <div className="relative">
                          <div className="h-2 bg-cyber-gray rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ 
                                width: isInView ? `${animatedSkills[skill.name] || 0}%` : '0%' 
                              }}
                              transition={{ 
                                duration: 1.5, 
                                delay: categoryIndex * 0.2 + skillIndex * 0.1,
                                ease: "easeOut"
                              }}
                              className={`h-full bg-gradient-to-r from-${category.color} to-cyber-blue shadow-neon relative`}
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                            </motion.div>
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Technology Icons */}
          <motion.div variants={itemVariants} className="cyber-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              <Code2 className="inline mr-3 text-cyber-green" size={28} />
              Technologies I Work With
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 300
                  }}
                  className="bg-cyber-gray/50 hover:bg-cyber-green/10 border border-cyber-green/20 hover:border-cyber-green/50 rounded-lg p-4 text-center transition-all duration-300 cursor-pointer group"
                >
                  <div className="text-3xl mb-2 group-hover:animate-bounce">
                    {tech.icon}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
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