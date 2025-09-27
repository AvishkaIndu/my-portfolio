'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
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

const projects: Project[] = []

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
                  <div key={project.id} className="cyber-card rounded-xl p-4">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                  </div>
                )))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
