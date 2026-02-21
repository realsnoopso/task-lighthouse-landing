import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SpotlightCard({ children, className = '' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <motion.div
          className="absolute pointer-events-none"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(251, 146, 60, 0.15) 0%, transparent 70%)',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
      
      {/* Card content */}
      {children}
    </motion.div>
  )
}
