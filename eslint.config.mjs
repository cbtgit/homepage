import js from '@eslint/js';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';

const maintainabilityRules = {
	'max-lines': [
		'error',
		{ max: 250, skipBlankLines: true, skipComments: true },
	],
	'max-lines-per-function': [
		'error',
		{ max: 40, skipBlankLines: true },
	],
	complexity: ['error', { max: 8 }],
	'max-depth': ['error', { max: 3 }],
	'max-params': ['error', { max: 3 }],
	'max-nested-callbacks': ['error', { max: 2 }],
};

export default defineConfig(
	globalIgnores(['dist/', '.astro/']),
	{
		files: ['**/*.{js,mjs,cjs}'],
		extends: [js.configs.recommended],
		rules: maintainabilityRules,
	},
	{
		files: ['**/*.{ts,mts,cts,tsx}'],
		extends: [tseslint.configs.recommended],
		rules: maintainabilityRules,
	},
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.astro'],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
			},
		},
		rules: maintainabilityRules,
	},
);
