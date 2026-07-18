import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export default function Hero() {
  const [showContent, setShowContent] = useState(false)
  const [shifted, setShifted] = useState(false)
  const [breakMobile, setBreakMobile] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const t1 = setTimeout(() => setShifted(true), 600)
    const t2 = setTimeout(() => setShowContent(true), 1600)
    const onResize = () => setBreakMobile(window.innerWidth <= 1080)
    onResize()
    window.addEventListener('resize', onResize)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] },
        }

  return (
    <div className="container">
      <div id="developer-container" style={{ transform: shifted ? 'translateY(20%)' : 'translateY(0)' }}>
        <div id="developer">Developer</div>
      </div>

      <div id="back-end-container" style={{ transform: shifted ? 'translateY(-20%)' : 'translateY(0)' }}>
        <div id="back-end">Back-End</div>
      </div>

      <div id="new-content" style={{ display: showContent ? 'flex' : 'none' }}>
        {showContent && (
          <>
            <motion.div className="first-title" {...rise(0.05)}>
              <div id="devloper-text">백엔드 개발자</div>
              <div id="jungeun">박정은</div>
            </motion.div>
            <motion.div className="second-title" {...rise(0.22)}>
              <div className="third-title">
                <div id="various">다양한</div>
                <div className="starter-content2">데이터 분석</div>
                <div className="starter-content">경험과</div>
              </div>
              <div className="fourth-title">
                <div className="starter-content2">백엔드 개발</div>
                <div className="starter-content break">
                  경험을 지닌,{breakMobile && <br />}
                </div>
                <div className="starter-content">개발자</div>
                <div className="starter-content2">박정은</div>
                <div className="starter-content">입니다.</div>
              </div>
            </motion.div>
          </>
        )}
      </div>

      <div className="updated">updated, on 2026.07.18</div>

      <div className="scroll-container">
        <a href="#profile-section" aria-label="아래로 스크롤">
          <span></span>
        </a>
      </div>
    </div>
  )
}
