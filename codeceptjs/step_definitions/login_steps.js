const { I, LoginPage, HomePage } = inject();
// Add in your custom step files

Given('I am already in login page', async () => {
  LoginPage.accessLoginPage();
});

When('I fill username', async () => {
  LoginPage.fillLogin(process.env.USER_LOGIN);
});

When('I fill password', async ()=>{
  LoginPage.fillPassword(process.env.USER_PASSWORD);
})

When('I click on submit', async ()=>{
  LoginPage.clickOnSubmit();
})

Then('I can see the homepage',async ()=>{
  HomePage.isHomePage();
})
