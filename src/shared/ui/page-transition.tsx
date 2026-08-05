import type { ReactNode } from 'react'
import { motion } from 'motion/react'

interface PageTransitionProps {
  children: ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  )
}
