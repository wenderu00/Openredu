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
        this.profileMenuButton = '//button[@class="button-default nav-global-button-dropdown dropdown-toggle icon-profile-lightblue_16_18-before" and @data-toggle="dropdown"]';
        this.exitOption = '//a[@title="Sair"]'
    }

    async isHomePage(){
        I.waitForElement(this.iconOpenreduLink,this.timeout);
        I.waitForElement(this.beginLinkActive,this.timeout);
        I.waitForElement(this.teachLink,this.timeout);
        I.waitForElement(this.teachLink,this.timeout);
        I.waitForElement(this.appsLink,this.timeout);
    }

    async clickOnProfileMenu(){
        I.waitForElement(this.profileMenuButton,this.timeout);
        I.click(this.profileMenuButton);
    }

    async clickOnExitOption(){
        I.waitForElement(this.exitOption,this.timeout);
        I.click(this.exitOption);
    }
}

module.exports = new HomePage();
module.exports.HomePage = HomePage;