import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import pluginPrettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest, // Tambahkan globals jest
      },
    },
  },
  pluginJs.configs.recommended,
  prettier, // Menonaktifkan aturan ESLint yang konflik dengan Prettier
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      // Aturan linting
      quotes: ["error", "double", { avoidEscape: true }],
      semi: ["error", "always"],
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto", // Mengatasi masalah CRLF/LF
        },
      ],
    },
  },
];
