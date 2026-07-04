// script.js의 모달/아코디언 로직 포팅.
// React 컴포넌트(Portfolio 버튼)에서 import 해서 쓰고,
// 주입된 모달 HTML의 인라인 onclick(closeModal/toggleAccordion)을 위해 window에도 등록.

export function openModal(modalId) {
  const modal = document.getElementById(modalId)
  if (!modal) return
  modal.classList.add('active')
  document.body.style.overflow = 'hidden'
  const fixedIcons = document.getElementById('fixed-icons')
  if (fixedIcons) fixedIcons.style.display = 'none'
}

export function closeModal(modalId) {
  const modal = document.getElementById(modalId)
  if (modal) modal.classList.remove('active')
  document.body.style.overflow = ''
  const fixedIcons = document.getElementById('fixed-icons')
  if (fixedIcons) fixedIcons.style.display = 'flex'
}

export function toggleAccordion(element) {
  const parent = element.parentElement
  if (parent) parent.classList.toggle('active')
}

if (typeof window !== 'undefined') {
  window.openModal = openModal
  window.closeModal = closeModal
  window.toggleAccordion = toggleAccordion
}
