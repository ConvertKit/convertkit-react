import resolve from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from '@rollup/plugin-babel'

export default {
  external: ['react'],
  input: 'src/index.js',
  output: {
    file: 'bin/convertkit-form.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    commonjs({
      include: /node_modules/
    })
  ]
}
