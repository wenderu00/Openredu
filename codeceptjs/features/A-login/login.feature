@all
@login
Feature: login
  In order to acess Openredu
  As a user
  I want to be able to interact with a system

  Scenario: login successfully
    Given I am already in login page
    When I fill username
    And I fill password
    And I click on submit
    Then I can see the homepage

  Scenario: logout sucessfully
    Given I am already inside the Openredu
    And I already in homepage
    When I click on profile menu button
    And I click on exit option
    Then I can see the loginpage
