const { Given, Then, When } = require('cucumber');
const support = require('../support');

Given('I open React Express Boilerplate', async () => {
  const url = 'http://localhost:7400';
  await browser.url(url);
});

Then('I see the header element', async () => {
  const element = await support.isDisplayed('header');
  expect(element).toBe(true);
});

Then('I see the footer element', async () => {
  const element = await support.isDisplayed('footer');
  expect(element).toBe(true);
});

Then('I see the article element', async () => {
  const element = await support.isDisplayed('article');
  expect(element).toBe(true);
});

Then('I see the Home container', async () => {
  const element = await support.isDisplayed('.Home');
  expect(element).toBe(true);
});

Then('I see the actions class element', async () => {
  const element = await support.isDisplayed('.postContainer');
  expect(element).toBe(true);
});

let actionButtons = [];

Then('I see 2 action buttons', async () => {
  actionButtons = await support.getAllElementsBySelector('.actions > button');
  expect(actionButtons.length).toBe(2);
});

Then('I see Fetch Results Button', async () => {
  const button1 = actionButtons[0];
  expect(button1.isDisplayed()).toBe(true);
  expect(button1.isEnabled()).toBe(true);
  expect(button1.getText()).toBe('FETCH RESULTS');
});

Then('I see Clear Results Button', async () => {
  const button2 = actionButtons[1];
  expect(button2.isDisplayed()).toBe(true);
  expect(button2.isEnabled()).toBe(false);
  expect(button2.isClickable()).toBe(false);
  expect(button2.getText()).toBe('CLEAR RESULTS');
});

Then('I see the results class element', async () => {
  const element = await support.isDisplayed('.postContainer');
  expect(element).toBe(true);
});

Then('I see No Results', async () => {
  const elementText = await support.getElementTextBySelector('.make-center');
  expect(elementText).toBe('No Results');
});

When('I click fetch results button', async () => {
  const button1 = actionButtons[0];
  button1.click();
});

Then('I see the loader', async () => {
  const loader = await support.getElementBySelector('.make-center .MuiCircularProgress-root');
  expect(await loader.isDisplayed()).toBe(true);
});

Then('I see the results populated', async () => {
  const element = await support.getElementBySelector('.postContainer .MuiPaper-root');
  await element.waitForExist(3000);
  expect(await element.isDisplayed()).toBe(true);
});

Then('I see Clear Results Button Enabled', async () => {
  const button2 = actionButtons[1];
  expect(button2.isEnabled()).toBe(true);
});

Then('I enter text', async () => {
  const element = await support.getElementBySelector('.loginUser .search .root .MuiSvgIcon-root');
  const input = await support.getElementBySelector('.loginUser .search .root .searchArea input');
  element.click();
  input.setValue('Then I see the header elementThen I see the header elementThen I see the header element');
});

Then('I wait', async () => {
  browser.pause(3000);
  // eslint-disable-next-line no-console
  console.log('Process Complete.. Exiting in 3s');
});
