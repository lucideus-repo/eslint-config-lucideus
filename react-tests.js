module.exports = {
    plugins: ["testing-library"],
    overrides: [
        {
            "files": [
                "**/tests/**/*.[jt]s?(x)",
                "**/?(*.)+(spec|test).[jt]s?(x)"
            ],
            "extends": ["plugin:testing-library/react"],
            "rules": {
                "testing-library/consistent-data-testid": "off",
                "testing-library/no-node-access": "warn",
            }
        }
    ]
};
