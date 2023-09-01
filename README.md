# Use [Istanbul](https://istanbul.js.org) coverage collection with [Playwright Test](https://playwright.dev/docs/test-intro)

[![Coverage Status](https://coveralls.io/repos/github/mxschmitt/playwright-test-coverage/badge.svg)](https://coveralls.io/github/mxschmitt/playwright-test-coverage)
[![CI](https://github.com/mxschmitt/playwright-test-coverage/actions/workflows/nodejs.yml/badge.svg)](https://github.com/mxschmitt/playwright-test-coverage/actions/workflows/nodejs.yml)

This example demonstrates how to use [vite-plugin-istanbul](https://github.com/ifaxity/vite-plugin-istanbul) to collect coverage data during runtime with your end-to-end tests which will be stored on the filesystem. When applying the shown parts, you are able to view the coverage report e.g. as HTML, or convert it to the `lcov` format for upload to [Coveralls](https://coveralls.io/) or other similar providers. In this example, we are using GitHub Actions to run the tests and upload them to Coveralls.

## Prerequisites

- The web application which you are using needs to have [`vite-plugin-istanbul`](https://github.com/ifaxity/vite-plugin-istanbul) configured during the build process.
- It's recommended to only enable it during end-to-end testing, for example by checking a variable to determine if it should be enabled.
- You could also add it only when the dev server `NODE_ENV=development` is used.

## Usage

- Place [`baseFixtures.ts`](https://github.com/mxschmitt/playwright-test-coverage/blob/main/e2e/baseFixtures.ts) into your test directory. Instead of requiring `@playwright/test` to get the test object, use `./baseFixtures`.
- This will collect the corresponding coverage files into the `.nyc_output` directory which can be used from the [Istanbul CLI](https://github.com/istanbuljs/nyc).
- For an example test, see [App.test.ts](/e2e/App.test.ts)

## Coverage formats

Helpful commands are the following:

- `npx nyc report --reporter=html` -> Writes an HTML report to `coverage/index.html`.
- `npx nyc report --reporter=lcov` -> commonly used to upload to Coveralls or [Codecov](https://about.codecov.io/).
- `npx nyc report --reporter=text` -> CLI output how the current code coverage per file and statement will look like.

## Used tools

- [vite](https://vitejs.dev/) - tooling and bundling for React
- [vite-plugin-istanbul](https://github.com/ifaxity/vite-plugin-istanbul) - to add coverage information
- [nyc](https://github.com/istanbuljs/nyc) - Istanbul CLI to generate lcov coverage

## Using create-react-app / Webpack

See this archived version in the [`create-react-app`](https://github.com/mxschmitt/playwright-test-coverage/tree/create-react-app) branch.