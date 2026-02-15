
//Ini Negative Case

const { test, expect } = require('@playwright/test');

test('Login example', async ({ page }) => {
  //navigate to url
  await page.goto('http://demoaut.katalon.com/');

  //click 'Make Appoitment' button
  await page.click('#btn-make-appointment');

  //input email

  ////*[@id="txt-username"]
  await page.fill('//*[@id="txt-username"]', 'John Doe');

  //input password
  await page.fill('//*[@id="txt-password"]', 'ThisIsNotAPassword');

  //click submit button
  await page.click('#btn-login');
  
});