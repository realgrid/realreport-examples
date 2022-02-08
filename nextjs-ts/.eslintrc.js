module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest'],
    extends: [
        // realboard에서 사용 중인 create-react-app 린트 설정 확장
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended'
    ],
    rules: {
        'eqeqeq': 'off',
        'no-mixed-operators': 'off',
        'no-redeclare': 'off',
        'no-array-constructor': 'off',
        'no-cond-assign': 'off',
        'default-case': 'off',
        'no-extend-native': 'off',
        'no-sequences': 'off',
        'no-unused-vars': 'off',
        'no-useless-escape': 'off',
        'no-template-curly-in-string': 'off',
        'no-fallthrough': 'off',
        'no-restricted-globals': 'off',
        'no-useless-concat': 'off',
        'eslintno-sparse-arrays': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-useless-constructor': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/quotes': [
            "error",
            "single",
            {
              "allowTemplateLiterals": true
            }
          ],        
    },
};