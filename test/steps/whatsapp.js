const { Given, Then } = require('cucumber');
const support = require('../support');

Given('I open Whatsapp Web', async () => {
  const url = 'https://web.whatsapp.com/';
  await browser.url(url);
  // await browser.pause(10000);
});

Then('I expect that the title is WhatsApp', async () => {
  const title = await support.getTitle();
  expect(title).toBe('WhatsApp');
});
