import * as webdriver from 'selenium-webdriver'
import { browser, ExpectedConditions, by, element, ElementFinder } from 'protractor'

export module DropDownElement {
    export class DropDown {
        EC = ExpectedConditions;
        seletor: string;
        $base: ElementFinder;
        typeahead: boolean;

        constructor(cssSeletor) {
            this.seletor = cssSeletor;
            this.$base = element(by.css(this.seletor));
        }

        select(valor: string): void {
            this.$base.all(by.cssContainingText("option", valor)).each((option, index) =>{
                option.getText().then((val =>{
                    if(val === valor){
                        this.$base.all(by.cssContainingText("option", valor)).get(index).click();
                    }
                }))
                .catch((err)=>{
                    console.log(err);
                })
            });
        }
    }
}