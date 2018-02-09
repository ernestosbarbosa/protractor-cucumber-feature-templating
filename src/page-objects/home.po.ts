import { Helper, Elements, element, by } from '../browser/browser'

export class HomePage {

    clickMenu(menuItem: string) {
        return Elements.button('[aria-label="' + menuItem + '"]').clickByCss();
    }

    clickSubMenu(menuItem: string) {
        return Elements.button('[href="/components/' + menuItem + '"]').clickByCss();
    }

    static page() {
        return new HomePage();
    }
}