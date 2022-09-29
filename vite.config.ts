import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        dir: "./dist/"
      }
    },
  },
  server: {
    proxy: {
      '/api/': {
        target: 'https://one-dev-one.cn',
        ws: false,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
