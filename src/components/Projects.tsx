'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { 
  ExternalLink, 
  Github, 
  X, 
  Calendar,
  Users,
  TrendingUp
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
    title: "NextStep – AI-Based Career Pathway Discovery System",
    description: "An AI-powered web platform designed to guide IT students in identifying the most suitable career pathways based on their skills, knowledge, and interests.",
    longDescription: "NextStep is a comprehensive AI-driven platform that bridges the gap between academic knowledge and career planning. The system uses intelligent questionnaires to analyze student responses across software, networking, multimedia, and cloud computing domains, providing personalized career recommendations and custom learning paths to help students gain industry-ready skills.",
    technologies: [
      "React", 
      "TypeScript", 
      "Tailwind CSS", 
      "Vite", 
      "ASP.NET Core", 
      "SQLite", 
      "Docker", 
      "AWS", 
      "GitHub Actions",
      "Artificial Intelligence"
    ],
    category: 'fullstack',
    image: "/images/projects/nextstep.png",
    demoUrl: "", // Add your live demo URL here if available
    githubUrl: "https://github.com/Team-BISHOP/NextStep", // Add your GitHub repository URL here
    featured: true,
    status: 'completed',
    year: "2025",
    team: "Team Project",
    highlights: [
      "Personalized career recommendations (Software Engineer, Data Scientist, Cybersecurity Specialist)",
      "AI-driven questionnaires analyzing skills across multiple domains",
      "Custom learning paths with curated resources and project ideas",
      "Skills tracking and GitHub portfolio integration",
      "Leaderboards and AI assistant support",
      "Deployed on AWS using Docker and CI/CD with GitHub Actions"
    ]
  },
  {
    id: 2,
    title: "Portfolio V1 – Personal Web Portfolio",
    description: "A responsive personal website built with only HTML and CSS, serving as my first step into front-end development.",
    longDescription: "Portfolio V1 represents my foundation in web development, showcasing clean code practices and responsive design principles using only HTML and CSS. This project demonstrates my understanding of semantic HTML structure, modern CSS layout techniques, and mobile-first design approach without relying on frameworks or libraries.",
    technologies: [
      "HTML", 
      "CSS", 
      "Flexbox", 
      "CSS Grid", 
      "Responsive Design"
    ],
    category: 'web',
    image: "/images/projects/portfolio-v1.jpg",
    demoUrl: "", // Add your live demo URL here if available
    githubUrl: "https://github.com/AvishkaIndu/Portfolio", // Add your GitHub repository URL here
    featured: false,
    status: 'completed',
    year: "2023",
    team: "Solo Project",
    highlights: [
      "Clean and structured layout showcasing projects, skills, and achievements",
      "Complete sections: About Me, Projects, Skills, and Contact",
      "Semantic HTML for accessibility and SEO-friendly structure",
      "Fully responsive design for desktop and mobile devices",
      "Modern CSS layout techniques using Flexbox and Grid",
      "Built without frameworks demonstrating core web development skills"
    ]
  },
  {
    id: 3,
    title: "TODORA – Task Management Application",
    description: "A comprehensive todo list application developed with C# and SQLite database, designed to help users organize and manage their daily tasks efficiently.",
    longDescription: "TODORA is a robust task management system built as a group project using C# and SQLite database. The application provides users with an intuitive interface to create, organize, and track their tasks with various productivity features. This project showcases our team's ability to work with desktop application development, database integration, and collaborative software development practices.",
    technologies: [
      "C#", 
      ".NET Framework",
      "SQLite", 
      "Windows Forms",
      "SQL",
      "Visual Studio"
    ],
    category: 'api',
    image: "/images/projects/todora.jpg",
    demoUrl: "", // Add your live demo URL here if available
    githubUrl: "", // Add your GitHub repository URL here
    featured: false,
    status: 'completed',
    year: "2024",
    team: "Team Project",
    highlights: [
      "Full CRUD operations for task management (Create, Read, Update, Delete)",
      "SQLite database integration for persistent data storage",
      "User-friendly Windows Forms interface for easy task organization",
      "Task categorization and priority management features",
      "Team collaboration and version control using Git",
      "Demonstrates proficiency in C# desktop application development"
    ]
  },
  {
    id: 4,
    title: "Portfolio V2 – Modern Cyberpunk Portfolio",
    description: "A modern cyberpunk-themed portfolio website built with Next.js and TypeScript, featuring advanced animations and futuristic design elements.",
    longDescription: "Portfolio V2 represents a significant evolution from my initial HTML/CSS portfolio, showcasing advanced front-end development skills with modern frameworks. This cyberpunk-themed portfolio combines cutting-edge web technologies with creative design concepts, featuring matrix-style animations, neon effects, and a fully responsive layout that demonstrates both technical expertise and artistic vision.",
    technologies: [
      "Next.js 14", 
      "TypeScript", 
      "Tailwind CSS", 
      "Framer Motion",
      "Lucide React",
      "Vercel",
      "Responsive Design",
      "UI/UX Design"
    ],
    category: 'fullstack',
    image: "/images/projects/portfolio-v2.jpg",
    demoUrl: "https://my-portfolio-gamma-blond-59.vercel.app/", // Add your live demo URL here if available
    githubUrl: "https://github.com/AvishkaIndu/my-portfolio", // Add your GitHub repository URL here
    featured: true,
    status: 'completed',
    year: "2025",
    team: "Solo Project",
    highlights: [
      "Futuristic cyberpunk design with neon green (#00ff88) and cyber blue accents",
      "Matrix-style animations including rain effect, glitch text, and neon glow",
      "Dynamic hero section with typewriter effect and animated transitions",
      "Interactive project showcase with modal views and hover effects",
      "Functional contact form with validation and feedback",
      "SEO & performance optimized for fast loading and discoverability",
      "Demonstrates progression from basic HTML/CSS to modern full-stack development"
    ]
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              <span className="glow-text-subtle">My</span>{' '}
              <span className="text-cyber-green">Projects</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyber-green mx-auto shadow-neon" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover the applications and systems I built, from web platforms to mobile apps.
            </p>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.length === 0 ? (
                <div className="col-span-full text-center py-16">
                  <div className="cyber-card rounded-xl p-8 space-y-4">
                    <div className="text-6xl text-cyber-green/50 font-mono mb-4">
                      &lt;/&gt;
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Projects Coming Soon
                    </h3>
                    <p className="text-gray-400 max-w-md mx-auto">
                      I am currently working on exciting new projects. Check back soon to see my latest work!
                    </p>
                    <div className="flex justify-center space-x-4 mt-6">
                      <a
                        href="https://github.com/AvishkaIndu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                      >
                        <Github size={16} />
                        <span>View GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="cyber-card rounded-xl overflow-hidden group hover:border-cyber-green/50 transition-all duration-300 cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-cyber-green/20 to-cyber-blue/20 flex items-center justify-center">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          width={400}
                          height={225}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' 
                            ? 'bg-green-900/70 text-green-400 border border-green-500/50' 
                            : project.status === 'in-progress'
                            ? 'bg-yellow-900/70 text-yellow-400 border border-yellow-500/50'
                            : 'bg-blue-900/70 text-blue-400 border border-blue-500/50'
                        }`}>
                          {project.status === 'completed' && '✓ Completed'}
                          {project.status === 'in-progress' && '⚡ In Progress'}
                          {project.status === 'planned' && '📋 Planned'}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-3 right-3">
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-cyber-green/30 text-cyber-green border border-cyber-green/50">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Project Content - Simplified */}
                    <div className="p-4 space-y-3">
                      {/* Project Header */}
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-lg font-bold text-white group-hover:text-cyber-green transition-colors leading-tight">
                            {project.title}
                          </h3>
                          <div className="flex items-center text-xs text-gray-500 shrink-0">
                            <Calendar size={12} className="mr-1" />
                            {project.year}
                          </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Quick Tech Stack Preview */}
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded border border-gray-700/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="inline-block px-2 py-1 bg-gray-800/50 text-cyber-green text-xs rounded border border-gray-700/50">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center justify-between pt-2 border-t border-gray-800/50">
                        <div className="flex items-center text-xs text-gray-500">
                          {project.team && (
                            <div className="flex items-center mr-3">
                              <Users size={12} className="mr-1" />
                              {project.team}
                            </div>
                          )}
                          <div className="flex items-center">
                            <TrendingUp size={12} className="mr-1" />
                            {project.category}
                          </div>
                        </div>

                        {/* External Links */}
                        <div className="flex items-center space-x-1">
                          {project.githubUrl && (
                            <motion.a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all border border-gray-700/50 hover:border-gray-600/50"
                              title="View Source Code"
                            >
                              <Github size={14} />
                            </motion.a>
                          )}
                          
                          {project.demoUrl && (
                            <motion.a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-cyber-green/20 hover:bg-cyber-green/30 text-cyber-green hover:text-white transition-all border border-cyber-green/40 hover:border-cyber-green/60"
                              title="View Live Demo"
                            >
                              <ExternalLink size={14} />
                            </motion.a>
                          )}
                        </div>
                      </div>

                      {/* Click to view details hint */}
                      <div className="text-center pt-2">
                        <span className="text-xs text-gray-500 group-hover:text-cyber-green transition-colors">
                          Click to view details
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Detail Modal */}
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
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="cyber-card rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between p-6 border-b border-gray-800/50">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {selectedProject.year}
                    </span>
                    {selectedProject.team && (
                      <span className="flex items-center">
                        <Users size={14} className="mr-1" />
                        {selectedProject.team}
                      </span>
                    )}
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      selectedProject.status === 'completed' 
                        ? 'bg-green-900/50 text-green-400 border border-green-500/30' 
                        : selectedProject.status === 'in-progress'
                        ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-900/50 text-blue-400 border border-blue-500/30'
                    }`}>
                      {selectedProject.status === 'completed' && '✓ Completed'}
                      {selectedProject.status === 'in-progress' && '⚡ In Progress'}
                      {selectedProject.status === 'planned' && '📋 Planned'}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-800/50 rounded-lg transition-colors"
                >
                  <X size={20} className="text-gray-400 hover:text-white" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Project Description */}
                <div>
                  <h4 className="text-lg font-semibold text-cyber-green mb-3">About This Project</h4>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-lg font-semibold text-cyber-green mb-3">Key Features & Impact</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-cyber-green mr-3 shrink-0 mt-1">•</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-cyber-green mb-3">Technology Stack</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="inline-block px-3 py-2 bg-gray-800/50 text-gray-300 text-sm rounded-lg border border-gray-700/50 text-center"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800/50">
                  {selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-white rounded-lg border border-gray-700/50 hover:border-gray-600/50 transition-all"
                    >
                      <Github size={18} />
                      <span>View Source Code</span>
                    </motion.a>
                  )}
                  
                  {selectedProject.demoUrl && (
                    <motion.a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-cyber-green/20 hover:bg-cyber-green/30 text-cyber-green rounded-lg border border-cyber-green/40 hover:border-cyber-green/60 transition-all"
                    >
                      <ExternalLink size={18} />
                      <span>View Live Demo</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
