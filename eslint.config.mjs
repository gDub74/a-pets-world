import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
    { languageOptions: { globals: globals.browser } },
    {
        rules: {
            "@typescript-eslint/no-require-imports": ["error"],
            "no-shadow": ["off"],
            "@typescript-eslint/no-shadow": ["error"],
            "no-console": [
                "error",
                {
                    allow: ["debug", "info", "warn", "error"],
                },
            ],
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
