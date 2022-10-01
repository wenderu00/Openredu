const { I } = inject();
// Add in your custom step files

Given('I am already in login page', async () => {
  I.amOnPage('/');
});

When('I fill username', async () => {
  I.waitForElement('#user_session_login',60);
  I.fillField('#user_session_login','usuario');
  I.wait(10);
});
