import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function GenerativeBackground() {
  const canvasRef = useRef(null)
  const p5Instance = useRef(null)

  useEffect(() => {
    const sketch = (p) => {
      let particles = []
      let waves = []
      let rotatingBeam = 0

      class Particle {
        constructor() {
          this.reset()
        }

        reset() {
          this.x = p.random(p.width)
          this.y = p.random(p.height)
          this.size = p.random(1, 3)
          this.speedX = p.random(-0.5, 0.5)
          this.speedY = p.random(-0.3, 0.3)
          this.opacity = p.random(30, 100)
        }

        update() {
          this.x += this.speedX
          this.y += this.speedY

          // Wrap around edges
          if (this.x < 0) this.x = p.width
          if (this.x > p.width) this.x = 0
          if (this.y < 0) this.y = p.height
          if (this.y > p.height) this.y = 0

          // Gentle mouse interaction
          let d = p.dist(this.x, this.y, p.mouseX, p.mouseY)
          if (d < 100) {
            let angle = p.atan2(this.y - p.mouseY, this.x - p.mouseX)
            this.x += p.cos(angle) * 0.5
            this.y += p.sin(angle) * 0.5
          }
        }

        display() {
          p.noStroke()
          p.fill(251, 191, 36, this.opacity) // amber
          p.circle(this.x, this.y, this.size)
        }
      }

      class Wave {
        constructor(yOffset, amplitude, frequency, speed, color) {
          this.yOffset = yOffset
          this.amplitude = amplitude
          this.frequency = frequency
          this.speed = speed
          this.color = color
          this.phase = p.random(p.TWO_PI)
        }

        update() {
          this.phase += this.speed
        }

        display() {
          p.noFill()
          p.stroke(this.color)
          p.strokeWeight(1.5)
          p.beginShape()
          for (let x = 0; x <= p.width; x += 10) {
            let y = this.yOffset + 
                    p.sin((x * this.frequency) + this.phase) * this.amplitude
            p.vertex(x, y)
          }
          p.endShape()
        }
      }

      p.setup = () => {
        const canvas = p.createCanvas(p.windowWidth, p.windowHeight)
        canvas.parent(canvasRef.current)
        
        // Create particles
        for (let i = 0; i < 80; i++) {
          particles.push(new Particle())
        }

        // Create waves at bottom
        waves.push(new Wave(p.height - 100, 15, 0.01, 0.02, p.color(251, 191, 36, 40)))
        waves.push(new Wave(p.height - 80, 20, 0.008, 0.015, p.color(249, 115, 22, 30)))
        waves.push(new Wave(p.height - 60, 25, 0.012, 0.025, p.color(251, 146, 60, 20)))
      }

      p.draw = () => {
        p.clear()

        // Update and display particles
        particles.forEach(particle => {
          particle.update()
          particle.display()
        })

        // Rotating lighthouse beam from top center
        p.push()
        p.translate(p.width / 2, 60)
        rotatingBeam += 0.01
        
        // Draw sweeping beam
        for (let i = 0; i < 3; i++) {
          let angle = rotatingBeam + (i * p.TWO_PI / 3)
          let beamLength = p.height * 0.4
          
          p.stroke(251, 191, 36, 15 - (i * 5))
          p.strokeWeight(40 - (i * 10))
          p.line(0, 0, 
                 p.cos(angle) * beamLength, 
                 p.sin(angle) * beamLength)
        }
        p.pop()

        // Update and display waves
        waves.forEach(wave => {
          wave.update()
          wave.display()
        })
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight)
      }

      p.mousePressed = () => {
        // Add burst of particles on click
        for (let i = 0; i < 10; i++) {
          let particle = new Particle()
          particle.x = p.mouseX
          particle.y = p.mouseY
          particle.speedX = p.random(-2, 2)
          particle.speedY = p.random(-2, 2)
          particles.push(particle)
        }
        
        // Remove extra particles to maintain performance
        if (particles.length > 150) {
          particles.splice(0, 10)
        }
      }
    }

    if (canvasRef.current) {
      p5Instance.current = new p5(sketch)
    }

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove()
      }
    }
  }, [])

  return (
    <div 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 0 }}
    />
  )
}
