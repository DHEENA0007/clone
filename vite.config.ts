import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/clone/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: ['55aa8224943c.ngrok-free.app'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})