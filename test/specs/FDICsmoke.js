const ListPage = require('../pageobjects/list.page')
const BankInfo = require('../pageobjects/bankinformation.page')

describe('Smoke Tests', () => {

    it('Performs smoke test for FDIC Faile Bank List', async () => {

        //verify page load
        await ListPage.navigate();

        await browser.maximizeWindow();

        await expect(ListPage.pageHeader).toBeDisplayed();

        await expect(ListPage.bankList).toBeDisplayed();

        //verify basic navigation of pages
        const page = await ListPage.chosenPageNumber('2');

        await page.waitForClickable();

        await page.click();

        await expect(page).toHaveAttr('class','paginate_button current');

        //verify search functionality and link redirection
        const bankName = 'Silicon Valley Bank'

        await ListPage.search(bankName);

        const link = await ListPage.chosenListItem(bankName);

        await link.click();

        await expect(BankInfo.chosenPageHeader(bankName)).toBeDisplayed();
    })

})
