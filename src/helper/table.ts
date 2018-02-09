import * as webdriver from 'selenium-webdriver'
import { ElementArrayFinder, ElementFinder, by, element, promise } from 'protractor'

export module TableHelper {
    export class Table {
        tableSelector: string;

        constructor(tableSelector: string = 'table') {
            this.tableSelector = tableSelector;
        }

        rows(): webdriver.promise.Promise<ElementArrayFinder[]> {
            let $table = element(by.css(this.tableSelector));
            let $tbody = $table.element(by.css('tbody'));
            let $rows = $tbody.all(by.css('tr'));
            return $rows.then(($rowsArray) => {
                let $columnsArray: ElementArrayFinder[] = new Array<ElementArrayFinder>();
                ($rowsArray as any[]).forEach(($row) => {
                    let $columns = $row.all(by.css('td'));
                    $columnsArray.push($columns);
                })
                return $columnsArray;
            });
        }

        getCell(index: { row: number, column: number }): webdriver.promise.Promise<ElementFinder> {
            return this.rows().then(($rowList) => {
                return $rowList[index.row].get(index.column);
            });
        }

        getCellText(index: { row: number, column: number }): webdriver.promise.Promise<string> {
            return this.rows().then(($rowList) => {
                return $rowList[index.row].get(index.column);
            }).then(($cell) => {
                return $cell.getText();
            })
        }
        getCellCssValue(index: { row: number, column: number, cssValue: string }): webdriver.promise.Promise<string> {
            return this.rows().then(($rowList) => {
                return $rowList[index.row].get(index.column);
            }).then(($cell) => {
                return $cell.getCssValue(index.cssValue);
            })
        }

        getCellAttribute(index: { row: number, column: number, attr: string }): webdriver.promise.Promise<string> {
            return this.rows().then(($rowList) => {
                return $rowList[index.row].get(index.column);
            }).then(($cell) => {
                return $cell.getAttribute(index.attr);
            })
        }

        informationExists(searchedInfo: string, searchedColumnIndex: number): webdriver.promise.Promise<boolean> {
            return this.searchInfo({ searchedInfo: searchedInfo, searchedColumnIndex: searchedColumnIndex }, 0)
                .then(($elements: ElementFinder[]) => {
                    if ($elements.length > 0) {
                        return true;
                    } else {
                        return false;
                    }
                }, () => {
                    return false;
                });
        }

        searchInfo(filter: { searchedInfo: string, searchedColumnIndex: number }, returnColumnIndex: number): promise.Promise<{}> {
            let deferred = promise.defer();
            this.rows().then(($rowList) => {
                let searchPromises: promise.Promise<ElementFinder>[] = [];
                $rowList.forEach(($row) => {
                    searchPromises.push($row.get(filter.searchedColumnIndex).getText().then((texto: string) => {
                        if (texto == filter.searchedInfo) {
                            return $row.get(returnColumnIndex);
                        }
                        return undefined;
                    }));
                });

                promise.all(searchPromises).then((promiseResult: ElementFinder[]) => {
                    promiseResult = promiseResult.filter((value) => {
                        return value != undefined;
                    });
                    if (promiseResult.length > 0) {
                        return promiseResult;
                    } else {
                        return null;
                    }
                }).then((result: ElementFinder[]) => {
                    deferred.fulfill(result);
                });
            })
            return deferred.promise;
        }

        getTextFrom(filter: { searchedInfo: string, searchedColumnIndex: number }, returnColumnIndex: number): promise.Promise<string> {
            return this.searchInfo(filter, returnColumnIndex).then(($element: ElementFinder[]) => {
                return $element[0].getText();
            });
        }
    }
}