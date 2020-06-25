import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'

export default {
  external: ['prop-types'],
  input: 'src/index.js',
  output: {
    file: 'bin/convertkit-form.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}
