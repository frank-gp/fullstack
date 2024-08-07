module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  "rules": {
    "react/prop-types": "off",
    // "no-unused-vars": ["error", {
    "no-unused-vars": ["warn", {
      // Comprobar solo variables locales declaradas en funciones o bloques
      // "vars": "local",
      
      // No comprobar si los argumentos de las funciones están siendo utilizados
      // "args": "none",
      
      // No verificar si los parámetros de error en bloques `catch` están siendo utilizados
      // "caughtErrors": "none",
      
      // Ignorar las variables no utilizadas en asignaciones de desestructuración que usan el operador rest (...)
      // "ignoreRestSiblings": true,
      
      // Ignorar las variables usadas que coincidan con un patrón de ignorancia específico
      // "reportUsedIgnorePattern": true
    }],

    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}
