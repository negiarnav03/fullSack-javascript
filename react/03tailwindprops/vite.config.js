import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' 
// this is done to connect the tailwind to the vite.

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
