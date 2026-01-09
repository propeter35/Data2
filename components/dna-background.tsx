"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  color: string
}

export function DNABackground() {
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
    let time = 0

    const particles: Particle[] = []
    const backboneParticles1: Particle[] = []
    const backboneParticles2: Particle[] = []

    const width = window.innerWidth
    const height = window.innerHeight
    const segmentCount = 300

    for (let i = 0; i < segmentCount; i++) {
      const progress = i / segmentCount

      const baseX = -width * 0.1 + progress * width * 1.2
      const baseY = height * 0.9 - progress * height * 0.8

      const helixAngle = progress * Math.PI * 3.5 // Reduced rotation count from 4.5 to 3.5 for gentler spiraling
      const helixRadius = 120

      const gentleCurveX = Math.sin(progress * Math.PI * 0.6) * 30 // Further reduced curve amplitude for smoother flow
      const gentleCurveY = Math.cos(progress * Math.PI * 0.6) * 20

      const curveX = baseX + gentleCurveX
      const curveY = baseY + gentleCurveY

      const offsetX = Math.cos(helixAngle) * helixRadius
      const offsetY = Math.sin(helixAngle) * helixRadius * 0.5

      const x1 = curveX + offsetX
      const y1 = curveY + offsetY

      const x2 = curveX - offsetX
      const y2 = curveY - offsetY

      backboneParticles1.push({
        x: x1,
        y: y1,
        vx: 0,
        vy: 0,
        radius: 5,
        opacity: 1,
        color: `hsl(${220 + progress * 40}, 80%, 60%)`,
      })

      backboneParticles2.push({
        x: x2,
        y: y2,
        vx: 0,
        vy: 0,
        radius: 5,
        opacity: 1,
        color: `hsl(${200 + progress * 60}, 70%, 55%)`,
      })

      const branchCount = 1 + Math.floor(Math.random() * 2)

      for (let j = 0; j < branchCount; j++) {
        const angle = (j / branchCount) * Math.PI * 2 + Math.random() * 0.5
        const distance = 20 + Math.random() * 40
        const branchX = x1 + Math.cos(angle) * distance
        const branchY = y1 + Math.sin(angle) * distance * 0.6

        particles.push({
          x: branchX,
          y: branchY,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          radius: 2 + Math.random() * 1.5,
          opacity: 0.4 + Math.random() * 0.3,
          color: `rgba(59, 130, 246, ${0.4 + Math.random() * 0.2})`,
        })
      }

      for (let j = 0; j < branchCount; j++) {
        const angle = (j / branchCount) * Math.PI * 2 + Math.random() * 0.5
        const distance = 20 + Math.random() * 40
        const branchX = x2 + Math.cos(angle) * distance
        const branchY = y2 + Math.sin(angle) * distance * 0.6

        particles.push({
          x: branchX,
          y: branchY,
          vx: (Math.random() - 0.5) * 0.1,
          vy: (Math.random() - 0.5) * 0.1,
          radius: 2 + Math.random() * 1.5,
          opacity: 0.4 + Math.random() * 0.3,
          color: `rgba(99, 102, 241, ${0.4 + Math.random() * 0.2})`,
        })
      }
    }

    const allParticles = [...backboneParticles1, ...backboneParticles2, ...particles]

    const animate = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      time += 0.003

      // Update branch particle positions slightly
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy
      })

      for (let i = 0; i < backboneParticles1.length; i++) {
        if (i % 5 === 0) {
          const p1 = backboneParticles1[i]
          const p2 = backboneParticles2[i]

          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(p2.x, p2.y)
          ctx.strokeStyle = `rgba(59, 130, 246, 0.4)`
          ctx.lineWidth = 2
          ctx.stroke()
        }
      }

      for (let i = 0; i < allParticles.length; i += 8) {
        for (let j = i + 1; j < Math.min(i + 15, allParticles.length); j++) {
          const dx = allParticles[i].x - allParticles[j].x
          const dy = allParticles[i].y - allParticles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 40) {
            const opacity = ((40 - distance) / 40) * 0.08
            ctx.beginPath()
            ctx.moveTo(allParticles[i].x, allParticles[i].y)
            ctx.lineTo(allParticles[j].x, allParticles[j].y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw smooth backbone strand 1 with gradient
      ctx.beginPath()
      backboneParticles1.forEach((p, i) => {
        if (i === 0) {
          ctx.moveTo(p.x, p.y)
        } else {
          const prev = backboneParticles1[i - 1]
          const midX = (prev.x + p.x) / 2
          const midY = (prev.y + p.y) / 2
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY)
        }
      })

      const gradient1 = ctx.createLinearGradient(0, height, width, 0)
      gradient1.addColorStop(0, "rgba(59, 130, 246, 0.8)")
      gradient1.addColorStop(0.3, "rgba(99, 102, 241, 0.9)")
      gradient1.addColorStop(0.7, "rgba(139, 92, 246, 0.8)")
      gradient1.addColorStop(1, "rgba(168, 85, 247, 0.7)")

      ctx.strokeStyle = gradient1
      ctx.lineWidth = 10
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.shadowColor = "rgba(59, 130, 246, 0.6)"
      ctx.shadowBlur = 20
      ctx.stroke()
      ctx.shadowBlur = 0

      // Draw smooth backbone strand 2 with gradient
      ctx.beginPath()
      backboneParticles2.forEach((p, i) => {
        if (i === 0) {
          ctx.moveTo(p.x, p.y)
        } else {
          const prev = backboneParticles2[i - 1]
          const midX = (prev.x + p.x) / 2
          const midY = (prev.y + p.y) / 2
          ctx.quadraticCurveTo(prev.x, prev.y, midX, midY)
        }
      })

      const gradient2 = ctx.createLinearGradient(0, height, width, 0)
      gradient2.addColorStop(0, "rgba(34, 197, 94, 0.7)")
      gradient2.addColorStop(0.4, "rgba(59, 130, 246, 0.9)")
      gradient2.addColorStop(0.8, "rgba(168, 85, 247, 0.8)")
      gradient2.addColorStop(1, "rgba(234, 179, 8, 0.7)")

      ctx.strokeStyle = gradient2
      ctx.lineWidth = 10
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.shadowColor = "rgba(99, 102, 241, 0.6)"
      ctx.shadowBlur = 20
      ctx.stroke()
      ctx.shadowBlur = 0

      // Draw all particles
      allParticles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
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
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0, background: "transparent" }}
    />
  )
}
