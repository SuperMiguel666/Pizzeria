import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    proxy: {
      '/api': { 
        target: 'http://localhost:5000', 
        
        changeOrigin: true, 
      }
    }
  }
=======
>>>>>>> fc6496ec22be95e168897e5e224d2a8fbc4ac85e
})
