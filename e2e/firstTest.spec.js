describe('Example', () => {
  beforeEach(async () => {
    console.log('device**** ', device)
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    console.log('by***', by)
    // await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should show hello screen after tap', async () => {
    // await element(by.id('hello_button')).tap();
    // await expect(element(by.text('Hello!!!'))).toBeVisible();
  });

  it('should show world screen after tap', async () => {
    // await element(by.id('world_button')).tap();
    // await expect(element(by.text('World!!!'))).toBeVisible();
  });
});
