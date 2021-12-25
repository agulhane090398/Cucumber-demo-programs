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
Feature: Rediff Scenario

  @tag1
  Scenario: Valid Login
    Given User is on Rediff home page
    When User enters data as "masterUser" and "masterPassword"
    Then User is navigated to the Mail page

  @tag2
  Scenario: Invalid Login
    Given User is on Rediff home page
    When User enters data as "Looser" and "l_Password"
    Then An error "Temporary error occured[#5002], please try again." is displayed on the page
    
    
 	@Reg
 	Scenario: Registration
 	 Given User is on Rediff home page
 	 And User is navigated to ragistration page
   When User enters data following data
   |name|xyz|
   |email|xyz@gmail.com|
   |gender|f|
   |country|India|
   Then User is registred successfully
 







