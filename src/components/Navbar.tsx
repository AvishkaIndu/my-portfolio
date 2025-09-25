'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="fixed top-2 xs:top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-2 xs:px-3 sm:px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'transition-all duration-300 rounded-full',
          'px-2 py-1.5 xs:px-3 xs:py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-3 lg:px-6 lg:py-4',
          'w-auto max-w-full',
          isScrolled
            ? 'backdrop-blur-md bg-cyber-dark/20 border border-cyber-green/10'
            : 'bg-transparent'
        )}
      >
        <div className="flex items-center justify-center w-full overflow-hidden">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-6 flex-nowrap whitespace-nowrap">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'px-1 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2',
                  'text-[10px] sm:text-xs md:text-sm lg:text-base',
                  'font-medium transition-all duration-300',
                  'relative group rounded-full whitespace-nowrap flex-shrink-0',
                  activeSection === item.href.substring(1)
                    ? 'text-cyber-green glow-text-subtle bg-cyber-green/5'
                    : 'text-white hover:text-cyber-green hover:bg-cyber-green/5'
                )}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation - Compact Single Line */}
          <div className="sm:hidden flex items-center justify-center space-x-0.5 xs:space-x-1 flex-nowrap whitespace-nowrap overflow-x-visible max-w-full">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'px-1 xs:px-1.5 py-0.5 xs:py-1 text-[8px] xs:text-[9px] font-medium transition-all duration-300',
                  'relative group rounded-full whitespace-nowrap flex-shrink-0 min-w-0',
                  activeSection === item.href.substring(1)
                    ? 'text-cyber-green glow-text-subtle bg-cyber-green/5'
                    : 'text-white hover:text-cyber-green hover:bg-cyber-green/5'
                )}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 md:hidden bg-cyber-dark/95 backdrop-blur-md rounded-2xl border border-cyber-green/10"
        >
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  'block w-full text-center px-3 py-2 text-sm font-medium transition-all duration-300 rounded-full',
                  activeSection === item.href.substring(1)
                    ? 'text-cyber-green glow-text-subtle bg-cyber-green/10'
                    : 'text-white hover:text-cyber-green hover:bg-cyber-green/5'
                )}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
    </div>
  )
}