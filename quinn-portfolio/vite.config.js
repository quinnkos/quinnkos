import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/quinn-portfolio/', // 👈 This is important for GitHub Pages
  plugins: [react()],
})