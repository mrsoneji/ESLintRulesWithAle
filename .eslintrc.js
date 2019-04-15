module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': false
	},
	'extends': 'eslint:recommended',
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
		'NotificationModule': 'off'
	},
	'parserOptions': {
		'ecmaVersion': 5
	},
	'rules': {
		'no-undef': 'off',
		'no-console': 'off',
		'no-trailing-spaces': ['error'],
		'no-unused-vars': ['error', { 'vars': 'local', 'args': 'after-used', 'ignoreRestSiblings': false }],
		'indent': [
			'error',
			4,
			{ 'SwitchCase': 1 }
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};