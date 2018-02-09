import * as webdriver from 'selenium-webdriver'
import {ElementFinder} from 'protractor'

export module CheckBoxElement {
    export class CheckBox {
        filter: ElementFinder;
        constructor(finder: ElementFinder) {
            this.filter = finder;
        }

        select(desiredState?: boolean): webdriver.promise.Promise<void> {
            if (desiredState == null) {
                return this.filter.click();
            }
            return this.filter.isSelected().then((isSelected) => {
                if (desiredState && !isSelected) {
                    return this.filter.click();
                } else if (!desiredState && isSelected) {
                    return this.filter.click();
                }
            });
        }

        isSelected(): webdriver.promise.Promise<boolean> {
            return this.filter.isSelected();
        }
    }
}