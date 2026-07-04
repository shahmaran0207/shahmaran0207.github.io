import { useEffect } from 'react'
import rawHtml from '../../html/Portfolio-Details.html?raw'
import { asset } from '../asset.js'
import '../modalControl.js' // window.openModal/closeModal/toggleAccordion 등록

// 원본 이미지 경로(../html/assets/...)를 앱 자산 경로로 치환
const html = rawHtml.replaceAll('../html/assets/', asset('assets/'))

export default function Modals() {
  // 모달 오버레이 클릭 시 닫기 (script.js 포팅)
  useEffect(() => {
    const onClick = (e) => {
      if (e.target.classList && e.target.classList.contains('modal-overlay')) {
        const modal = e.target.closest('.modal')
        if (modal) {
          modal.classList.remove('active')
          document.body.style.overflow = ''
          const fi = document.getElementById('fixed-icons')
          if (fi) fi.style.display = 'flex'
        }
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
