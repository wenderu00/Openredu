const { I } = inject();
const BasePage = require('./base_page');



class LoginPage extends BasePage{
    constructor(){
        super();
        this.inputLogin = '#user_session_login';
        this.inputPassword = '#user_session_password'
        this.buttonSubmit = '//button[@class="bt active"]'
    }

    async isLoginPage(){
        I.waitForElement(this.inputLogin);
        I.waitForElement(this.inputPassword);
        I.waitForElement(this.buttonSubmit);
    }

    async accessLoginPage(){
        I.amOnPage('/');
    }

    async fillLogin(login){
        I.waitForElement(this.inputLogin,this.timeout);
        I.fillField(this.inputLogin,login);
    }

    async fillPassword(password){
        I.waitForElement(this.inputPassword,this.timeout);
        I.fillField(this.inputPassword,password);
    }

    async clickOnSubmit(){
        I.waitForElement(this.buttonSubmit,this.timeout);
        I.click(this.buttonSubmit);
    }


}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage;