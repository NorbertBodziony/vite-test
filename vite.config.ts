import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      zlib: 'browserify-zlib',
      util: 'util',
      http: 'http-browserify',
      'node-fetch': 'isomorphic-fetch',
    },
  },
})
