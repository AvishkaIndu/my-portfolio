import dynamic from 'next/dynamic'

// Import components dynamically for better performance
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'))
const BackgroundAnimation = dynamic(() => import('@/components/BackgroundAnimation'))
const Navbar = dynamic(() => import('@/components/Navbar'))
const Hero = dynamic(() => import('@/components/Hero'))
const About = dynamic(() => import('@/components/About'))
const Skills = dynamic(() => import('@/components/Skills'))
const Projects = dynamic(() => import('@/components/Projects'))
const Contact = dynamic(() => import('@/components/Contact'))
const Footer = dynamic(() => import('@/components/Footer'))

export default function Home() {
  return (
    <main className="relative min-h-screen bg-cyber-dark text-white">
      {/* Loading Screen */}
      <LoadingScreen />
      
      {/* Background Animation */}
      <BackgroundAnimation />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  )
}
