import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server:{
    origin:"https://iban-del.github.io/PortFolio-Iban-react"
  },
  base: '/assets',
  build: {
    assetsInlineLimit: 0,
    manifest:true,
    outDir:'public/assets',
    assetsDir:''
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
