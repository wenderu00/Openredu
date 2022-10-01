const { I } = inject();
const BasePage = require('./base_page');

class HomePage extends BasePage {
    constructor(){
        super();
        this.iconOpenreduLink = '//a[@title="Openredu"]';
    }

    async isHomePage(){
        I.waitForElement(this.iconOpenreduLink,this.timeout);
    }
}

module.exports = new HomePage();
module.exports.HomePage = HomePage;