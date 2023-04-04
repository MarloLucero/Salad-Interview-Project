//Failed Bank Information Page
const Page = require('./page');

class BankInfo extends Page {

    //Selectors
    async chosenPageHeader(bankName) {
        return $('//h1[contains(text(),\'' + bankName + '\')]');
    }
}

module.exports = new BankInfo();