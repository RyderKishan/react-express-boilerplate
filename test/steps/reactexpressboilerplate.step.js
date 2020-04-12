const { Then } = require('cucumber');
const support = require('../support');

Then('I expect that the title is React Express Boilerplate', async () => {
  const title = await support.getTitle();
  // element.waitForExist(3000);
  expect(title).toBe('React Express Boilerplate');
});
