import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import scss from 'rollup-plugin-scss'

const NODE_ENV = process.env.NODE_ENV || 'development'
const outputFile = NODE_ENV === 'production' ? './dist/index.js' : './dist/dev.js'

export default {
  input: 'index.js',
  output: {
    file: outputFile,
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
    }),
    scss(),
    commonjs()
  ]
}
