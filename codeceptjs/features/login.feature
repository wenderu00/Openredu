Feature: Blogin
  In order to acess Openredu
  As a user
  I want to be able to interact with a system

  Scenario: login successfully
    Given I am already in login page
    When I fill username
    And I fill password
    And I click on submit
    Then I can see the homepage
