import { Helper, browser, ExpectedConditions } from '../../src/browser/browser'
import { Given, When, Then } from 'cucumber'
import * as c from 'chai'
import { HomePage } from '../../src/page-objects/home.po';
import { DialogPage } from '../../src/page-objects/dialog.po';
c.use(require("chai-as-promised"));
let expect = c.expect;
let homePage = HomePage.page();
let dialogPage = DialogPage.page();

Given(/^I went to menu (.*), submenu (.*)$/, async (menu: string, subMenu: string) => {
  await homePage.clickMenu(menu);
  await homePage.clickSubMenu(subMenu);
});

When(/^I fill the input field with (.*)$/, async (text: string) => {
  await browser.wait(ExpectedConditions.presenceOf(dialogPage.$input.elementByCss())).then(() => {
    dialogPage.$input.sendKeys(text);
  })
});

When(/^select the Pick one option$/, async () => {
  await dialogPage.$pickOne.clickByCss();
});

Then(/^should display a modal with the message (.*)$/, async (text: string) => {
  await browser.wait(ExpectedConditions.presenceOf(dialogPage.$dialogTitleResult.elementByCss())).then(() => {
    dialogPage.$dialogTitleResult.getTextByCss().then(title => {
      expect(title).to.contain(text);
    })
  })
});
