<<<<<<< HEAD
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import { terser } from 'rollup-plugin-terser';
=======
// import commonjs from 'rollup-plugin-commonjs'
// import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias'
>>>>>>> 2af651c4e55f0f8ee8b65138bb4f45c1868a7e46

export default {
  input: 'src/importor/componentImport/index.js',
  output: {
    file: 'output/index.js',
    format: 'umd', // 输出格式
    name: 'importor',
  },
  plugins: [
<<<<<<< HEAD
    terser({
      compress: {
        pure_funcs: ['console.log'],
      },
    }),
    nodeResolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      presets: [['@babel/preset-env']],
      plugins: ['@babel/transform-runtime', '@babel/plugin-proposal-class-properties'],
    }),
    alias({
      resolve: ['.jsx', '.js'],
=======
    // terser(),
    // commonjs(),
    // babel({ exclude: 'node_modules/**' }),
    alias({
      resolve: ['.jsx', '.js'], //optional, by default this will just look for .js files or folders
>>>>>>> 2af651c4e55f0f8ee8b65138bb4f45c1868a7e46
      entries: [{ find: '@', replacement: 'src' }],
    }),
  ],
  external: [],
}
