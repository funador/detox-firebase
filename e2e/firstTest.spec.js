describe("HelloDetoxTest", () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });
  it("should have welcome screen", async () => {
    await expect(element(by.id("welcome"))).toBeVisible();
  });
  it("should show hello Rect after tap", async () => {
    await element(by.id("helloWorld")).tap();
    await expect(element(by.text("Hello World"))).toBeVisible();
  });
  it("should show Detox screen after tap", async () => {
    await element(by.id("helloDetox")).tap();
    await expect(element(by.text("Hello Detox"))).toBeVisible();
  });
});
