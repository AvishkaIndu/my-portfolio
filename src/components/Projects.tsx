'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { 
  ExternalLink, 
  Github, 
  Zap, 
  X, 
  Calendar,
  Users,
  Star,
  TrendingUp,
  Code2,
  Globe,
  Smartphone,
  Database
} from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'web' | 'mobile' | 'fullstack' | 'api'
  image: string
  demoUrl?: string
  githubUrl?: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
  year: string
  team?: string
  highlights: string[]
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with modern UI/UX, payment integration, and admin dashboard.',
    longDescription: 'A comprehensive e-commerce platform built with Next.js and Node.js featuring user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and a complete admin dashboard. The platform includes real-time inventory tracking, email notifications, and responsive design optimized for all devices.',
    technologies: ['Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
    category: 'fullstack',
    image: '/projects/ecommerce.jpg',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/AvishkaIndu/ecommerce',
    featured: true,
    status: 'completed',
    year: '2024',
    team: 'Solo Project',
    highlights: [
      'Integrated Stripe payment processing',
      'Real-time inventory management',
      'Responsive admin dashboard',
      'JWT-based authentication system'
    ]
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates and team collaboration features.',
    longDescription: 'A modern task management application designed for teams and individuals. Features include drag-and-drop task boards, real-time collaboration using WebSocket, file attachments, deadline tracking, team member assignments, and detailed project analytics. Built with React and Socket.io for seamless real-time updates.',
    technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'Redis', 'AWS S3'],
    category: 'web',
    image: '/projects/taskmanager.jpg',
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/AvishkaIndu/taskmanager',
    featured: true,
    status: 'completed',
    year: '2023',
    team: '3 Developers',
    highlights: [
      'Real-time collaboration with Socket.io',
      'Drag-and-drop task boards',
      'File upload and attachment system',
      'Advanced project analytics'
    ]
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather application with forecasts, maps, and personalized weather alerts.',
    longDescription: 'An intuitive weather dashboard that provides current conditions, 7-day forecasts, interactive weather maps, and personalized weather alerts. The application features geolocation support, multiple city tracking, historical weather data visualization, and beautiful animated weather icons.',
    technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Geolocation API'],
    category: 'web',
    image: '/projects/weather.jpg',
    demoUrl: 'https://weather.example.com',
    githubUrl: 'https://github.com/AvishkaIndu/weather',
    featured: false,
    status: 'completed',
    year: '2023',
    team: 'Solo Project',
    highlights: [
      'Interactive weather maps',
      'Personalized weather alerts',
      'Historical data visualization',
      'Geolocation integration'
    ]
  },
  {
    id: 4,
    title: 'Social Media API',
    description: 'RESTful API for social media platform with authentication, posts, comments, and real-time features.',
    longDescription: 'A robust RESTful API designed for social media applications. Includes user authentication and authorization, post creation and management, comment system, friend/follow functionality, real-time notifications, image upload and processing, and comprehensive API documentation.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Cloudinary', 'Socket.io'],
    category: 'api',
    image: '/projects/social-api.jpg',
    githubUrl: 'https://github.com/AvishkaIndu/social-api',
    featured: false,
    status: 'completed',
    year: '2023',
    team: 'Solo Project',
    highlights: [
      'JWT-based authentication',
      'Image upload and processing',
      'Real-time notifications',
      'Comprehensive API documentation'
    ]
  },
  {
    id: 5,
    title: 'Portfolio Website v2',
    description: 'Next-generation portfolio website with 3D animations, dark mode, and performance optimizations.',
    longDescription: 'The evolution of my personal portfolio featuring advanced 3D animations, smooth page transitions, optimized performance, accessibility improvements, and a modern design system. Built with Next.js 14 and Framer Motion for stunning visual effects.',
    technologies: ['Next.js 14', 'Framer Motion', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    image: '/projects/portfolio-v2.jpg',
    demoUrl: 'https://portfolio-v2.example.com',
    githubUrl: 'https://github.com/AvishkaIndu/portfolio-v2',
    featured: true,
    status: 'in-progress',
    year: '2024',
    team: 'Solo Project',
    highlights: [
      '3D animations with Three.js',
      'Advanced performance optimizations',
      'Accessibility improvements',
      'Modern design system'
    ]
  },
  {
    id: 6,
    title: 'AI Chat Application',
    description: 'Intelligent chat application powered by AI with natural language processing and smart responses.',
    longDescription: 'An advanced chat application that leverages artificial intelligence to provide intelligent responses, natural language understanding, conversation context tracking, and multi-language support. Features include chat history, user preferences, and integration with various AI models.',
    technologies: ['Next.js', 'OpenAI API', 'WebSocket', 'Redis', 'PostgreSQL', 'Python'],
    category: 'fullstack',
    image: '/projects/ai-chat.jpg',
    demoUrl: 'https://ai-chat.example.com',
    githubUrl: 'https://github.com/AvishkaIndu/ai-chat',
    featured: false,
    status: 'planned',
    year: '2024',
    team: 'Solo Project',
    highlights: [
      'AI-powered responses',
      'Natural language processing',
      'Multi-language support',
      'Conversation context tracking'
    ]
  }
]

const categories = [
  { id: 'all', name: 'All Projects', icon: Code2 },
  { id: 'web', name: 'Web Apps', icon: Globe },
  { id: 'fullstack', name: 'Full Stack', icon: Database },
  { id: 'mobile', name: 'Mobile', icon: Smartphone },
  { id: 'api', name: 'APIs', icon: Zap },
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'text-cyber-green'
      case 'in-progress': return 'text-cyber-blue'
      case 'planned': return 'text-yellow-400'
      default: return 'text-gray-400'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅'
      case 'in-progress': return '🔄'
      case 'planned': return '📋'
      default: return '❓'
    }
  }

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
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
              <span className="glow-text-subtle">My</span>{' '}
              <span className="text-cyber-green">Projects</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyber-green mx-auto shadow-neon" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my development journey and the solutions I&apos;ve built
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-cyber-gray/50 backdrop-blur-md border border-cyber-green/20 rounded-full p-2">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon
                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`
                        flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300
                        ${selectedCategory === category.id 
                          ? 'bg-cyber-green/20 text-cyber-green shadow-neon' 
                          : 'text-gray-400 hover:text-white hover:bg-cyber-green/10'
                        }
                      `}
                    >
                      <Icon size={16} />
                      <span className="font-medium">{category.name}</span>
                    </motion.button>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Featured Projects */}
          {selectedCategory === 'all' && (
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center">
                <Star className="text-cyber-green mr-3" size={24} />
                Featured Projects
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredProjects.slice(0, 2).map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="cyber-card rounded-xl overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    <div className="h-48 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent z-10" />
                      <div className="absolute inset-0 flex items-center justify-center text-6xl font-mono text-cyber-green/50">
                        &lt;/&gt;
                      </div>
                      {/* Replace with actual image */}
                      {/* <Image src={project.image} alt={project.title} fill className="object-cover" /> */}
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <span className={`text-xs font-mono px-2 py-1 rounded-full bg-cyber-dark/80 ${getStatusColor(project.status)}`}>
                          {getStatusIcon(project.status)} {project.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-2">
                        <h4 className="text-xl font-bold text-white group-hover:text-cyber-green transition-colors">
                          {project.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-cyber-green/10 text-cyber-green border border-cyber-green/20 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Project Meta */}
                      <div className="flex items-center justify-between pt-4 border-t border-cyber-green/20">
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Calendar size={14} />
                            <span>{project.year}</span>
                          </div>
                          {project.team && (
                            <div className="flex items-center space-x-1">
                              <Users size={14} />
                              <span>{project.team}</span>
                            </div>
                          )}
                        </div>

                        <div className="flex space-x-2">
                          {project.demoUrl && (
                            <motion.a
                              href={project.demoUrl}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-cyber-green/10 hover:bg-cyber-green/20 border border-cyber-green/30 hover:border-cyber-green text-cyber-green rounded-lg transition-all"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={16} />
                            </motion.a>
                          )}
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-all"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github size={16} />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Projects Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="cyber-card rounded-xl overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Project Image */}
                  <div className="h-40 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent z-10" />
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-mono text-cyber-green/50">
                      &lt;/&gt;
                    </div>
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3 z-20">
                      <span className={`text-xs font-mono px-2 py-1 rounded-full bg-cyber-dark/80 ${getStatusColor(project.status)}`}>
                        {getStatusIcon(project.status)}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-5 space-y-3">
                    <h4 className="text-lg font-bold text-white group-hover:text-cyber-green transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-cyber-green/10 text-cyber-green border border-cyber-green/20 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Project Actions */}
                    <div className="flex items-center justify-between pt-3 border-t border-cyber-green/20">
                      <span className="text-xs text-gray-500">{project.year}</span>
                      <div className="flex space-x-2">
                        {project.demoUrl && (
                          <motion.a
                            href={project.demoUrl}
                            whileHover={{ scale: 1.1 }}
                            className="p-1 text-cyber-green hover:bg-cyber-green/10 rounded transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={14} />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            whileHover={{ scale: 1.1 }}
                            className="p-1 text-gray-400 hover:text-white hover:bg-gray-700 rounded transition-all"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github size={14} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-cyber-dark border border-cyber-green/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto cyber-card"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-cyber-dark/95 backdrop-blur-md border-b border-cyber-green/20 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-cyber-green/10 rounded-lg transition-all"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Image */}
                <div className="h-64 bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl font-mono text-cyber-green/50">
                    &lt;/&gt;
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.longDescription}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {selectedProject.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <TrendingUp className="text-cyber-green mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-gray-300 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm px-3 py-1 bg-cyber-green/10 text-cyber-green border border-cyber-green/20 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Status</span>
                        <span className={`font-mono text-sm ${getStatusColor(selectedProject.status)}`}>
                          {getStatusIcon(selectedProject.status)} {selectedProject.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Year</span>
                        <span className="text-white">{selectedProject.year}</span>
                      </div>
                      {selectedProject.team && (
                        <div className="flex items-center justify-between">
                          <span className="text-gray-400">Team</span>
                          <span className="text-white">{selectedProject.team}</span>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="space-y-3 pt-4 border-t border-cyber-green/20">
                      {selectedProject.demoUrl && (
                        <a
                          href={selectedProject.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 w-full cyber-button py-3 rounded-lg font-medium"
                        >
                          <ExternalLink size={18} />
                          <span>Live Demo</span>
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2 w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-all"
                        >
                          <Github size={18} />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}