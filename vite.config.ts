import { defineConfig, Plugin } from 'vite'
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineConfig({
  plugins: [nodePolyfills({ include: ['stream'] })],
  optimizeDeps: {
    exclude: ['@solana/web3.js'],
  },
})
