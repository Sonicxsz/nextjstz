module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@next/next/recommended',
    ],
    overrides: [
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        quotes: ['error', 'single'],
        indent: ['error', 4],
        'no-console': 'warn',
        'react/react-in-jsx-scope': 'off',
        'max-len': ['error', { code: 120 }],
        'react/prop-types': 'off'
    },
};


