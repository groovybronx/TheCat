import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Règles générales JS
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
  // Backend : CommonJS
  { files: ["backend/**/*.js"], languageOptions: { sourceType: "commonjs" } },
  // Frontend : ES Modules
  { files: ["frontend/src/**/*.js", "frontend/src/**/*.jsx", "frontend/src/components/**/*.js", "frontend/src/components/**/*.jsx", "frontend/src/pages/**/*.js", "frontend/src/pages/**/*.jsx"], languageOptions: { sourceType: "module" } },
  // Tests : environnement Jest
  { files: ["**/*.test.js"], languageOptions: { globals: { ...globals.jest } } },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
]);
