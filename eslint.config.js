import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      "prettier",
    ],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.es2021,
      },
    },
    rules: {
      // disable default unused-vars (too noisy)
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // remove unused imports automatically
      "unused-imports/no-unused-imports": "error",

      // warn on unused variables but allow `_`
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // sort imports automatically
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
    },
  },
]);
