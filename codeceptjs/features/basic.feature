Feature: Business rules
  In order to achieve my goals
  As a persona
  I want to be able to interact with a system

  Scenario: login successfully
    Given I am already in login page
    When I fill username
    And I fill password
    And I click on submit
    Then I can see the homepage
