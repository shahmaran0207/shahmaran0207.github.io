export default function FixedIcons() {
  const scrollTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="fixed-icons">
      <a
        href="mailto:shahmaran0207@naver.com"
        title="메일 보내기"
        data-text="shahmaran0207@naver.com"
      >
        <i className="bi bi-envelope"></i>
      </a>
      <a
        href="https://github.com/shahmaran0207"
        target="_blank"
        rel="noreferrer"
        title="GITHUB 주소로 이동"
        data-text="GitHub"
      >
        <i className="bi bi-github"></i>
      </a>
      <a href="#page-top" title="위로가기" data-text="위로가기" onClick={scrollTop}>
        <i className="bi bi-arrow-up-circle"></i>
      </a>
    </div>
  )
}
