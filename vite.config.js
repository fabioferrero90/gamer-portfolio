import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'Contexts': '/src/Contexts',
      'Pages': '/src/Pages',
      'Data': '/src/Data',
      'Components': '/src/Components',
      'Styles': '/src/Styles',
      'Assets': '/src/assets'
    },
  }
})
