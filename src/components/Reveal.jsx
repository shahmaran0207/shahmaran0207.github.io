import { useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ScrollContext } from '../ScrollContext.js'

// 스크롤 컨테이너 안에서 뷰포트에 들어올 때 떠오르며 등장
export default function Reveal({ children, y = 22, delay = 0, style }) {
  const rootRef = useContext(ScrollContext)
  const reduce = useReducedMotion()

  if (reduce) return <div style={style}>{children}</div>

  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ root: rootRef, once: true, amount: 'some' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
