const { element, elements } = require('wd-interface')

const Pricing = require ('./pricing')


class Footer {
    constructor() {
        this.footerSelector = '.row-wrapper'
    }

    async clickAbout() {
        const footer = await elements(this.footerSelector).get(21)
        const about = await footer.getElements('a').get(3)
        await about.click()

    }

    async clickPricing() {
        const footer = await elements(this.footerSelector).get(21)
        const pricing = await footer.getElements('a').get(1)
        await pricing.click()
        return new Pricing()
    }

    async clickPortfolio() {
        const footer = await elements(this.footerSelector).get(21)
        const portfolio = await footer.getElements('a').get(2)
        await portfolio.click()


    }
}

module.exports = Footer