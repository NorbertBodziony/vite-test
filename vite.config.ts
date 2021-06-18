import { defineConfig } from 'vite'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import nodePolyfills from 'rollup-plugin-polyfill-node'
console.log('12')
import builtins from 'builtin-modules'
import resolve from 'rollup-plugin-node-resolve'
import a from 'crypto-hash'
const extensions = ['.js', '.ts']

export default defineConfig({
  // ...
  plugins: [
    // commonjs(),
    // resolve(),
    // nodePolyfills(),
    nodePolyfills({ include: ['stream'] }),
    nodeResolve({
      browser: true,
      dedupe: ['bn.js', 'buffer', 'crypto-hash'],
      // extensions,
      preferBuiltins: false,
    }),
    // polyfillNode({ include: ['stream'] }),
    // polyfill(['crypto']),
    // builtinsPlugin,
    // reactRefresh(),
    // commonjsExternals({ externals: commonjsPackages }),
  ],
  build: {
    rollupOptions: {
      external: ['crypto', 'crypto-hash'],
      output: {
        globals: { crypto: 'crypto', 'crypto-hash': 'crypto-hash' },
      },
    },
  },

  optimizeDeps: {
    // include: ['@solana/web3.js'], // <- modules that needs shimming have to be excluded from dep optimization
    // exclude: ['crypto'],
  },

  define: {
    'process.env': {},
  },
})
