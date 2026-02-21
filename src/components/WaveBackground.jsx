import { motion } from 'framer-motion'

export default function WaveBackground() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-64 overflow-hidden pointer-events-none opacity-20">
      {/* Wave 1 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background: 'linear-gradient(180deg, transparent, rgba(251, 146, 60, 0.3))',
        }}
        animate={{
          x: ['-100%', '0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-[200%] h-full"
        >
          <path
            d="M0,50 Q300,100 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="rgba(251, 146, 60, 0.2)"
          />
        </svg>
      </motion.div>
      
      {/* Wave 2 */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-[200%] h-full"
        >
          <path
            d="M0,70 Q300,20 600,70 T1200,70 L1200,120 L0,120 Z"
            fill="rgba(251, 191, 36, 0.15)"
          />
        </svg>
      </motion.div>
    </div>
  )
}
