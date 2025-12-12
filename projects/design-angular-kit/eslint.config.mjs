import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores(["!**/*"]), {
    extends: compat.extends("../../.eslintrc.json"),
}, {
    files: ["**/*.ts"],

    rules: {
        "@angular-eslint/directive-selector": ["error", {
            type: "attribute",
            prefix: "it",
            style: "camelCase",
        }],

        "@angular-eslint/component-selector": ["error", {
            type: "element",
            prefix: "it",
            style: "kebab-case",
        }],
    },
}, {
    files: ["**/*.html"],
    rules: {},
}]);