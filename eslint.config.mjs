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

export default defineConfig([
    globalIgnores(["projects/**/*", "src/**/*-examples.component.html", "src/assets/video"]),
    {
        files: ["**/*.ts"],

        extends: compat.extends(
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:@angular-eslint/recommended",
            "plugin:@angular-eslint/template/process-inline-templates",
            "plugin:prettier/recommended",
        ),

        rules: {
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-var-requires": "off",
            "no-control-regex": "off",

            "@angular-eslint/component-selector": ["error", {
                prefix: "it",
                style: "kebab-case",
                type: "element",
            }],

            "@angular-eslint/prefer-standalone": ["off"],

            "prettier/prettier": ["error", {
                printWidth: 140,
            }],
        },
    },
    {
        files: ["**/*.html"],

        extends: compat.extends(
            "plugin:@angular-eslint/template/recommended",
            "plugin:@angular-eslint/template/accessibility",
            "plugin:prettier/recommended",
        ),

        rules: {
            "prettier/prettier": ["error", {
                parser: "angular",
                printWidth: 140,
            }],
        },
    },
]);