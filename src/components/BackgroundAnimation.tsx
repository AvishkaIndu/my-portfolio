'use client'

import { useEffect, useRef } from 'react'

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix rain animation
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    const charArray = chars.split('')
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * canvas.height
    }

    const draw = () => {
      // Create fade effect
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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
        if (y > canvas.height && Math.random() > 0.975) {
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
        className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30"
      />
      
      {/* Cyber Grid Overlay */}
      <div className="fixed inset-0 matrix-bg pointer-events-none z-0 opacity-20" />
      
      {/* Gradient Overlays */}
      <div className="fixed inset-0 bg-gradient-to-br from-cyber-green/5 via-transparent to-cyber-blue/5 pointer-events-none z-0" />
      
      {/* Animated Glow Spots */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-cyber-blue/10 rounded-full blur-3xl animate-pulse pointer-events-none z-0" style={{ animationDelay: '1s' }} />
    </>
  )
}