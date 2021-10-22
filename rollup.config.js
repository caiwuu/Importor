import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/importor/componentImport/index.js',
  output: {
    file: 'output/index.js',
    format: 'umd', // 输出格式
    name: 'importor',
  },
  plugins: [
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
      entries: [{ find: '@', replacement: 'src' }],
    }),
  ],
  external: [],
}
