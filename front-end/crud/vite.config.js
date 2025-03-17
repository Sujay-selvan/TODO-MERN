import { defineConfig } from 'vite'
import envCompatible from 'vite-plugin-env-compatible'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    envCompatible()
  ],
  envPrefix:"REACT_APP_",
  build: {
    outDir: 'dist', 
  }
})
