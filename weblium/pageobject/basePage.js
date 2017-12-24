const {elements, element, client} = require('wd-interface')
const footer = require('./footer')

class BasePage {
    constructor() {
        this.browser = client().chrome()
        this.footer = new footer()


    }
    async goToBase() {
        await this.browser.goTo('https://weblium.com/')
    }

    async closeBrowser() {
        await this.browser.closeBrowser()
    }

    async returnCarrenturl() {
        return await this.browser.getUrl()
    }

    async fromfooterToPricing() {
        return await this.footer.clickPricing()

    }

    async fromfooterToAbout() {
        await this.footer.clickAbout()
    }

    async fromfooterToPortfolio () {
        //ваш код
    }
}

module.exports = BasePage