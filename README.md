# Use [Istanbul](https://istanbul.js.org) coverage collection with [Playwright Test](https://playwright.dev/docs/test-intro)

[![Coverage Status](https://coveralls.io/repos/github/mxschmitt/playwright-test-coverage/badge.svg)](https://coveralls.io/github/mxschmitt/playwright-test-coverage)
[![CI](https://github.com/mxschmitt/playwright-test-coverage/actions/workflows/nodejs.yml/badge.svg)](https://github.com/mxschmitt/playwright-test-coverage/actions/workflows/nodejs.yml)

This example demonstrates how to use the [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) to collect coverage data during the runtime with your end-to-end tests which will be stored on the filesystem. When applying the shown parts, you are able to view the coverage report e.g. as HTML, or convert it to the lcov format to upload it to Coveralls or other similar providers. In this example, we are using GitHub Actions to run the tests and upload them to Coveralls.

## Prerequisites

- The web application which you are using needs to have the [`babel-plugin-istanbul`](https://github.com/istanbuljs/babel-plugin-istanbul) configured during the build process.
- It's recommended to only enable it during end-to-end testing, so a custom check for if a variable is set and only enable it then is helpful.
- You could also add it only when the dev server `NODE_ENV=development` is used.

## Usage

- Place the [`baseFixtures.ts`](https://github.com/mxschmitt/playwright-test-coverage/blob/main/e2e/baseFixtures.ts) into your test directory. Instead of requiring now `@playwright/test` to get the test object, you use `./baseFixtures`.
- This will collect the corresponding coverage files into the `.nyc_output` directory which can be used from the [Istanbul CLI](https://github.com/istanbuljs/nyc).
- For an example test, see [App.test.ts](https://github.com/mxschmitt/playwright-test-coverage/blob/main/e2e/App.test.ts)

## Coverage formats

Helpful commands are the following:

- `npx nyc report --reporter=html` -> creates a report and can be viewn via opening `coverage/index.html`.
- `npx nyc report --reporter=lcov` -> commonly used to upload to Coveralls or Codecov.
- `npx nyc report --reporter=text` -> CLI output how the current code coverage per file and statement will look like.

You are able to view the coverage in your browser with the `npx nyc report --reporter=html` command which is then available in the coverage folder `coverage/index.html`.

## Used tools

- [create-react-app](https://create-react-app.dev) - tooling and bundling for React
- [react-app-rewired](https://www.npmjs.com/package/react-app-rewired) - to modify the React babel config without ejecting it
- [babel-plugin-istanbul](https://github.com/istanbuljs/babel-plugin-istanbul) - to add coverage information
- [nyc](https://github.com/istanbuljs/nyc) - Istanbul CLI to generate lcov coverage
