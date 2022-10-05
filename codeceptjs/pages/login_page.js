const { I } = inject();
const fs = require('fs');
const YAML = require('yamljs');
const BasePage = require('./base_page');
const FIELD_VALUE = "<VALUE>";
const humanizer  = YAML.parse(fs.readFileSync("../config/locales/humanizer.pt-BR.yml").toString());

class LoginPage extends BasePage{
    constructor(){
        super();
        this.inputLogin = '#user_session_login';
        this.inputPassword = '#user_session_password';
        this.buttonSubmit = '//button[@class="bt active"]';
        this.errorMessage = '//li[@class="error-message" and text()="<VALUE>"]';
        this.createAccountButton = '//div[@class="criarconta"]';
        this.inputFirstName = '#user_first_name';
        this.inputLastName ='#user_last_name';
        this.inputEmail = '#user_email';
        this.inputEmailConfirmation = '#user_email_confirmation';
        this.inputLoginCreateUser = '#user_login';
        this.inputPasswordCreateUser = '#user_password';
        this.inputPasswordConfirmation = '#user_password_confirmation';
        this.inputHumanizer = '#user_humanizer_answer';
        this.humanizeQuestion = '//label[@class="title" and @for="user_humanizer_answer"]';
        this.checkboxEula = '#user_tos';
        this.submitButtonCreateUser = '#bt_enviar';
        this.humanizer= humanizer;
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

    async fillFirstName(firstName){
        I.waitForElement(this.inputFirstName,this.timeout);
        I.fillField(this.inputFirstName,firstName);
    }

    async fillLastName(lastName){
        I.waitForElement(this.inputLastName,this.timeout);
        I.fillField(this.inputLastName,lastName);
    }

    async fillEmail(email){
        I.waitForElement(this.inputEmail,this.timeout);
        I.fillField(this.inputEmail,email);
    }

    async fillEmailConfirmation(email){
        I.waitForElement(this.inputEmailConfirmation, this.timeout);
        I.fillField(this.inputEmailConfirmation,email);
    }

    async fillLoginCreateUser(login){
        I.waitForElement(this.inputLoginCreateUser,this.timeout);
        I.fillField(this.inputLoginCreateUser,login);
    }

    async fillPasswordCreateUser(password){
        I.waitForElement(this.inputPasswordCreateUser,this.timeout);
        I.fillField(this.inputPasswordCreateUser,password);
    }

    async fillPasswordConfirmation(password){
        I.waitForElement(this.inputPasswordConfirmation,this.timeout);
        I.fillField(this.inputPasswordConfirmation,password);
    }

    async fillHumanizer(){
        const question = await I.grabTextFrom(this.humanizeQuestion)
        let answer;
        this.humanizer["pt-BR"]["humanizer"]["questions"].forEach(captcha => {
            if(captcha["question"]==question){
                if (captcha["answers"]) answer = captcha["answers"][0]
                else answer = captcha["answer"]
            }
        });

        I.fillField(this.inputHumanizer,answer);
    }

    async clickOnEula(){
        I.waitForElement(this.checkboxEula,this.timeout);
        I.click(this.checkboxEula);
    }

    async clickOnRegister(){
        I.waitForElement(this.submitButtonCreateUser,this.timeout);
        I.click(this.submitButtonCreateUser);
    }

    async clickOnSubmit(){
        I.waitForElement(this.buttonSubmit,this.timeout);
        I.click(this.buttonSubmit);
    }

    async clickOnCreateAccount(){
        I.waitForElement(this.createAccountButton,this.timeout);
        I.click(this.createAccountButton);
    }

    async iCanSeeErrorMessage(errorMessage){
        I.waitForElement(this.errorMessage.replace(FIELD_VALUE,errorMessage),this.timeout);
    }


}

module.exports = new LoginPage();
module.exports.LoginPage = LoginPage;