'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { 
  Send, 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram,
  Facebook,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message: string
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'avishkaindu2003@gmail.com',
    href: 'mailto:avishkaindu2003@gmail.com',
    description: 'Send me an email anytime'
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
    description: 'Available Mon-Fri 9AM-6PM'
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Your City, Country',
    href: '#',
    description: 'Open to remote opportunities'
  },
  {
    icon: Clock,
    title: 'Response Time',
    value: '< 24 hours',
    href: '#',
    description: 'I respond quickly to messages'
  }
]

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/AvishkaIndu',
    color: 'hover:text-gray-300',
    description: 'Check out my code'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/avishka-induwara-822386310/',
    color: 'hover:text-blue-400',
    description: 'Connect professionally'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
    color: 'hover:text-blue-400',
    description: 'Follow my updates'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/avishka_indu/',
    color: 'hover:text-pink-400',
    description: 'Follow my journey'
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://web.facebook.com/avishka.indu',
    color: 'hover:text-blue-600',
    description: 'Connect on Facebook'
  },
]

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus({ type: 'loading', message: 'Sending message...' })

    // Simulate form submission
    setTimeout(() => {
      // In a real application, you would send the data to your backend
      setFormStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 2000)
  }

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
    <section id="contact" className="py-20 lg:py-32 relative">
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
              <span className="glow-text-subtle">Get In</span>{' '}
              <span className="text-cyber-green">Touch</span>
            </h2>
            <div className="w-24 h-0.5 bg-cyber-green mx-auto shadow-neon" />
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Let&apos;s discuss your next project or just say hello. I&apos;m always excited to work on new challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="cyber-card p-8 rounded-xl">
                <div className="flex items-center space-x-3 mb-8">
                  <MessageSquare className="text-cyber-green" size={28} />
                  <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="cyber-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyber-green/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="cyber-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyber-green/50 transition-all"
                        placeholder="avishkaindu2003@gmail.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="cyber-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyber-green/50 transition-all"
                      placeholder="Project discussion, collaboration, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="cyber-input w-full px-4 py-3 rounded-lg focus:ring-2 focus:ring-cyber-green/50 transition-all resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  {/* Form Status */}
                  {formStatus.type !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        formStatus.type === 'success' 
                          ? 'bg-green-900/20 border border-green-500/30 text-green-400'
                          : formStatus.type === 'error'
                          ? 'bg-red-900/20 border border-red-500/30 text-red-400'
                          : 'bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue'
                      }`}
                    >
                      {formStatus.type === 'loading' && <Loader2 size={16} className="animate-spin" />}
                      {formStatus.type === 'success' && <CheckCircle size={16} />}
                      {formStatus.type === 'error' && <AlertCircle size={16} />}
                      <span className="text-sm">{formStatus.message}</span>
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="cyber-button w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus.type === 'loading' ? (
                      <Loader2 size={20} className="animate-spin" />
                    ) : (
                      <Send size={20} />
                    )}
                    <span>
                      {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                    </span>
                  </motion.button>
                </form>
              </div>

              {/* Social Links */}
              <motion.div variants={cardVariants} className="cyber-card p-6 rounded-xl">
                <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className={`group flex flex-col items-center space-y-2 p-4 rounded-xl bg-cyber-gray/50 hover:bg-cyber-green/10 border border-cyber-green/20 hover:border-cyber-green/50 transition-all ${social.color}`}
                        title={social.description}
                      >
                        <Icon size={24} className="text-gray-400 group-hover:text-cyber-green transition-colors" />
                        <span className="text-xs text-gray-400 group-hover:text-white transition-colors">
                          {social.name}
                        </span>
                      </motion.a>
                    )
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="cyber-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                  <Mail className="text-cyber-green mr-3" size={28} />
                  Contact Information
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group"
                      >
                        <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-cyber-green/5 transition-all">
                          <div className="p-3 bg-cyber-green/10 border border-cyber-green/30 rounded-lg group-hover:shadow-neon transition-all">
                            <Icon className="text-cyber-green" size={20} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover:text-cyber-green transition-colors">
                              {info.title}
                            </h4>
                            <p className="text-gray-300 font-mono">
                              {info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? (
                                <a href={info.href} className="hover:text-cyber-green transition-colors cursor-pointer relative z-50" style={{ pointerEvents: 'auto' }}>
                                  {info.value}
                                </a>
                              ) : (
                                info.value
                              )}
                            </p>
                            <p className="text-sm text-gray-500 mt-1">
                              {info.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* Availability Card */}
              <motion.div
                variants={cardVariants}
                className="cyber-card p-6 rounded-xl text-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="mb-4"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full mx-auto flex items-center justify-center shadow-neon">
                    <CheckCircle className="text-white" size={24} />
                  </div>
                </motion.div>
                
                <h4 className="text-xl font-bold text-white mb-2">
                  Available for Work
                </h4>
                
                <p className="text-gray-400 text-sm">
                  I&apos;m currently available for freelance projects and full-time opportunities. 
                  Let&apos;s create something amazing together!
                </p>
                
                <div className="mt-4 flex justify-center">
                  <span className="inline-flex items-center space-x-2 px-3 py-1 bg-green-900/20 border border-green-500/30 text-green-400 text-xs font-mono rounded-full">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Open to opportunities</span>
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="cyber-card p-8 rounded-xl text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Whether you&apos;re a startup with a groundbreaking idea or an established company looking to innovate, 
              I&apos;m here to help bring your vision to life with cutting-edge technology and creative solutions.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="cyber-button inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold text-lg"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <MessageSquare size={20} />
              <span>Let&apos;s Talk</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}