import {CheckBoxElement} from "./checkbox"
import {DropDownElement} from "./dropDown"
import {TextFieldElement} from "./textField"
import {ButtonElement} from "./button"
import {ElementFinder} from 'protractor'

export class Elements {
    static checkBox(finder:ElementFinder){
        return new CheckBoxElement.CheckBox(finder);
    }
    static dropDown(cssSelector:any){
        return new DropDownElement.DropDown(cssSelector);
    }
    static textField(finder:string){
        return new TextFieldElement.TextField(finder);
    }
    static button(finder:string){
        return new ButtonElement.Button(finder);
    }
}
