import { test } from './baseFixtures';

test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test('use Turquoise as a background color', async ({ page }) => {
  await page.click("text=Turquoise")
  await page.waitForSelector("text=#1abc9c")
});
