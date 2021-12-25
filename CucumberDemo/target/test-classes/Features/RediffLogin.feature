#Author: your.email@your.domain.com
#Keywords Summary :
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag
Feature: As a registered user
I want to be able to login to Rediffmail
So that i can access my mailbox

Various scenarios to test the login functionality

  @tag1
  Scenario: Valid Login
    Given User is on Rediffmail home page
    When User enters "masterUser" and "masterPassword"
    And User clicks on sign in button
    Then User is navigated to the Inbox page

  @tag2
  Scenario: Invalid Login
    Given User is on Rediffmail home page
    When User enters "Looser" and "l_Password"
    And User clicks on sign in button
    Then An error "Temporary error occured[#5001], please try again." is displayed 

