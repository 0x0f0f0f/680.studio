// CanvasBackground.js

import { cn } from '@/lib/utils'
import React from 'react'

class Wave {
  canvas
  ctx
  maxAmplitude: number
  amplitude: number
  length: number
  frequency: number
  increment: number
  bgOpacity: number
  lineLength: number
  y: number

  constructor(
    canv: HTMLCanvasElement,
    maxAmplitude = 100,
    length = 100,
    frequency = 8,
    bgOpacity = 0.03,
    lineLength = 32,
    y: number,
  ) {
    this.canvas = canv
    this.ctx = this.canvas.getContext('2d')
    this.maxAmplitude = maxAmplitude
    this.amplitude = 0
    this.length = length
    this.frequency = frequency
    this.increment = Math.random() * 360
    this.bgOpacity = bgOpacity
    this.lineLength = lineLength
    this.y = y || this.canvas.height / 2

    requestAnimationFrame(this.draw.bind(this))
  }

  draw(t: number) {
    const c = this.ctx
    if (!c) return null
    c.beginPath()

    c.fillStyle = `rgba(255,255,255,${this.bgOpacity})`
    c.strokeStyle = `rgba(0,0,0,0.8)`

    c.fillRect(0, 0, this.canvas.width, this.canvas.height)

    c.moveTo(0, this.canvas.height / 2)

    for (
      let i = 0;
      i < this.canvas.width + this.lineLength;
      i += this.lineLength
    ) {
      c.lineTo(
        i,
        this.y + Math.sin(i / this.length + this.increment) * this.amplitude,
      )
    }

    c.stroke()
    c.closePath()

    this.amplitude = Math.sin(this.increment) * this.maxAmplitude
    this.increment -= this.frequency / 1000
  }

  animate(t: number) {
    this.draw(t)
    requestAnimationFrame(this.animate.bind(this))
  }
}

// gui.add(wave, 'maxAmplitude', 0, canvas.height / 2)
// gui.add(wave, 'length', 0, canvas.width)
// gui.add(wave, 'frequency', -50, 50)
// gui.add(wave, 'bgOpacity', 0, 1)
// gui.add(wave, 'y', 0, canvas.height)

// wave.animate()

const CanvasBackground = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      const resizeHandler = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }

      window.addEventListener('resize', resizeHandler)

      resizeHandler()

      const wave = new Wave(canvas, 150, 200, 680 / 128, 0.5, 40, 0)

      if (context) {
        context.clearRect(0, 0, canvas.width, canvas.height)
        wave.animate(0)
      }

      return () => {
        window.removeEventListener('resize', resizeHandler)
      }
    }
  }, [])

  return (
    <div className={cn('relative', className)}>
      <canvas
        ref={canvasRef}
        id="bg-canvas"
        className="absolute inset-0"
      ></canvas>
      <div className="relative z-20 flex items-center justify-center">
        {children}
      </div>
    </div>
  )
}

export default CanvasBackground
