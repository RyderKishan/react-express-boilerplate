/**
 * Check if the given element is visible
 * @param  {String}   selector   Element selector
 */
const isDisplayed = (selector) => $(selector).isDisplayed();

/**
 * Check the title of the current browser window
 */
const getTitle = () => browser.getTitle();

/**
 * Get the element from DOM by css selector
 * @param  {String}   selector   Element selector
 */
const getElementBySelector = async (selector) => {
  const element = $(selector);
  return element;
};

/**
 * Get all the element children from DOM by css selector
 * @param  {String}   selector   Element selector
 */
const getElementChildBySelector = async (selector) => {
  const element = $(selector).children;
  return element;
};

/**
 * Get the text of the element from DOM by css selector
 * @param  {String}   selector   Element selector
 */
const getElementTextBySelector = async (selector) => {
  const elementText = $(selector).getText();
  return elementText;
};

/**
 * Get all the elements as array from DOM by css selector
 * @param  {String}   selector   Element selector
 */
const getAllElementsBySelector = async (selector) => {
  const element = $$(selector);
  return element;
};

/**
 * Click the element from DOM by css selector
 * @param  {String}   selector   Element selector
 */
const clickElementBySelector = async (selector) => {
  const element = $$(selector);
  element.click();
};

export {
  isDisplayed,
  getTitle,
  getElementBySelector,
  getElementChildBySelector,
  getElementTextBySelector,
  getAllElementsBySelector,
  clickElementBySelector,
};
