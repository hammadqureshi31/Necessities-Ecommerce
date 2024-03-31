import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Necessities-Ecommerce/",
  build: {
    chunkSizeWarningLimit: 1000 * 1024, // 1000 kB (1 MB)
  },
})
