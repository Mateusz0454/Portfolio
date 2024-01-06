import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
base: "/[REPO_NAME]/"
export default defineConfig({
  plugins: [react()],
})
