import js from "@eslint/js";
import angular from "angular-eslint";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
    globalIgnores(["src/**/*-examples.component.html", "src/assets/video"]),
    {
        files: ["**/*.ts"],

        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            angular.configs.tsRecommended,
            prettierRecommended,
        ],

        processor: angular.processInlineTemplates,

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

            // The Angular 22 migration sets ChangeDetectionStrategy.Eager explicitly to preserve behavior
            "@angular-eslint/prefer-on-push-component-change-detection": ["warn"],

            "prettier/prettier": ["error", {
                printWidth: 140,
            }],
        },
    },
    {
        files: ["**/*.html"],

        extends: [
            angular.configs.templateRecommended,
            angular.configs.templateAccessibility,
            prettierRecommended,
        ],

        rules: {
            "prettier/prettier": ["error", {
                parser: "angular",
                printWidth: 140,
            }],
        },
    },
]);
