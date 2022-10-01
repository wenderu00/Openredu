const { I } = inject();
const BasePage = require('./base_page');

class HomePage extends BasePage {
    constructor(){
        super();
        this.iconOpenreduLink = '//a[@title="Openredu"]';
        this.beginLinkActive = '//a[@class="nav-global-button nav-global-button-active simple-navigation-active-leaf" and @title="Início"]';
        this.teachLink = '//a[@title="Ensine"]';
        this.environmentsLink ='//a[@title="Ambientes"]';
        this.appsLink = '//a[@title="Aplicativos"]';
    }

    async isHomePage(){
        I.waitForElement(this.iconOpenreduLink,this.timeout);
        I.waitForElement(this.beginLinkActive,this.timeout);
        I.waitForElement(this.teachLink,this.timeout);
        I.waitForElement(this.teachLink,this.timeout);
        I.waitForElement(this.appsLink,this.timeout);
    }
}

module.exports = new HomePage();
module.exports.HomePage = HomePage;