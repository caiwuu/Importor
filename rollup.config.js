// import commonjs from 'rollup-plugin-commonjs'
// import babel from 'rollup-plugin-babel';

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
  ],
  external: [],
};
