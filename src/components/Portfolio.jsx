import { useState } from 'react'
import { asset } from '../asset.js'
import { openModal } from '../modalControl.js'
import Reveal from './Reveal.jsx'

const img = (f) => asset('assets/img/portfolio/' + f)

const FILTERS = [
  { label: 'ALL', value: 'all' },
  { label: 'Team', value: 'option1' },
  { label: 'Single', value: 'option2' },
  { label: 'Company', value: 'option3' },
]

const PROJECTS = [
  { cat: 'option3', img: 'ITS_DOS.png', title: 'ITS 상황판', desc: '다수의 교통 정보 레이어를 지도 기반으로 실시간 표출하고, 교통 등급 변화에 따라 화면을 즉시 갱신하는 ITS 상황판 및 제어 운영단말 플랫폼', tags: ['회사 프로젝트', 'GIS Web', 'Front-End', 'Back-End'], hover: ['다수의 교통 정보 레이어를 지도 기반으로 실시간 표출하고, 근무자들에게 필요한 내용들로 패널을 구성한 상황판 및 운영단말 플랫폼'], modal: 'modal21' },
  { cat: 'option3', img: 'PerformanceSafety.png', title: '공연안전', desc: '공연장에서 발생하는 안전 사고를 대비하기 위한 밀집도 및 실시간 돌발 상황을 체크할 수 있는 플랫폼', tags: ['회사 프로젝트', 'GIS Web', 'Front-End', 'Back-End'], hover: ['공연장의 돌발 상황을 대비하고', '시뮬레이션 및 보고서 작성이 가능한 사이트'], modal: 'modal20' },
  { cat: 'option2', img: 'MTA.png', title: 'MTA', desc: '다양한 물품을 경매 상품으로 등록 가능하고 경매에 자유롭게 입찰하여 물품을 낙찰 받을 수 있는 사이트', tags: ['개인 프로젝트', 'Web', 'Front-End', 'Back-End'], hover: ['다양한 물품을 경매 상품으로 등록 가능하고', '경매에 자유롭게 입찰하여 물품을 낙찰 받을 수 있는 사이트'], modal: 'modal19' },
  { cat: 'option2', img: 'wit.png', title: 'WIT', desc: '여행 일정을 구매/판매할 수 있고, 후기 등을 남길 수 있는 여행 사이트', tags: ['개인 프로젝트', 'Web', 'Front-End', 'Back-End'], hover: ['여행 일정을 구매/판매할 수 있고,', '후기 등을 남길 수 있는 여행 사이트'], modal: 'modal18' },
  { cat: 'option2', img: 'exchange.png', title: 'Exchange Rate Site', desc: '환율 계산 사이트', tags: ['개인 프로젝트', 'Front-End', 'Back-End'], hover: ['환율 계산 사이트'], modal: 'modal17', link: 'https://euphonious-smakager-838510.netlify.app/' },
  { cat: 'option2', img: 'chatting.png', title: 'Chatting Application', desc: '웹소켓을 통해 만든 채팅사이트', tags: ['개인 프로젝트', 'Front-End', 'Back-End'], hover: ['웹소켓을 통해 만든 채팅사이트'], modal: 'modal16' },
  { cat: 'option2', img: 'movie.png', title: 'Movie Infinite Scroll', desc: 'React로 만든 무한스크롤 사이트', tags: ['개인 프로젝트', 'Front-End', 'Back-End'], hover: ['React로 만든 무한스크롤 사이트'], modal: 'modal15', link: 'https://tranquil-pixie-a55e46.netlify.app/' },
  { cat: 'option2', img: 'memoapplication.png', title: 'Memo Application', desc: 'Vue.js로 만든 메모장', tags: ['개인 프로젝트', 'Front-End', 'Back-End'], hover: ['Vue.js로 만든 메모장'], modal: 'modal14' },
  { cat: 'option2', img: '자바슈팅.png', title: 'Space Shooting Game', desc: 'JavaScript로 만든 슈팅게임', tags: ['개인 프로젝트', 'Front-End', 'Web'], hover: ['JavaScript로 만든 슈팅게임'], modal: 'modal13', link: 'https://66f74a596d45dc1814fff657--lovely-daifuku-6afc1d.netlify.app/' },
  { cat: 'option2', img: 'todolist.png', title: 'Todo List', desc: 'React로 만든 메모 사이트', tags: ['개인 프로젝트', 'Front-End'], hover: ['React로 만든 메모 사이트'], modal: 'modal12', link: 'https://glowing-rolypoly-c489b7.netlify.app/' },
  { cat: 'option2', img: '리듬게임.png', title: 'Rhythm Game', desc: 'JAVA로 만든 리듬게임', tags: ['개인 프로젝트', 'Back-End'], hover: ['JAVA로 만든 리듬게임'], modal: 'modal11' },
  { cat: 'option2', img: '슈팅게임.png', title: 'Shooting Game', desc: 'Unity로 만든 슈팅게임', tags: ['개인 프로젝트', 'Web', 'Back-End'], hover: ['Unity로 만든 슈팅게임'], modal: 'modal10', link: 'https://66d92913afb80099941e3aba--comforting-sprite-660098.netlify.app/' },
  { cat: 'option2', img: '수박게임.png', title: 'Watermelon Game', desc: '간단히 즐길 수 있는 수박게임', tags: ['개인 프로젝트', 'Web', 'Back-End'], hover: ['간단히 즐길 수 있는 수박게임'], modal: 'modal9', link: 'https://neon-praline-dda96f.netlify.app' },
  { cat: 'option1', img: 'pet.jpg', title: 'Pet Hub', desc: '반려동물을 위한 다양한 상품을 판매하는 쇼핑몰', tags: ['팀 프로젝트', 'Web', 'Front-End', 'Back-End'], hover: ['반려동물을 위한 다양한 상품을', '판매하는 쇼핑몰'], modal: 'modal7' },
  { cat: 'option1', img: 'smart.jpg', title: 'SmartFarm', desc: '스마트팜 운영에 필요한 아두이노 판매 사이트', tags: ['팀 프로젝트', 'Web', 'Front-End', 'Back-End'], hover: ['스마트팜 운영에 필요한', '아두이노 판매 사이트'], modal: 'modal8' },
  { cat: 'option2', img: 'kg.jpg', title: 'E커머스 기반 SW 개발자 양성 과정', desc: 'KG ITBANK에서 6개월간 배운 내용', tags: ['Study'], hover: ['E커머스 기반 SW 개발자 양성 과정'], modal: 'modal6' },
  { cat: 'option1', img: 'final.png', title: ['Money For Travel', '- 여행경비 예측 사이트'], desc: 'Money For Travel - 여행경비 예측 사이트', tags: ['팀 프로젝트', 'Web', 'Front-End', 'Back-End'], hover: ['Money For Travel', '- 여행경비 예측 사이트'], modal: 'modal1' },
  { cat: 'option1', img: 'crime.jpg', title: '청소년 범죄율 분석 및 예측', desc: '과거 데이터를 통한 청소년 범죄율 예측', tags: ['팀 프로젝트', 'Data Analysis', 'Back-End'], hover: ['청소년 범죄율 분석 및 예측'], modal: 'modal5' },
  { cat: 'option1', img: 'credit.jpg', title: '지역별 신용카드 예측 프로젝트', desc: '과거 데이터를 통한 지역별 신용카드 소비 데이터 예측', tags: ['팀 프로젝트', 'Data Analysis', 'Back-End'], hover: ['지역별 신용카드 예측 프로젝트'], modal: 'modal3' },
  { cat: 'option1', img: 'png.jpg', title: '지역별 범죄율과 신고율의 상관관계', desc: '과거 데이터를 통한 범죄율과 신고율의 상관관계', tags: ['팀 프로젝트', 'Data Analysis', 'Back-End'], hover: ['지역별 범죄율과 신고율의 상관관계'], modal: 'modal2' },
  { cat: 'option2', img: 'four.png', title: '인생네컷', desc: '과거를 추억하기 위한 인생네컷', tags: ['싱글 프로젝트', 'Web', 'Front-End'], hover: ['인생네컷'], modal: 'modal4', link: 'https://shahmaran0207.github.io/four_photo/' },
]

function lines(arr) {
  return arr.map((l, i) => (
    <span key={i}>
      {l}
      {i < arr.length - 1 && <br />}
    </span>
  ))
}

export default function Portfolio() {
  const [filter, setFilter] = useState('all')
  const visible = PROJECTS.filter((p) => filter === 'all' || p.cat === filter)

  return (
    <Reveal>
    <div className="portfolio-section">
      <div className="selector-container">
        <div className="selector">
          {FILTERS.map((f) => (
            <div
              key={f.value}
              className={'option' + (filter === f.value ? ' selected' : '')}
              data-value={f.value}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </div>
          ))}
        </div>
      </div>

      <div className="portfolio-grid">
        {visible.map((p) => (
          <div className={'card portfolio-item ' + p.cat} key={p.modal}>
            <div className="card-image">
              <img className="port-img" src={img(p.img)} alt={Array.isArray(p.title) ? p.title.join(' ') : p.title} />
            </div>
            <div className="card-content">
              <div className="card-title">{Array.isArray(p.title) ? lines(p.title) : p.title}</div>
              <div className="card-description">{p.desc}</div>
              <div className="card-tags">
                {p.tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <div className="hover-content">
              <div className="hover-title" style={{ textAlign: 'center' }}>{lines(p.hover)}</div>
              <div className="hover-buttons">
                <button className="hover-button" onClick={() => openModal(p.modal)}>
                  자세히 보기
                </button>
                {p.link && (
                  <button className="hover-button" onClick={() => { window.location.href = p.link }}>
                    사이트로 바로 이동
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </Reveal>
  )
}
