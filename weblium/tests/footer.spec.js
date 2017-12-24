
const BasePage = require('../pageobject/basePage')

const { expect } = require('chai')


describe('Landing Links', () => {
    const basePage = new BasePage()

    beforeEach(async () => {
        await basePage.goToBase()

    
    })

    afterEach(async () => {
        await basePage.closeBrowser()
    })

    it('Link pricing', async () => {
        //клікаємо з футера лінку на прайсінг
        const pricing =  await basePage.fromfooterToPricing()
        //перевіряємо що наш поточний урл містить слово 'pricing'
        expect(await basePage.returnCarrenturl()).to.contains('pricing')
        expect(await pricing.getPageTitleText()).to.contains('Pricing')
        expect(await pricing.getUSDPrice()).to.eql('$399')
        expect(await pricing.getMonthlyPrice()).to.eql('$15')
        
        
    });

    it ('Link about', async () => {
        // клікаємо 
        await basePage.fromfooterToAbout()
        expect(await basePage.returnCarrenturl()).to.contains('about')
    
    })
})