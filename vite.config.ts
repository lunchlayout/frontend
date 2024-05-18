import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    host: '192.168.0.127',
    port: 3000,
    strictPort: true
  },
  server: {
    host: '192.168.0.127',
    port: 3000,
    strictPort: true
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
  },
  build: {
      rollupOptions: {
          output:{
              manualChunks(id) {
                  if (id.includes('node_modules')) {
                      return id.toString().split('node_modules/')[1].split('/')[0].toString();
                  }
              }
          }
      }
  }
  
})
