'use client'

import { motion } from 'framer-motion'
import { Code2, GraduationCap, Award, Calendar, MapPin, Coffee } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '3+', icon: Calendar },
  { label: 'Projects Completed', value: '15+', icon: Code2 },
  { label: 'Technologies', value: '20+', icon: Award },
  { label: 'Coffee Consumed', value: '∞', icon: Coffee },
]

const journey = [
  {
    year: 'Jun 2023 – Jan 2028',
    title: 'Bachelor of Information Communication Technology - BICT',
    subtitle: 'University of Sri Jayewardenepura',
    description: 'Information Technology specialization, focusing on software engineering principles and modern development practices.',
    type: 'education'
  },
  {
    year: 'Mar 2022 – Nov 2022',
    title: 'Diploma in English',
    subtitle: 'ESOFT Metro Campus',
    description: 'English Language and Literature studies, enhancing communication and analytical skills.',
    type: 'education'
  },
  {
    year: 'Oct 2023 - May 2025',
    title: 'Member',
    subtitle: 'Gavel Club of University of Sri Jayewardenepura',
    description: 'Active member developing leadership, public speaking, and communication skills through club activities.',
    type: 'experience'
  },
  {
    year: 'Jun 2024 - Jan 2025',
    title: 'Graphic Designer',
    subtitle: 'CoDeKu DevOps Academy · Part-time',
    description: 'Designed social media posts and brand logo to support brand identity and online presence. Created simple, modern designs for tech-focused content.',
    type: 'experience'
  },
  {
    year: 'Feb 2022 - Aug 2024',
    title: 'Freelance Graphic Designer',
    subtitle: 'Fiverr · Part-time',
    description: 'Work as a freelance graphic and logo designer, delivering custom designs for clients worldwide. Focus on clean, creative visuals tailored to each brand\'s identity and goals.',
    type: 'experience'
  },
]

export default function About() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="about" className="py-20 lg:py-32 relative">
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
              <span className="glow-text-subtle">About</span>{' '}
              <span className="text-cyber-green">Me</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyber-green mx-auto shadow-neon" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Passionate about creating digital experiences that solve real-world problems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Personal Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="cyber-card p-8 rounded-xl">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <GraduationCap className="text-cyber-green" size={28} />
                    <h3 className="text-2xl font-bold text-white">My Story</h3>
                  </div>
                  
                  <div className="space-y-4 text-gray-300 leading-relaxed">
                    <p>
                      Hello! I&apos;m a passionate <span className="text-cyber-green font-semibold">Software Engineering undergraduate</span> at the <span className="text-cyber-blue font-semibold">University of Sri Jayewardenepura</span>, specializing in Software Engineering under the BICT degree program. I thrive on creating innovative web applications and tackling complex challenges through code.
                    </p>
                    
                    <p>
                      My journey into software development started in my first year of university, where I realized the power of turning ideas into impactful digital solutions. Since then, I&apos;ve been exploring cutting-edge technologies, continuously expanding my expertise in full-stack development with frameworks like MERN, Next.js, React, and Laravel.
                    </p>
                    
                    <p>
                      I believe in writing clean, maintainable code, designing user-friendly experiences, and building software that makes a difference. Beyond coding, I enjoy exploring emerging technologies, contributing to open-source, and engaging with the developer community.
                    </p>
                    
                    <p>
                      Based in Sri Lanka, I&apos;m driven by curiosity, innovation, and the vision of building technology that empowers people.
                    </p>
                  </div>

                  <div className="flex items-center space-x-4 pt-4 border-t border-cyber-green/20">
                    <MapPin className="text-cyber-green" size={20} />
                    <span className="text-gray-300">Based in Colombo, Sri Lanka</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-2 gap-4"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      variants={cardVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="cyber-card p-6 rounded-lg text-center group cursor-pointer"
                    >
                      <Icon className="text-cyber-green mx-auto mb-2 group-hover:animate-pulse" size={24} />
                      <div className="text-2xl font-bold text-white mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Education & Experience Timeline */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="cyber-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Award className="text-cyber-green mr-3" size={28} />
                  Journey
                </h3>

                <div className="space-y-8">
                  {journey.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-8 border-l-2 border-cyber-green/30 last:border-l-transparent"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyber-green rounded-full shadow-neon animate-pulse" />
                      
                      <div className="space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <h4 className="text-lg font-semibold text-white">
                            {item.title}
                          </h4>
                          <span className="text-sm text-cyber-green font-mono bg-cyber-green/10 px-3 py-1 rounded-full">
                            {item.year}
                          </span>
                        </div>
                        
                        <h5 className="text-cyber-blue font-medium">
                          {item.subtitle}
                        </h5>
                        
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tech Philosophy */}
          <motion.div
            variants={itemVariants}
            className="cyber-card p-8 rounded-xl text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="mb-6"
            >
              <Code2 className="text-cyber-green mx-auto glow-border rounded-full p-4" size={80} />
            </motion.div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              My Development Philosophy
            </h3>
            
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
              &quot;Code is not just about making things work – it&apos;s about crafting elegant solutions 
              that are <span className="text-cyber-green font-semibold">scalable</span>, 
              <span className="text-cyber-blue font-semibold"> maintainable</span>, and 
              <span className="text-cyber-green font-semibold"> impactful</span>. 
              Every line of code should serve a purpose and contribute to creating something meaningful.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}