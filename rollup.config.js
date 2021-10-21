// import commonjs from 'rollup-plugin-commonjs'
// import babel from 'rollup-plugin-babel';
import alias from 'rollup-plugin-alias'

export default {
  input: 'src/importor/componentImport/index.js',
  output: {
    file: 'output/index.js',
    format: 'es', // 输出格式
  },
  plugins: [
    // terser(),
    // commonjs(),
    // babel({ exclude: 'node_modules/**' }),
    alias({
      resolve: ['.jsx', '.js'], //optional, by default this will just look for .js files or folders
      entries: [{ find: '@', replacement: 'src' }],
    }),
  ],
  external: [],
}
