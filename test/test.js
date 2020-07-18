"use strict";

const assert = require("assert");
const eslint = require("eslint");
const conf = require("../");

const testFiles = ["test/dummy.ts"];

const eslintOpts = {
  envs: ["node", "es6"],
  parserOptions: { ecmaVersion: 2018 },
  configFile: "./index.js",
};

const report = new eslint.CLIEngine(eslintOpts).executeOnFiles(testFiles);

assert.equal(report.errorCount, 0);
assert.equal(report.warningCount, 0);

testFiles.forEach((file, index) => {
  assert(report.results[index].filePath.endsWith(file));
});
