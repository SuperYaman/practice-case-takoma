import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/practice-case-takoma/",
  plugins: [
    react(),
    tailwindcss()
  ],
})