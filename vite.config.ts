import path from 'path'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      }
    ]
  },
  optimizeDeps: {
    include: ['lodash']
  },
  plugins: [vue()]
})
