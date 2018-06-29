import commonJS from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

export default {
  input: 'index.ts',

  output: [{ file: 'dist/index.js', format: 'es' }],

  plugins: [
    commonJS({
      include: 'node_modules/**',
    }),
    typescript({ verbosity: 3 }),
    resolve(),
  ],
};
