import { Given } from 'cucumber';

import checkTitle from '../support/check/checkTitle';
import isDisplayed from '../support/check/isDisplayed';
import openWebsite from '../support/action/openWebsite';

Given(
  /^I open the (url|site) "([^"]*)?"$/,
  openWebsite,
);


Given(
  /^the title is( not)* "([^"]*)?"$/,
  checkTitle,
);

Given(
  /^the element "([^"]*)?" is( not)* displayed$/,
  isDisplayed,
);
