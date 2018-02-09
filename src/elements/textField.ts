import * as webdriver from 'selenium-webdriver'
import { element, by, browser } from 'protractor'

export module TextFieldElement {
    export class TextField {
        finder: string;

        constructor(finder: string) {
            this.finder = finder;
        }

        sendKeys(value: string): webdriver.promise.Promise<void> {
            let $field = element(by.css(this.finder));
            $field.clear();
            if (value != '') {
                $field.sendKeys(value);
            }
            return;
        }

        clear(): webdriver.promise.Promise<void> {
            let $field = element(by.css(this.finder));
            return $field.clear();
        }

        getTextByCss(): webdriver.promise.Promise<{}> {
            return element(by.css(this.finder)).getText();
        }

        highlight(type): webdriver.promise.Promise<{}> {
            let elemento;
            if (type == "css") {
                elemento = element(by.css(this.finder));
            } else if (type == "xpath") {
                elemento = element(by.xpath(this.finder));
            }
            return browser.executeScript("arguments[0].style.border = '5px inset yellow'", elemento);
        }
        highlightNone(type): webdriver.promise.Promise<{}> {
            let elemento;
            if (type == "css") {
                elemento = element(by.css(this.finder));
            } else if (type == "xpath") {
                elemento = element(by.xpath(this.finder));
            }
            return browser.executeScript("arguments[0].style.border = 'none'", elemento);
        }

        isDisplayed(): webdriver.promise.Promise<boolean> {
            let $field = element(by.css(this.finder));
            return $field.isDisplayed();
        }

        elementByCss(){
            return element((by.css(this.finder)));
        }
        elementByClassName(){
            return element((by.className(this.finder)));
        }


    }
}