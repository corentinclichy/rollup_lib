import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin(),],
  build: {
    base: 'https://cdn.jsdelivr.net/gh/corentinclichy/rollup_lib/dist/',
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: './src/main.jsx',
      },
    },
  },

})
