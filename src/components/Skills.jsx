import { useEffect, useState } from 'react'
import { asset } from '../asset.js'
import Reveal from './Reveal.jsx'

const SECTIONS = [
  {
    title: 'Front-End',
    labelClass: 'AboutMe-title',
    gap: 24,
    items: [
      { name: 'HTML', img: 'assets/img/aboutme/HTML.svg' },
      { name: 'CSS', img: 'assets/img/aboutme/CSS.svg' },
      { name: 'JavaScript', img: 'assets/img/aboutme/Java%20Script.svg' },
      { name: 'React', img: 'assets/img/aboutme/React.svg' },
      { name: 'Thymeleaf', img: 'assets/img/Skills/Front-End/thymeleaf.png' },
    ],
  },
  {
    title: 'Back-End',
    labelClass: 'AboutMe-title',
    gap: 40,
    items: [
      { name: 'Python', img: 'assets/img/aboutme/Python.svg' },
      { name: 'JAVA', img: 'assets/img/aboutme/JAVA.svg' },
      { name: 'Spring', img: 'assets/img/aboutme/Spring.svg' },
      { name: 'SpringBoot', img: 'assets/img/aboutme/Spring.svg' },
      { name: 'JSP', img: 'assets/img/Skills/Back-End/jsp.png' },
    ],
  },
  {
    title: 'Development',
    labelClass: 'AboutMe-title devlopere',
    labelInline: true,
    gap: 40,
    items: [
      { name: 'DOCKER', img: 'assets/img/aboutme/Docker.svg' },
      { name: 'AWS', img: 'assets/img/aboutme/AWS.svg' },
      { name: 'Intellij IDEA', img: 'assets/img/aboutme/IngelliJ%20IDEA.svg' },
      { name: 'Eclipse', img: 'assets/img/aboutme/Eclipse.svg' },
      { name: 'SQLDeveloper', img: 'assets/img/aboutme/DataBase.svg', white: true },
      { name: 'Unity', img: 'assets/img/aboutme/Unity.svg' },
      { name: 'KIRO', img: 'assets/img/Skills/Development/kiro.jpg' },
    ],
  },
  {
    title: 'Version-Control',
    labelClass: 'AboutMe-title gittext',
    gap: 40,
    items: [
      { name: 'GIT', img: 'assets/img/aboutme/Git.svg' },
      { name: 'GITHUB', img: 'assets/img/aboutme/Github.svg', white: true },
    ],
  },
]

// .github/workflows/snake.yml이 24시간마다 생성해 output 브랜치에 올리는 SVG.
// 사이트 배경이 어두우므로 github-dark 팔레트 버전을 쓴다.
const SNAKE_SVG =
  'https://raw.githubusercontent.com/shahmaran0207/shahmaran0207.github.io/output/github-contribution-grid-snake-dark.svg'

const GITHUB_URL = 'https://github.com/shahmaran0207'

function SkillGrid({ items }) {
  return (
    <div className="upper-skill-main">
      {items.map((it) => (
        <div className="skill-main" key={it.name}>
          <div className="skill-title">
            <div className="skill-icon">
              <img
                src={asset(it.img)}
                alt={it.name}
                className={it.white ? 'svg-icon white-icon skill-image' : 'skill-image'}
              />
            </div>
            <div className="skill-text">{it.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <>
      {SECTIONS.map((sec, idx) => {
        const Label = sec.labelInline ? (
          // 마커 클래스만 추가 (인라인 스타일은 그대로) — 1025px 이상 렌더링은 불변이고,
          // ≤1024px에서 이 래퍼만 정확히 집어 정렬을 되돌리기 위한 훅
          <div
            className="skill-label-inline"
            style={{
              width: 256,
              height: 68,
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: 8,
              display: 'flex',
            }}
          >
            <div className={sec.labelClass}>{sec.title}</div>
          </div>
        ) : (
          <div className="skill-container">
            <div className={sec.labelClass}>{sec.title}</div>
          </div>
        )

        const content = (
          <div
            style={{
              flex: '1 1 0',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              gap: sec.gap,
              display: 'block',
            }}
          >
            <SkillGrid items={sec.items} />
          </div>
        )

        return idx === 0 ? (
          <div id="high-skill" key={sec.title}>
            {Label}
            {content}
          </div>
        ) : (
          <Reveal key={sec.title}>
            <div className="upper-skill-container">
              {Label}
              {content}
            </div>
          </Reveal>
        )
      })}

      <GithubSnake />
    </>
  )
}

// output 브랜치가 아직 없거나(워크플로우 첫 실행 전) raw.githubusercontent가
// 응답하지 않을 수 있다. 미리 받아보고 성공했을 때만 섹션을 렌더한다.
// (img에 onError만 달면 lazy 로딩 탓에 뷰포트 진입 전까지 실패를 알 수 없어
//  'GitHub' 헤더만 있는 빈 블록이 잠깐 노출된다)
function GithubSnake() {
  const [ok, setOk] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setOk(true)
    img.src = SNAKE_SVG
    return () => {
      img.onload = null
    }
  }, [])

  if (!ok) return null

  return (
    <Reveal>
      <div className="upper-skill-container">
        <div className="skill-container">
          <div className="AboutMe-title">GitHub</div>
        </div>
        <div className="github-snake">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener">
            <img src={SNAKE_SVG} alt="shahmaran0207의 GitHub 잔디를 먹으며 지나가는 뱀 애니메이션" />
          </a>
        </div>
      </div>
    </Reveal>
  )
}
