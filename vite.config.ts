import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '',
  server: {
    host: '192.168.0.127',
    port: 3000
  },
  resolve: {
    alias: {
      "@shared": "/src/shared",
      "@pages": "/src/pages",
      "@entities": "/src/entities",
      "@features": "/src/features",
      "@widgets": "/src/widgets",
      "@app": "/src/app",
      "@styles": "/src/app/styles"
    }
  }
})
