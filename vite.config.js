import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' → GitHub Pages 등 서브경로 배포 호환
export default defineConfig({
  plugins: [react()],
  base: './',
  server: { port: 5174 },
})
