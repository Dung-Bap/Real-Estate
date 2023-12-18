/** @format */
// module.exports = {
//     root: true,
//     env: { browser: true, es2020: true },
//     extends: [
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "plugin:react/jsx-runtime",
//         "plugin:react-hooks/recommended",
//     ],
//     ignorePatterns: ["dist", ".eslintrc.cjs"],
//     parserOptions: { ecmaVersion: "latest", sourceType: "module" },
//     settings: { react: { version: "18.2" } },
//     plugins: ["react-refresh"],
//     rules: {
//         "react-refresh/only-export-components": [
//             "warn",
//             { allowConstantExport: true },
//         ],
//     },
// };
module.exports = {
    env: {
        browser: false,
        es6: true,
        jest: true,
    },
    extends: ["airbnb-base", "plugin:jest/all"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["jest"],
    rules: {
        "no-console": "off",
        "no-shadow": "off",
        "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    },
    overrides: [
        {
            files: ["*.js"],
            excludedFiles: "babel.config.js",
        },
    ],
};
