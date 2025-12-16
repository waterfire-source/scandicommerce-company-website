'use client'

import React, { useEffect, useRef, useState } from 'react'

interface LiquidBlobProps {
  className?: string
}

export default function LiquidBlob({ className = '' }: LiquidBlobProps) {
  const blobRef = useRef<SVGSVGElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [blobCenter, setBlobCenter] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updateBlobCenter = () => {
      if (blobRef.current) {
        const rect = blobRef.current.getBoundingClientRect()
        setBlobCenter({
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
        })
      }
    }

    updateBlobCenter()
    window.addEventListener('resize', updateBlobCenter)
    window.addEventListener('scroll', updateBlobCenter)

    return () => {
      window.removeEventListener('resize', updateBlobCenter)
      window.removeEventListener('scroll', updateBlobCenter)
    }
  }, [])

  useEffect(() => {
    let animationFrameId: number
    let currentX = 0
    let currentY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - blobCenter.x
      const dy = e.clientY - blobCenter.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const maxDistance = 400

      if (distance < maxDistance) {
        setIsHovering(true)
        const strength = 1 - distance / maxDistance
        targetX = dx * strength * 0.15
        targetY = dy * strength * 0.15
      } else {
        setIsHovering(false)
        targetX = 0
        targetY = 0
      }
    }

    const animate = () => {
      const easing = 0.08
      currentX += (targetX - currentX) * easing
      currentY += (targetY - currentY) * easing

      setMousePosition({ x: currentX, y: currentY })
      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [blobCenter])

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg
        ref={blobRef}
        viewBox="0 0 1000 800"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) rotate(25deg)`,
          transition: isHovering ? 'none' : 'transform 0.5s ease-out',
        }}
      >
        <defs>
          <filter id="liquid-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
              seed="1"
              result="noise"
            >
              <animate
                attributeName="baseFrequency"
                values="0.01;0.015;0.01"
                dur="12s"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="15"
              xChannelSelector="R"
              yChannelSelector="G"
            >
              <animate
                attributeName="scale"
                values="12;20;12"
                dur="10s"
                repeatCount="indefinite"
              />
            </feDisplacementMap>
          </filter>

          {/* Glow effect */}
          <filter id="glow-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Gradient for the blob */}
          <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1DEFFA" stopOpacity="1" />
            <stop offset="50%" stopColor="#00D4E0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1DEFFA" stopOpacity="0.9" />
          </linearGradient>

          {/* Secondary gradient for layered effect */}
          <radialGradient id="blob-gradient-2" cx="30%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#40F8FF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00B8C4" stopOpacity="0.7" />
          </radialGradient>
        </defs>

        {/* Main ellipse blob with morphing animation */}
        <g filter="url(#liquid-filter)">
          {/* Primary ellipse shape - wide horizontal ellipse */}
          <ellipse
            fill="url(#blob-gradient)"
            opacity="0.95"
          >
            <animate
              attributeName="cx"
              values="550;570;530;550"
              dur="14s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
            <animate
              attributeName="cy"
              values="400;380;420;400"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
            <animate
              attributeName="rx"
              values="480;500;460;480"
              dur="16s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
            <animate
              attributeName="ry"
              values="340;360;320;340"
              dur="13s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </ellipse>

          {/* Secondary ellipse layer for depth */}
          <ellipse
            fill="url(#blob-gradient-2)"
            opacity="0.75"
          >
            <animate
              attributeName="cx"
              values="520;540;500;520"
              dur="12s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
            <animate
              attributeName="cy"
              values="420;400;440;420"
              dur="14s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
            <animate
              attributeName="rx"
              values="420;440;400;420"
              dur="15s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
            <animate
              attributeName="ry"
              values="280;300;260;280"
              dur="11s"
              repeatCount="indefinite"
              calcMode="spline"
              keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
            />
          </ellipse>
        </g>

        {/* Inner highlight */}
        <ellipse
          cx="450"
          cy="350"
          fill="white"
          opacity="0.1"
          filter="url(#glow-filter)"
        >
          <animate
            attributeName="rx"
            values="200;220;200"
            dur="10s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="ry"
            values="120;140;120"
            dur="10s"
            repeatCount="indefinite"
          />
        </ellipse>
      </svg>
    </div>
  )
}
