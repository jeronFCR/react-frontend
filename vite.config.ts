import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@interfaces": path.resolve(__dirname, "src/interfaces"),
      "@services": path.resolve(__dirname, "src/services"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
    }
  }
})
