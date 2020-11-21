import path from 'path'

module.exports = {
  alias: {
    '/@/': path.resolve(__dirname, './src'),
    '/@views/': path.resolve(__dirname, './src/views'),
    '/@components/': path.resolve(__dirname, './src/components'),
    '/@utils/': path.resolve(__dirname, './src/utils')
  },
  optimizeDeps: {
    include: ['lodash']
  },
  proxy: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, '')
    }
  }
  // ...
}
