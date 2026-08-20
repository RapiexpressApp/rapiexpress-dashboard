import { motion } from 'motion/react'
import type { PageTransitionProps } from '~/shared/ui/page-transition/types/page-transition-types'

const MotionDiv = motion.div

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <MotionDiv
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
    </MotionDiv>
  )
}
