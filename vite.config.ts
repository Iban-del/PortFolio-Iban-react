import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/PortFolio-Iban-react/',
  build: {
    assetsInlineLimit: 0,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
