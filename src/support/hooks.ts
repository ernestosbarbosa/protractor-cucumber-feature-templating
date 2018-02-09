import { browser, by } from "protractor";
import { Before, setDefaultTimeout } from "cucumber";

setDefaultTimeout(20 * 1000);

Before(async () => {
    await browser.get(browser.params.home);
});
