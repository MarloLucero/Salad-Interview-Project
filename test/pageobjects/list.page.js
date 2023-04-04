//failed-bank-list Page
const Page = require('./page');

class ListPage extends Page {

    //Selectors
    get pageHeader() {
        return $('//h1[contains(text(),"Failed Bank List")]');
    }
    get searchListingInput() {
        return $('//div[@id="DataTables_Table_0_filter"]//input');
    }
    get bankList() {
        return $('//table[@id="DataTables_Table_0"]');
    }
    get downloadDataLink() {
        return $('//a[@href="banklist.csv"]');
    }
    async chosenPageNumber(pageNumber) {
        return $('//div[@id="DataTables_Table_0_paginate"]/span/a[contains(text(),\'' + pageNumber + '\')]');
    }
    async chosenListItem(bankName) {
        return $('//tr/td/a[contains(text(),\'' + bankName + '\')]');
    }

    //Methods
    async navigate() {
        browser.url('https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list');
    }

    async search(input) {
        this.searchListingInput.waitForClickable();
        this.searchListingInput.setValue(input);
    }
}

module.exports = new ListPage();

