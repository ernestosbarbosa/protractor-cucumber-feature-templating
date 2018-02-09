import * as webdriver from 'selenium-webdriver'
import { element, by, browser, ElementFinder, ElementArrayFinder } from 'protractor'

export module ButtonElement {
  export class Button {
    finder: string;

    constructor(finder: string) {
      this.finder = finder;
    }
    elementByCss(): ElementFinder {
      return element(by.css(this.finder));
    }
    elementAllByCss(): ElementArrayFinder {
      return element.all(by.css(this.finder));
    }
    elementAllByXpath(): ElementArrayFinder {
      return element.all(by.xpath(this.finder));
    }
    elementByXpath(): ElementFinder {
      return element(by.xpath(this.finder));
    }
    clickByText(): webdriver.promise.Promise<void> {
      let $field = element(by.buttonText(this.finder));
      return $field.click();
    }
    clickByClassName(): webdriver.promise.Promise<void> {
      let $field = element(by.className(this.finder));
      return $field.click();
    }
    clickByCss(): webdriver.promise.Promise<void> {
      let $field = element(by.css(this.finder));
      return $field.click();
    }
    clickAllByCss(index: number): webdriver.promise.Promise<void> {
      let $field = element.all(by.css(this.finder));
      return $field.get(index).click();
    }
    clickByXpath(): webdriver.promise.Promise<void> {
      let $field = element(by.xpath(this.finder));
      return $field.click();
    }
    clickAllByXpath(index: number): webdriver.promise.Promise<void> {
      let $field = element.all(by.xpath(this.finder));
      return $field.get(index).click();
    }
    clickById(): webdriver.promise.Promise<void> {
      let $field = element(by.id(this.finder));
      return $field.click();
    }
    isDisplayed(): webdriver.promise.Promise<boolean> {
      let $field = element(by.css(this.finder));
      return $field.isDisplayed();
    }
    isDisplayedByXpath(): webdriver.promise.Promise<boolean> {
      let $field = element(by.xpath(this.finder));
      return $field.isDisplayed();
    }
    isPresentByCss(): webdriver.promise.Promise<boolean> {
      let $field = element(by.css(this.finder));
      return $field.isPresent();
    }
    /*Quando passado um dado atributo ele verifica se o atributo está no button, assim retornando TRUE se ele encontrar ou FALSE se não for encontrado.*/
    getAttribute(attr): webdriver.promise.Promise<boolean> {
      let $field;
      element(by.css(this.finder)).getAttribute(attr).then(function (value) {
        let $field = value;
      });
      return $field;
    }
    getAttributeByCss(attr: string): webdriver.promise.Promise<string> {
      let $field;
      element(by.css(this.finder)).getAttribute(attr).then(function (value) {
        console.log(value);
        let $field = value;
      });
      return $field;
    }
    /*Retorna um texto dentro de um elemento referenciado com um xpath*/
    getTextByXpath(): webdriver.promise.Promise<string> {
      let $field = element(by.xpath(this.finder));
      return $field.getText();
    }
    getTextByCss(): webdriver.promise.Promise<string> {
      let $field = element(by.css(this.finder));
      return $field.getText();
    }
    getAllTextByCss(index?: number): webdriver.promise.Promise<string> {
      if (index == undefined) {
        let $field = element.all(by.css(this.finder));
        return $field.getText();
      } else {
        let $field = element.all(by.css(this.finder));
        return $field.get(index).getText();
      }
    }
    /*Quando passado um propiedade do css esta função retorna o valor encontrado na propriedade*/
    getCssValue(property): webdriver.promise.Promise<string> {
      let $field = element(by.css(this.finder));
      return $field.getCssValue(property);
    }
    getAllCssValue(property: string, index?: number): webdriver.promise.Promise<string> {
      if (index == undefined) {
        let $field = element.all(by.css(this.finder));
        return $field.getCssValue(property);
      } else {
        let $field = element.all(by.css(this.finder));
        return $field.get(index).getCssValue(property);
      }
    }
    isSelectedByXpath(index?: number): webdriver.promise.Promise<Boolean> {
      if (index == undefined) {
        let $field = element(by.xpath(this.finder));
        return $field.isSelected();
      } else {
        let $field = element.all(by.xpath(this.finder));
        return $field.get(index).isSelected();
      }
    }
    isSelectedByCss(index?: number): webdriver.promise.Promise<Boolean> {
      if (index == undefined) {
        let $field = element(by.css(this.finder));
        return $field.isSelected();
      } else {
        let $field = element.all(by.css(this.finder));
        return $field.get(index).isSelected();
      }
    }
    isVisibleByCss(): webdriver.promise.Promise<Boolean> {
      let $field = element(by.css(this.finder));
      return $field.isDisplayed();
    }
    isVisibleByXpath(): webdriver.promise.Promise<Boolean> {
      let $field = element(by.xpath(this.finder));
      return $field.isDisplayed();
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
  }
}