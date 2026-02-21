import { motion } from 'framer-motion'

export default function LightBeam() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating light beam from lighthouse */}
      <motion.div
        className="absolute top-0 left-1/2 w-[800px] h-[800px] -translate-x-1/2"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-amber-400/30 via-orange-300/20 to-transparent transform -translate-x-1/2" />
        <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-rose-400/30 via-pink-300/20 to-transparent transform -translate-x-1/2 rotate-120" />
      </motion.div>
      
      {/* Ambient glow */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gradient-radial from-amber-200/20 via-orange-100/10 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
