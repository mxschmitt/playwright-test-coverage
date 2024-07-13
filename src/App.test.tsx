import { test, expect } from './baseFixtures';
import App from './App'

test('use Turquoise as a default background color', async ({ mount }) => {
  const component = await mount(<App/>);
  await expect(component.getByTestId("current-color")).toHaveText("#1abc9c")
});

test('use Red as a background color', async ({ mount }) => {
  const component = await mount(<App/>);
  await component.getByRole('button', { name: 'Red' }).click();
  await expect(component.getByTestId("current-color")).toHaveText("#e74c3c")
});

test('use Turquoise as a background color', async ({ mount }) => {
  const component = await mount(<App/>);
  await component.getByRole('button', { name: 'Turquoise' }).click();
  await expect(component.getByTestId("current-color")).toHaveText("#1abc9c")
});
