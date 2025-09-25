'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Matrix rain animation variables
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const charArray = chars.split('')
    const fontSize = 14
    let columns = Math.floor(window.innerWidth / fontSize)
    const drops: number[] = []

    // Initialize drops function
    const initializeDrops = () => {
      columns = Math.floor(window.innerWidth / fontSize)
      drops.length = columns
      for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * window.innerHeight
      }
    }

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      
      ctx.scale(dpr, dpr)
      
      // Reinitialize drops when canvas resizes
      initializeDrops()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize drops for the first time
    initializeDrops()

    const draw = () => {
      // Create fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      ctx.fillStyle = '#00ff88'
      ctx.font = `${fontSize}px monospace`

      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        ctx.fillStyle = `rgba(0, 255, 136, ${Math.random() * 0.5 + 0.1})`
        ctx.fillText(char, x, y)

        // Reset drop randomly
        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <>
      {/* Matrix Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-0 opacity-30"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      />
      
      {/* Cyber Grid Overlay */}
      <div className="fixed top-0 left-0 w-screen h-screen matrix-bg pointer-events-none z-0 opacity-20" />
      
      {/* Gradient Overlays */}
      <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-br from-cyber-green/5 via-transparent to-cyber-blue/5 pointer-events-none z-0" />
      
      {/* Animated Glow Spots */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{ animationDelay: '1s' }} />
    </>
  )
}