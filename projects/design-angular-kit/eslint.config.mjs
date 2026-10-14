import { defineConfig } from "eslint/config";
import rootConfig from "../../eslint.config.mjs";

export default defineConfig([
    rootConfig,
    {
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
    },
]);
