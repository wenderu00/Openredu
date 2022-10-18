@all
@alternative_create_account
Feature: alternative create account
    In order to acess Openredu
    As a user
    I want to be able to interact with a system

    Scenario: create account with already exists username
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "Por favor, escolha outro login. Este já existe no Openredu."  

    Scenario: create account with already exists email
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "Este e-mail já está cadastrado." 

    Scenario: create account without first name
        Given I am already in login page
        When I click on create account button
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "Informe seu nome"
    
    Scenario: create account with invalid first name
        Given I am already in login page
        When I click on create account button
        And I fill invalid name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O nome pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final."
    
    Scenario: create account with spaces on begin of first name
        Given I am already in login page
        When I click on create account button
        And I fill name with spaces on begin
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O nome pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final."
    
    Scenario: create account with spaces on end of first name
        Given I am already in login page
        When I click on create account button
        And I fill name with spaces on end
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O nome pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final."


    Scenario: create account without last name
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "Informe seu sobrenome."    
    
    Scenario: create account with invalid last name
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill invalid last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O sobrenome pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final."
    
    Scenario: create account with spaces on begin of last name
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name with spaces on begin
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O sobrenome pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final."
    
    Scenario: create account with spaces on end of last name
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name with spaces on end
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O sobrenome pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final."
    
    Scenario: create account without email
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "E-mail muito curto (mínimo de 3 caracteres)."
    
    Scenario: create account with invalid email
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill invalid email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "E-mail inválido."
    @test
    Scenario: create account without email confirmation
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "A confirmação de email não confere" 
    @create_acc_spec_char
    Scenario: Create an account with a special character
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account with special characters
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O login pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final." 

@create_acc_space_start_username
    Scenario: Create an account with a space character at the beginning of the username
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account with space character at the beginning
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O login pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final." 

@create_acc_space_end_username
    Scenario: Create an account with a space character at the end of the username
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account with space character at the end
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "O login pode ser formado apenas por letras, números, traço e sublinhado. Não deixe espaços no início ou final." 

@create_acc_short_pass
    Scenario: create account with a short password
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account with a short password
        And I fill password confirmation with a short password
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "Senha muito curta (mínimo de 6 caracteres)."

@create_acc_wrong_pass_confirm
    Scenario: create account with a short password
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation with an invalid password
        And I fill correct answer
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "A confirmação de senha não confere."

@create_acc_not_accept_eula
    Scenario: create account with a short password
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer
        And I click on register button 
        Then I can see the error login message "Você precisa aceitar os Termos de Uso."

@create_acc_wrong_humanizer
    Scenario: create account with a short password
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I fill correct answer wrongly
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "HUMANIZER BUG: PASS REGARDLESS OF THE ANSWER"

@create_acc_no_humanizer
    Scenario: create account with a short password
        Given I am already in login page
        When I click on create account button
        And I fill name
        And I fill last name
        And I fill email
        And I fill email confirmation
        And I fill username of create account
        And I fill password of create account
        And I fill password confirmation
        And I click on EULA checkbox
        And I click on register button 
        Then I can see the error login message "HUMANIZER BUG: PASS REGARDLESS OF THE ANSWER"