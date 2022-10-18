const { I, LoginPage, HomePage } = inject();

// create account with already exists username begin

When('I click on create account button', async ()=>{
    await LoginPage.clickOnCreateAccount();
})

When('I fill name', async ()=>{
    await LoginPage.fillFirstName(process.env.USER_FIRST_NAME);
})

When('I fill invalid name', async ()=>{
    await LoginPage.fillFirstName("test#");
})

When('I fill name with spaces on begin', async ()=>{
    await LoginPage.fillFirstName("     test");
})

When('I fill name with spaces on end', async ()=>{
    await LoginPage.fillFirstName("test     ");
})

When('I fill last name', async ()=>{
    await LoginPage.fillLastName(process.env.USER_LAST_NAME);
})

When('I fill invalid last name', async ()=>{
    await LoginPage.fillLastName("test#");
})

When('I fill last name with spaces on begin', async ()=>{
    await LoginPage.fillLastName("    test");
})

When('I fill last name with spaces on end', async ()=>{
    await LoginPage.fillLastName("test    ");
})

When('I fill email', async ()=>{
    await LoginPage.fillEmail(process.env.USER_EMAIL);
})

When('I fill invalid email', async ()=>{
    await LoginPage.fillEmail('aaa');
})

When('I fill email confirmation', async ()=>{
    await LoginPage.fillEmailConfirmation(process.env.USER_EMAIL);
})

When('I fill username of create account', async ()=>{
    await LoginPage.fillLoginCreateUser(process.env.USER_LOGIN);
})

When('I fill username of create account with special characters', async ()=>{
    await LoginPage.fillLoginCreateUser("@@@@@");
})

When('I fill username of create account with space character at the beginning', async ()=>{
    await LoginPage.fillLoginCreateUser(" spacebeginning");
})

When('I fill username of create account with space character at the end', async ()=>{
    await LoginPage.fillLoginCreateUser("spaceend ");
})

When('I fill password of create account', async ()=>{
    await LoginPage.fillPasswordCreateUser(process.env.USER_PASSWORD);
})

When('I fill password confirmation', async ()=>{
    await LoginPage.fillPasswordConfirmation(process.env.USER_PASSWORD);
})

When('I fill password confirmation with an invalid password', async ()=>{
    await LoginPage.fillPasswordConfirmation(111);
})

When('I fill password of create account with a short password', async ()=>{
    await LoginPage.fillPasswordCreateUser(1);
})

When('I fill password confirmation with a short password', async ()=>{
    await LoginPage.fillPasswordConfirmation(1);
})

When('I fill correct answer', async ()=>{
    await LoginPage.fillHumanizer();
})

When('I fill correct answer wrongly', async ()=>{
    await LoginPage.fillHumanizer("neebla respondere");
})

When('I click on EULA checkbox', async ()=>{
    await LoginPage.clickOnEula();
})

When('I click on register button', async ()=>{
    await LoginPage.clickOnRegister();
})


// create account with already exists username end