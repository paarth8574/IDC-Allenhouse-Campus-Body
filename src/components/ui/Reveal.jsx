import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export default function Reveal({ children, delay = 0 }) {

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 }) 
  // ❌ DO NOT use once: true

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 60 }  // 👈 THIS makes it re-reveal
      }
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay
      }}
    >
      {children}
    </motion.div>
  )
}