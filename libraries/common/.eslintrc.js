'use strict';

module.exports = {
    root: true,
    parser: '@babel/eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            plugins: [['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }]]
        }
    },
    extends: ['eslint:recommended'],
    env: {
        browser: true
    },
    rules: {},
    overrides: [
        // node files
        {
            files: ['./.eslintrc.js'],
            parserOptions: {
                sourceType: 'script'
            },
            env: {
                browser: false,
                node: true
            },
            extends: ['plugin:n/recommended']
        }
    ]
};
