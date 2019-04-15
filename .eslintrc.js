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
        'camelcase': ['error', {'properties': 'never'}],
        'space-before-function-paren': [
            'error', {
                'anonymous':  'always',
                'named':      'never',
                'asyncArrow': 'never'
            }
        ],
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
        ],
        'eol-last': [
            "error", "always"
        ],
        'key-spacing': ['error', {
            'multiLine': {
                'beforeColon': false,
                'afterColon': true
            },
            'align': {
                'beforeColon': false,
                'afterColon': true,
                'on': 'value',
                'mode': 'strict'
            }
        }]
    },
    'plugins': [
        'html'
    ],
    'settings': {
        'html/indent': '0',   // code should start at the beginning of the line (no initial indentation).
        'html/indent': '+2',  // indentation is the <script> indentation plus two spaces.
        'html/indent': 'tab', // indentation is one tab at the beginning of the line.
    }
};
