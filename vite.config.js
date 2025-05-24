import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      'Contexts': '/src/Contexts',
      'Pages': '/src/Pages',
      'Data': '/src/Data',
      'Components': '/src/Components',
      'Styles': '/src/Styles',
      'Assets': '/src/assets'
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  }
})
