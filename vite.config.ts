import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/PortFolio-Iban-react/',
  plugins: [react(),tailwindcss(),],
  build: {
    minify: 'esbuild',
    outDir: 'dist',
    cssCodeSplit: true,
    assetsInlineLimit: 0, 
    manifest: true, 
  },
})
