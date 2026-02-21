import { motion } from 'framer-motion'

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto mb-16 h-64">
      {/* Lighthouse illustration */}
      <motion.div
        className="absolute left-1/2 bottom-0 -translate-x-1/2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Lighthouse base */}
        <div className="relative">
          {/* Light beam (pulsing) */}
          <motion.div
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 bg-gradient-conic from-amber-400/40 via-transparent to-transparent blur-2xl" 
                 style={{ transform: 'rotate(45deg)' }} />
          </motion.div>

          {/* Lighthouse structure */}
          <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Base */}
            <rect x="25" y="100" width="30" height="20" fill="url(#base-gradient)" />
            
            {/* Tower */}
            <path d="M28 30 L52 30 L50 100 L30 100 Z" fill="url(#tower-gradient)" />
            
            {/* Light house (top) */}
            <rect x="24" y="20" width="32" height="15" rx="2" fill="url(#top-gradient)" />
            
            {/* Light (glowing) */}
            <motion.circle
              cx="40"
              cy="27"
              r="8"
              fill="url(#light-gradient)"
              animate={{
                opacity: [0.8, 1, 0.8],
                scale: [0.9, 1.1, 0.9],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Stripes */}
            <rect x="30" y="50" width="20" height="8" fill="rgba(255,255,255,0.3)" />
            <rect x="30" y="70" width="20" height="8" fill="rgba(255,255,255,0.3)" />
            
            <defs>
              <linearGradient id="base-gradient" x1="40" y1="100" x2="40" y2="120">
                <stop offset="0%" stopColor="#78716C" />
                <stop offset="100%" stopColor="#57534E" />
              </linearGradient>
              <linearGradient id="tower-gradient" x1="40" y1="30" x2="40" y2="100">
                <stop offset="0%" stopColor="#F59E0B" />
                <stop offset="50%" stopColor="#F97316" />
                <stop offset="100%" stopColor="#FB923C" />
              </linearGradient>
              <linearGradient id="top-gradient" x1="40" y1="20" x2="40" y2="35">
                <stop offset="0%" stopColor="#DC2626" />
                <stop offset="100%" stopColor="#B91C1C" />
              </linearGradient>
              <radialGradient id="light-gradient">
                <stop offset="0%" stopColor="#FDE68A" />
                <stop offset="50%" stopColor="#FCD34D" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </motion.div>

      {/* Waves */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.div
          animate={{
            x: ['-10%', '10%', '-10%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 400 60" className="w-full">
            <path
              d="M0,30 Q100,10 200,30 T400,30 L400,60 L0,60 Z"
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </div>
  )
}
