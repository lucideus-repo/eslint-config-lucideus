module.exports = {
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },
    extends: ["plugin:react/all", "plugin:react-redux/recommended"],
    plugins: ["react-redux"],
    rules: {
        "sonarjs/cognitive-complexity": "off",
        "functional/immutable-data": "off",
        "react/require-default-props": "off",
        "react/jsx-curly-newline": "off",
        "react-redux/no-unused-prop-types": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-indent": "off",
        "react-redux/mapDispatchToProps-returns-object": "off",
        "react-redux/connect-prefer-minimum-two-arguments": "off",
        "react-redux/prefer-separate-component-file": "off",
        "react/jsx-max-props-per-line": "off",
        "react/jsx-max-depth": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/no-multi-comp": "off",
        "react/display-name": "off",
        "react/forbid-dom-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-prop-types": "off",
        "react/jsx-boolean-value": ["error", "always"],
        "react/jsx-child-element-spacing": "off",
        "react/jsx-curly-brace-presence": "off",
        "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
        "react/jsx-first-prop-new-line": "off",
        "react/jsx-no-literals": "off",
        "react/jsx-sort-props": "off",
        "react/jsx-no-bind": ["error", { allowArrowFunctions: true }],
        "react/function-component-definition": [
            "error",
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function"
            }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["camelCase"]
            },
            {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: ["is", "should", "has", "can", "did", "will"]
            },
            {
                selector: "variable",
                format: ["camelCase", "UPPER_CASE", "PascalCase"]
            },
            {
                selector: "property",
                format: ["camelCase", "UPPER_CASE", "PascalCase"]
            },
            {
                selector: "parameter",
                format: ["camelCase", "PascalCase"],
                leadingUnderscore: "allow"
            },
            {
                selector: "typeLike",
                format: ["PascalCase"]
            },
            {
                selector: "interface",
                format: ["PascalCase"],
                custom: {
                    regex: "^I[A-Z]",
                    match: false
                }
            }
        ],
        "react/no-children-prop": "off"
    }
};
