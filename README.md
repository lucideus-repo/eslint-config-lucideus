# eslint-config-lucideus

[![npm version](https://badge.fury.io/js/eslint-config-lucideus.svg)](https://badge.fury.io/js/eslint-config-lucideus)

This package provides Lucideus' .eslintrc as a shareable config

## Installation

```shell
npx install-peerdeps --dev eslint-config-lucideus
```

- Confirm usage of `yarn`, if prompted

## Usage

Once you install the `eslint-config-lucideus` package and all its peer dependencies, you can start using all the rules by specifying it in your eslint config file within the `extends` section of your `.eslintrc.json` file

```json
{
    "extends": ["eslint-config-lucideus"]
}
```

### Setup in a React project

React specific rules are added separately along with the base rules. You can simply include it within your project using the `eslint-config-lucideus/react` rule set within the `extends` section

```json
{
    "extends": ["eslint-config-lucideus", "eslint-config-lucideus/react"]
}
```

### Setup in a AWS CDK project

All typescript rules compatible with the AWS CDK structure have been added separately and can be integrated by using the following configuration

```json
{
    "extends": ["eslint-config-lucideus", "eslint-config-lucideus/cdk"]
}
```

### Setup for React tests

Rules specific to tests written in React are added separately and can be integrated by using the following configurations. 

```json
{
    "extends": ["eslint-config-lucideus", "eslint-config-lucideus/react-tests"]
}
```

*Note*: For the above rules to apply, make sure you have enabled linting in for test files/folder

## Running the linter

Add the following to your `package.json` within the `scripts` section to have an easy to use command:

```json
{
    "scripts": {
        "lint": "./node_modules/.bin/eslint src"
    }
}
```

Now you can run, using `npm run lint` OR `yarn lint`

## Integration with VS Code

1. Install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. If you're having multiple projects, add the following in your root `.vscode/settings.json`

```json
{
"eslint.workingDirectories": [
        { "directory": "project1", "changeProcessCWD": true },
        { "directory": "project2", "changeProcessCWD": true },
        { "directory": "project2", "changeProcessCWD": true }
    ]
}
```
