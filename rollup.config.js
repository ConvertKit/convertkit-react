import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import styles from 'rollup-plugin-styles'
import external from 'rollup-plugin-peer-deps-external'

export default {
  external: ['react'],
  input: 'src/index.js',
  output: [
    { file: 'bin/convertkit-react.esm.js', format: 'es' },
    { file: 'bin/convertkit-react.cjs.js', format: 'cjs', exports: 'default' }
  ],
  plugins: [
    external(),
    styles({
      mode: ['inject', { singleTag: true }]
    }),
    babel({ babelHelpers: 'bundled' }),
    commonjs({
      include: /node_modules/
    }),
    resolve(),
  ]
}
