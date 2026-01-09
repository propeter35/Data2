"use client"

import { useEffect, useRef } from "react"

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  connections: number
  hue: number
}

interface Pulse {
  x: number
  y: number
  radius: number
  maxRadius: number
  alpha: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  maxLife: number
  hue: number
}

export function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const updateSize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)
    }
    updateSize()
    window.addEventListener("resize", updateSize)

    let animationId: number

    const pulses: Pulse[] = []
    const particles: Particle[] = []

    // Create network nodes
    const nodes: Node[] = []
    const nodeCount = 120

    // Initialize nodes across the screen
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2 + Math.random() * 3,
        connections: 0,
        hue: 200 + Math.random() * 60,
      })
    }

    const maxDistance = 180
    const maxConnections = 5


    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i]
        pulse.radius += 4
        pulse.alpha -= 0.015

        if (pulse.alpha <= 0) {
          pulses.splice(i, 1)
          continue
        }

        // Draw pulse rings
        ctx.beginPath()
        ctx.arc(pulse.x, pulse.y, pulse.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(100, 200, 255, ${pulse.alpha * 0.6})`
        ctx.lineWidth = 3
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(pulse.x, pulse.y, pulse.radius - 10, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(150, 220, 255, ${pulse.alpha * 0.4})`
        ctx.lineWidth = 2
        ctx.stroke()
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        particle.x += particle.vx
        particle.y += particle.vy
        particle.vx *= 0.98
        particle.vy *= 0.98
        particle.life -= 0.02

        if (particle.life <= 0) {
          particles.splice(i, 1)
          continue
        }

        const size = 2 + (particle.life / particle.maxLife) * 3
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${particle.hue}, 80%, 70%, ${particle.life})`
        ctx.fill()

        // Glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, size + 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(particle.x, particle.y, 0, particle.x, particle.y, size + 2)
        gradient.addColorStop(0, `hsla(${particle.hue}, 90%, 80%, ${particle.life * 0.4})`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 90%, 80%, 0)`)
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Update node positions
      nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges with smooth transition
        if (node.x < 0 || node.x > window.innerWidth) {
          node.vx *= -1
          node.x = Math.max(0, Math.min(window.innerWidth, node.x))
        }
        if (node.y < 0 || node.y > window.innerHeight) {
          node.vy *= -1
          node.y = Math.max(0, Math.min(window.innerHeight, node.y))
        }

        // Reset connection count
        node.connections = 0
      })

      // Draw connections between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].connections >= maxConnections) continue

        for (let j = i + 1; j < nodes.length; j++) {
          if (nodes[j].connections >= maxConnections) continue

          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / maxDistance) * 0.5

            // Create gradient for connection
            const gradient = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y)
            gradient.addColorStop(0, `hsla(${nodes[i].hue}, 80%, 60%, ${opacity})`)
            gradient.addColorStop(1, `hsla(${nodes[j].hue}, 80%, 60%, ${opacity})`)

            // Draw connection line
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 0.5 + (1 - distance / maxDistance) * 1.5
            ctx.stroke()

            nodes[i].connections++
            nodes[j].connections++
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        // Glow effect for highly connected nodes
        if (node.connections > 2) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2)
          const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.radius + 4)
          glowGradient.addColorStop(0, `hsla(${node.hue}, 90%, 70%, 0.4)`)
          glowGradient.addColorStop(1, `hsla(${node.hue}, 90%, 70%, 0)`)
          ctx.fillStyle = glowGradient
          ctx.fill()
        }

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)

        // Node color based on connections
        const brightness = 50 + (node.connections / maxConnections) * 30
        ctx.fillStyle = `hsl(${node.hue}, 80%, ${brightness}%)`
        ctx.fill()

        // Highlight core of highly connected nodes
        if (node.connections > 3) {
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius * 0.5, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, 0.6)`
          ctx.fill()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", updateSize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0"
      style={{ zIndex: 0, background: "transparent" }}
      //
    />
  )
}
