module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	"overrides": [
		{
			"env": {
				"node": true
			},
			"files": [
				".eslintrc.{js,cjs}"
			],
			"parserOptions": {
				"sourceType": "script"
			}
		}
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint",
		"react"
	],
	"rules": {
		"@typescript-eslint/typedef": [
			"error",
			{
				"arrowParameter": true,
				"parameter": true,
				"variableDeclaration": true
			}
		],
		"@typescript-eslint/explicit-function-return-type": [
			"error"
		],
		"@typescript-eslint/explicit-module-boundary-types": [
			"error",
			{
				"allowArgumentsExplicitlyTypedAsAny": true
			}
		],
		"@typescript-eslint/no-inferrable-types": "off",
		"linebreak-style": [
			"error",
			"windows"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
