import { motion } from 'framer-motion'

export default function EnhancedLightBeam() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central glow - very subtle */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-96 h-96 bg-gradient-radial from-neutral-300/20 via-neutral-200/10 to-transparent blur-3xl" />
      </motion.div>

      {/* Single rotating beam - amber accent only */}
      <motion.div
        className="absolute top-0 left-1/2 origin-top"
        style={{
          width: '2px',
          height: '60vh',
          background: `linear-gradient(to bottom, 
            rgba(251, 191, 36, 0.15), 
            transparent)`,
          filter: 'blur(8px)',
        }}
        initial={{ rotate: 0 }}
        animate={{ 
          rotate: [0, 360],
          opacity: [0.4, 0.2, 0.4]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Minimal floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-neutral-400/20"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
