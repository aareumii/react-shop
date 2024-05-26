import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import sass from 'rollup-plugin-sass';
import path from 'path';
import { defineConfig } from 'rollup';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

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
		sass({
			include: ['**/*.scss'],
			options: {
				includePaths: [
					path.resolve(__dirname, 'src/components'),
					path.resolve(__dirname, 'node_modules'),
				],
			},
		}),
		postcss({
			extensions: ['.css', '.scss'],
			modules: true,
			plugins: [autoprefixer(), cssnano()],
		}),
	],
	external: ['react', 'react-dom'],
});
