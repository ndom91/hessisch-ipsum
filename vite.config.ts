import path from 'path'
import vue from '@vitejs/plugin-vue'

/**
 * @type {import('vite').UserConfig}
 */
const config = {
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
}

export default config
