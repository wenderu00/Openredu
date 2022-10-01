@all
@alternative_login
Feature: alternative login
    In order to acess Openredu
    As a user
    I want to be able to interact with a system

    Scenario: login without username and password
        Given I am already in login page
        When I click on submit
        Then I can see the error login message "Informe seu login e senha"

    Scenario: Login without username
        Given I am already in login page
        When I fill password
        And I click on submit
        Then I can see the error login message "login ou e-mail não pode ficar em branco"

    Scenario: Login without password
        Given I am already in login page
        When I fill username
        And I click on submit
        Then I can see the error login message "senha não pode ficar em branco"

    Scenario: Login with wrong username
        Given I am already in login page
        When I fill wrong username
        And I fill password
        And I click on submit
        Then I can see the error login message "login ou e-mail não encontrado"

    Scenario: Login with wrong password
        Given I am already in login page
        When I fill username
        And I fill wrong password
        And I click on submit
        Then I can see the error login message "senha inválida"