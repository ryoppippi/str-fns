module.exports = {
	env: {
		es2021: true,
		browser: true,
		node: true
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json'
	},
	ignorePatterns: ['*.cjs'],

	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/no-explicit-any': 1,
		'@typescript-eslint/no-non-null-assertion': 1,
		eqeqeq: ['error', 'always', { null: 'ignore' }],
		'@typescript-eslint/no-unused-vars': [
			'warn',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
				caughtErrorsIgnorePattern: '^_',
				destructuredArrayIgnorePattern: '^_'
			}
		],
		'@typescript-eslint/strict-boolean-expressions': [
			'error',
			{
				allowString: false,
				allowNumber: false,
				allowNullableObject: false,
				allowNullableBoolean: false,
				allowNullableString: false,
				allowNullableNumber: false,
				allowAny: false
			}
		]
	},
	root: true
};
