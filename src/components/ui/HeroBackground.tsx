"use client"
import { useEffect, useRef } from "react"

const AmbientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId = 0

    // Resize canvas to full window size with higher pixel density for retina displays
    const resizeCanvas = () => {
      if (canvas) {
        const dpr = window.devicePixelRatio || 1
        canvas.width = window.innerWidth * dpr
        canvas.height = window.innerHeight * dpr
        canvas.style.width = `${window.innerWidth}px`
        canvas.style.height = `${window.innerHeight}px`
        ctx.scale(dpr, dpr)
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Configuration
    const nodeBaseSize = 3.5 // Increased size for better visibility
    const connectionDistance = 200 // Extended for more connections
    const nodeCount = Math.floor(
      (window.innerWidth * window.innerHeight) / 40000,
    ) // More nodes for richer visuals
    const transitionSpeed = 0.03
    const moveSpeed = 0.2 // Slower for more elegance

    // Color palette - enhanced visibility with darker blues
    const colors = {
      background: "#F8F9FA",
      nodeFill: "rgba(45, 70, 100, 0.85)", // Darker and more opaque
      nodeInner: "rgba(70, 100, 140, 0.9)", // Darker inner color
      nodeGlow: "rgba(45, 70, 100, 0.25)", // More visible glow
      lineStart: "rgba(45, 70, 100, 0.15)", // More visible lines
      lineEnd: "rgba(70, 100, 140, 0.2)", // More visible line ends
    }

    // Node class with enhanced visuals
    class Node {
      x: number
      y: number
      vx: number
      vy: number
      baseVx: number
      baseVy: number
      opacity: number
      targetOpacity: number
      size: number
      pulsePhase: number
      pulseSpeed: number
      glowSize: number

      constructor() {
        this.x = Math.random() * window.innerWidth
        this.y = Math.random() * window.innerHeight

        // Create more varied but gentle movement
        const angle = Math.random() * Math.PI * 2
        const speed = 0.05 + Math.random() * 0.15
        this.vx = Math.cos(angle) * speed
        this.vy = Math.sin(angle) * speed
        this.baseVx = this.vx
        this.baseVy = this.vy

        this.opacity = 0.3 + Math.random() * 0.3 // Higher base opacity
        this.targetOpacity = 0.4 + Math.random() * 0.4 // Higher target opacity
        this.size = nodeBaseSize * (0.7 + Math.random() * 0.9)
        this.pulsePhase = Math.random() * Math.PI * 2
        this.pulseSpeed = 0.005 + Math.random() * 0.01
        this.glowSize = this.size * (2.5 + Math.random()) // Larger glow
      }

      update() {
        // Pulsing effect
        this.pulsePhase += this.pulseSpeed
        if (this.pulsePhase > Math.PI * 2) this.pulsePhase -= Math.PI * 2

        // Apply velocity with slight damping for smoother movement
        this.x += this.vx
        this.y += this.vy

        // Bounds checking with smooth bounce
        if (this.x < 0 || this.x > window.innerWidth) {
          this.vx *= -1
          this.x = Math.max(0, Math.min(this.x, window.innerWidth))
          // Slightly randomize the bounce angle
          this.vx += (Math.random() - 0.5) * 0.05
        }
        if (this.y < 0 || this.y > window.innerHeight) {
          this.vy *= -1
          this.y = Math.max(0, Math.min(this.y, window.innerHeight))
          // Slightly randomize the bounce angle
          this.vy += (Math.random() - 0.5) * 0.05
        }

        // Occasionally change direction slightly for more natural movement
        if (Math.random() < 0.005) {
          this.vx += (Math.random() - 0.5) * 0.05
          this.vy += (Math.random() - 0.5) * 0.05

          // Limit speed to maintain elegance
          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
          if (speed > moveSpeed) {
            this.vx = (this.vx / speed) * moveSpeed
            this.vy = (this.vy / speed) * moveSpeed
          }
        }

        // Opacity transition
        this.opacity += (this.targetOpacity - this.opacity) * transitionSpeed

        // Occasionally change target opacity for subtle "breathing" effect
        if (Math.random() < 0.002) {
          this.targetOpacity = 0.4 + Math.random() * 0.4
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const pulseSize = this.size * (1 + 0.15 * Math.sin(this.pulsePhase))
        const pulseOpacity =
          this.opacity * (0.9 + 0.1 * Math.sin(this.pulsePhase))

        // Draw glow
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.glowSize,
        )
        gradient.addColorStop(0, colors.nodeGlow)
        gradient.addColorStop(1, "rgba(45, 70, 100, 0)")

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw outer circle
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize, 0, Math.PI * 2)
        ctx.fillStyle = colors.nodeFill.replace("0.85", pulseOpacity.toString())
        ctx.fill()

        // Draw inner circle for depth
        ctx.beginPath()
        ctx.arc(this.x, this.y, pulseSize * 0.6, 0, Math.PI * 2)
        ctx.fillStyle = colors.nodeInner
        ctx.fill()
      }
    }

    // Create nodes
    const nodes: Node[] = Array(nodeCount)
      .fill(null)
      .map(() => new Node())

    const draw = () => {
      // Clear canvas with solid background
      ctx.fillStyle = colors.background
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)

      // First draw connections between nodes
      ctx.lineWidth = 0.8 // Slightly thicker lines for better visibility

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            // Calculate opacity based on distance - more visible
            const opacity = 1 - distance / connectionDistance
            const lineWidth = 0.8 * opacity // Thicker lines for better visibility

            // Create gradient line
            const gradient = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y,
            )

            gradient.addColorStop(0, colors.lineStart)
            gradient.addColorStop(0.5, `rgba(60, 90, 120, ${opacity * 0.25})`) // More visible midpoint
            gradient.addColorStop(1, colors.lineEnd)

            ctx.strokeStyle = gradient
            ctx.lineWidth = lineWidth
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Then update and draw nodes
      nodes.forEach((node) => {
        node.update()
        node.draw(ctx)
      })

      // Schedule next frame
      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ opacity: 1 }}
      />
    </div>
  )
}

export default AmbientBackground
