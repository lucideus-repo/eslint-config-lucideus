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
        "react-redux/mapDispatchToProps-returns-object": "off",
        "react-redux/connect-prefer-minimum-two-arguments": "error",
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
        "react/no-children-prop": "off"
    }
};
