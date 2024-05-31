module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended' // solve the conflict of eslint & prettier
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'tailwind.config.js', 'postcss.config.js'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-misused-promises': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
}
