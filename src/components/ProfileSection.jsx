import { useEffect, useRef, useState } from 'react'
import { ScrollContext } from '../ScrollContext.js'
import Aboutme from './Aboutme.jsx'
import Interview from './Interview.jsx'
import Skills from './Skills.jsx'
import Portfolio from './Portfolio.jsx'
import Modals from './Modals.jsx'

export default function ProfileSection() {
  const scrollRef = useRef(null)
  const [title, setTitle] = useState('Profile')

  // 스크롤 위치에 따라 왼쪽 타이틀 변경 (Profile → Interview → Skills → Portfolio)
  useEffect(() => {
    const scrollContent = scrollRef.current
    if (!scrollContent) return

    const onScroll = () => {
      const interview = scrollContent.querySelector('.interview-container')
      const skills = scrollContent.querySelector('#high-skill')
      const portfolio = scrollContent.querySelector('.portfolio-section')
      if (!interview || !skills) return

      const scrollTop = scrollContent.scrollTop
      const base = scrollContent.getBoundingClientRect().top
      const topOf = (el) =>
        el ? el.getBoundingClientRect().top - base + scrollTop : Infinity

      const interviewTop = topOf(interview)
      const skillsTop = topOf(skills)
      const portfolioTop = topOf(portfolio)

      if (portfolio && scrollTop >= portfolioTop - 300) setTitle('Portfolio')
      else if (scrollTop >= skillsTop - 300) setTitle('Skills')
      else if (scrollTop >= interviewTop - 300) setTitle('Interview')
      else setTitle('Profile')
    }

    scrollContent.addEventListener('scroll', onScroll)
    return () => scrollContent.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="profile-section">
      <div className="profile-wrapper">
        <div className="profile-layout">
          {/* 왼쪽: 타이틀 + 프로필 정보 */}
          <div className="profile-left">
            <div className="profile-title-fixed">{title}</div>

            <div className="profile-info-container">
              <div className="profile-name-box">
                <div className="profile-name-ko">박정은</div>
                <div className="profile-name-en">Park Jung-Eun</div>
              </div>

              <div className="profile-info-list">
                <div className="profile-info-item">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 3H19V1H17V3H7V1H5V3H4C2.9 3 2 3.9 2 5V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V5C22 3.9 21.1 3 20 3ZM20 21H4V8H20V21Z" fill="white" />
                  </svg>
                  <span className="profile-info-text">1999.02.07</span>
                </div>
                <div className="profile-info-item">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white" />
                  </svg>
                  <span className="profile-info-text">010-8517-1179</span>
                </div>
                <div className="profile-info-item">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white" />
                  </svg>
                  <span className="profile-info-text">shahmaran0207@naver.com</span>
                </div>
                <div className="profile-info-item">
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="white" />
                  </svg>
                  <span className="profile-info-text">@shahmaran0207</span>
                </div>
              </div>

              <div className="profile-updated">updated, on 2026.07.18</div>
            </div>
          </div>

          {/* 오른쪽: 스크롤 콘텐츠 */}
          <div className="profile-right">
            <ScrollContext.Provider value={scrollRef}>
              <div className="profile-scroll-content" ref={scrollRef}>
                <Aboutme />
                <Interview />
                <Skills />
                <Portfolio />
                <Modals />
              </div>
            </ScrollContext.Provider>
          </div>
        </div>
      </div>
    </section>
  )
}
