import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/quinnkos/', // 👈 This is important for GitHub Pages
  plugins: [react()],
})