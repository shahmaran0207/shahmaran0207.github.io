import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 정적 사이트와 동일한 순서로 CSS 로드 → 캐스케이드/반응형 그대로 재사용
import './styles/style.css'
import './styles/profile.css'
import './styles/aboutme-complete.css'
import './styles/portfolio.css'
import './styles/responsive.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
