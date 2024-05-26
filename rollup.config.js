import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import path from 'path';
import { defineConfig } from 'rollup';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	input: 'src/index.tsx',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
		sourcemap: true,
	},
	plugins: [
		nodeResolve(),
		commonjs(),
		typescript(),
		scss({
			output: 'dist/bundle.css',
			includePaths: [
				path.resolve(__dirname, 'src/components'),
				path.resolve(__dirname, 'node_modules'),
			],
			// eslint-disable-next-line no-undef
			sass: require('sass'),
		}),
		postcss({
			extensions: ['.css', '.scss'],
			modules: true,
			plugins: [autoprefixer(), cssnano()],
		}),
	],
	external: ['react', 'react-dom'],
});