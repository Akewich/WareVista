import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server:{
    host: true,
    strictPort: true,
    port: 8080
  }
  
})
