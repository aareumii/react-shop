import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import path from 'path';

export default {
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
		postcss({
			extensions: ['.css', '.scss'],
			modules: true,
			use: [
				[
					'sass',
					{
						includePaths: [
							path.resolve(__dirname, 'src/components'),
							path.resolve(__dirname, 'node_modules'),
						],
					},
				],
			],
			plugins: [autoprefixer(), cssnano()],
		}),
	],
	external: ['react', 'react-dom'],
};
