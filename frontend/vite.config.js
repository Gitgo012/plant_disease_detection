import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['daring-transformation-production.up.railway.app'],
    port: 4173, // optional local preview port
  },
})
