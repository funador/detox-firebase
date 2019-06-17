import { config, driver } from '../../e2e-config';

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(5000); // wait for app to load
});

beforeEach(async () => {
  await driver.resetApp();
});

test('appium renders', async () => {
  await driver.sleep(500);
  expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
});

test('should show "Hello World" after tap', async () => {
  await driver.sleep(500);
  const element = await driver.elementByAccessibilityId('helloWorld');
  await driver.tapElement(element);
  const text = await driver.elementByAccessibilityId('docText').text();
  expect(text).toBe('Hello World');
});

test('should show "Hello Appium" after tap', async () => {
  await driver.sleep(500);
  const element = await driver.elementByAccessibilityId('helloAppium');
  await driver.tapElement(element);
  const text = await driver.elementByAccessibilityId('docText').text();
  expect(text).toBe('Hello Appium');
});
