import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        ignores: [
            'node_modules',
            'dist',
            'coverage',
            '.turbo',
            '**/*.config.js',
            '**/*.config.mjs',
        ],
    },
    ...tseslint.configs.recommended,
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
        },
    }
);
