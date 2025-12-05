import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        aulas: resolve(__dirname, 'aulas.html'),
        pratique: resolve(__dirname, 'pratique.html'),
        comunidade: resolve(__dirname, 'comunidade.html'),
      },
    },
  },
})
