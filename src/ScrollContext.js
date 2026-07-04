import { createContext } from 'react'

// 내부 스크롤 컨테이너(.profile-scroll-content) ref를 하위 Reveal에 전달
export const ScrollContext = createContext({ current: null })
