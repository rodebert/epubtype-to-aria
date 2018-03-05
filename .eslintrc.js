module.exports = {
    "env": {
        "es6": true,
		"node": true,
		"jest": true,
		"jasmine": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
		],
		'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
		'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
