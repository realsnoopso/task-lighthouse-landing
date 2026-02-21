import { motion } from 'framer-motion'

export default function EnhancedLightBeam() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Central glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-96 h-96 bg-gradient-radial from-amber-300/30 via-orange-200/20 to-transparent blur-3xl" />
      </motion.div>

      {/* Rotating beams */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute top-0 left-1/2 origin-top"
          style={{
            width: '2px',
            height: '60vh',
            background: `linear-gradient(to bottom, 
              rgba(251, 191, 36, ${0.3 - i * 0.1}), 
              transparent)`,
            filter: 'blur(8px)',
          }}
          initial={{ rotate: i * 120 }}
          animate={{ 
            rotate: [i * 120, i * 120 + 360],
            opacity: [0.6, 0.3, 0.6]
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Floating light particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-amber-400/40"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
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

      {/* Ambient gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/10 via-transparent to-rose-100/10" />
    </div>
  )
}
