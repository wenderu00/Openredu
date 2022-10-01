const { I, LoginPage, HomePage } = inject();

// login successfully begin

Given('I am already in login page', async () => {
  await LoginPage.accessLoginPage();
});

When('I fill username', async () => {
  await LoginPage.fillLogin(process.env.USER_LOGIN);
});

When('I fill password', async ()=>{
  await LoginPage.fillPassword(process.env.USER_PASSWORD);
})

When('I click on submit', async ()=>{
  await LoginPage.clickOnSubmit();
})

Then('I can see the homepage',async ()=>{
  await HomePage.isHomePage();
})

// login successfully end

//logout successfully begin

Given('I am already inside the Openredu',async ()=>{
  await LoginPage.accessLoginPage();
  await LoginPage.fillLogin(process.env.USER_LOGIN);
  await LoginPage.fillPassword(process.env.USER_PASSWORD);
  await LoginPage.clickOnSubmit();
})

Given('I already in homepage',async ()=>{
  await HomePage.isHomePage();
})

When('I click on profile menu button', async ()=>{
  await HomePage.clickOnProfileMenu();
})

When('I click on exit option',async ()=>{
  await HomePage.clickOnExitOption();
})

Then('I can see the loginpage', async ()=>{
  await LoginPage.isLoginPage();
})

//logout successfully end
