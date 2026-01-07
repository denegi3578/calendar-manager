import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // 👈 이 줄을 꼭 추가하세요! (점 하나 찍는 게 중요)
})