const { I } = inject();
const timeout = 60;

class BasePage {
    constructor(){
        this.timeout = timeout;
    }

    async isCurrentPage(mainElement = null){
        I.waitForElement(mainElement, this.timeout);
    }

    async fillField(field, value, timeout= this.timeout){
        I.waitForElement(field,timeout);
        I.fillField(field, value);
    }
    async click(field,timeout = this.timeout){
        I.waitForElement(field,timeout);
        I.click(field);
    }
    async doubleClick(field,timeout = this.timeout){
        I.waitForElement(field,timeout);
        I.doubleClick(field);
    }

}

module.exports = BasePage;