import { Helper, Elements, element, by } from '../browser/browser'

export class DialogPage {

    $input = Elements.textField('[placeholder="What\'s your name?"]');
    $pickOne = Elements.button('[class="mat-raised-button"]');

    $dialogTitleResult = Elements.textField('h1.mat-dialog-title');

    static page() {
        return new DialogPage();
    }
}