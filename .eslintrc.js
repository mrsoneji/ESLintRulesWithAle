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
        'cordova': 'writable'
	},
	'parserOptions': {
		'ecmaVersion': 5
	},
	'rules': {
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
        'padding-line-between-statements': [
            'error',
            { 'blankLine': 'always', 'prev': 'function', 'next': 'function' },
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' }
        ],
        'comma-dangle': [
            'error', {
                'arrays':    'never',
                'objects':   'never',
                'imports':   'never',
                'exports':   'never',
                'functions': 'ignore'
            }
        ],
		'no-unused-vars': ['error', {
            'vars': 'all',
            'args': 'after-used',
            'ignoreRestSiblings': false,
            'varsIgnorePattern': '[a-z]Module'
        }],
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
                'on': 'value',
                'mode': 'strict'
            }
        }],
        'curly': 'error',
        'no-multi-spaces': ['error', {'exceptions': { 'VariableDeclarator': true, 'AssignmentExpression':true}}],
        'array-bracket-spacing': ['error','never'],
        'array-bracket-newline': ['error', {'multiline':true}],
        'object-curly-spacing': ['error','never'],
        'comma-spacing': ['error', {'before':false,'after':true}]
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
