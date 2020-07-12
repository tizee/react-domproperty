// Convert CommonJS modules to ES6, so they can be included in a Rollup bundle
import commonjs from '@rollup/plugin-commonjs';
// locates third party modules in node_modules
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import { uglify } from 'rollup-plugin-uglify';

/* resolve options */
const extensions = ['.js', '.ts'];

export default [
  {
    input: 'build/convert.js',
    plugins: [
      resolve(extensions), // locate modules
      commonjs(),
      babel({
        extensions,
        babelHelpers: 'bundled', // 'runtime' for building libraries with @babel/plugin-transform-runtime and @babel/runtime, 'bundled' for building application code
      }),
      uglify(),
      copy({
        targets: [
          {
            src: 'build/types/convert.d.ts',
            dest: 'dist/types/',
          },
        ],
        verbose: true,
      }),
    ],
    output:
      // CommonJS (Node) and ES module (for bundlers) build
      {
        file: 'dist/convert.js',
        format: 'cjs',
      },
  },
  {
    input: 'build/attributes.js',
    plugins: [
      resolve(extensions), // locate modules
      commonjs(),
      babel({
        extensions,
        babelHelpers: 'bundled', // 'runtime' for building libraries with @babel/plugin-transform-runtime and @babel/runtime, 'bundled' for building application code
      }),
      uglify(),
    ],
    output:
      // CommonJS (Node) and ES module (for bundlers) build
      {
        file: 'scripts/attributes.js',
        format: 'cjs',
      },
  },
];
