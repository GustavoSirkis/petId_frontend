import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const baseUrl = process.env.VERCEL_URL || '/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: `${baseUrl}`,
})
