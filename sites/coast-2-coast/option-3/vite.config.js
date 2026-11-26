import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Relative base so the build works at any GitHub Pages path (HashRouter keeps routes client-side)
export default defineConfig({ base: './', plugins: [react()], server: { port: 5173 } })
