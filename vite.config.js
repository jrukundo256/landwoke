// vite.config.js
// https://vitejs.dev/config/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Set the correct MIME type for JavaScript files
        entryFileNames: '[name].js', // Change the extension if needed
        chunkFileNames: 'chunks/[name]-[hash].js', // Change the extension if needed
      },
    },
  },
})

