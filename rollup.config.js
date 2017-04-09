var typescript = require('rollup-plugin-ts').default;
const tsconfig = require("./tsconfig.json");

module.exports = {
  entry: './src/index.ts',
  dest: 'index.js',
  format: 'cjs',
  context: 'this',
  external: [
    'reflect-metadata'
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfig: tsconfig.compilerOptions,
    }),
  ]
};
