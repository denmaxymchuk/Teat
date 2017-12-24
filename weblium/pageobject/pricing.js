const { elements, element, } = require('wd-interface')


class Pricing {
    constructor() {
        this.pageTitle = element('h2')
        this.textAlignLeft = elements('.text-align-left')
        this.textAlignCenter = elements('.text-align-center')
    }

    async getPageTitleText() {
        return await this.pageTitle.getText()
    }

    async getUSDPrice() {
        //беремо другий елемент
        const usdPrice = await this.textAlignLeft.get(2)
        return await usdPrice.getText()
    }

    async getMonthlyPrice() {
        const monthlyPrice = await this.textAlignCenter.get(3)
        return await monthlyPrice.getText()
    }

    async 

}

module.exports = Pricing
