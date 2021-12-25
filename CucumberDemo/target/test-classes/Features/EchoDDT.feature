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
Feature: Echo trak DDt Scnarios


  @pri1 @login
  Scenario Outline: Login
    Given User is on Echotrack home page
    When User enters Data as "<username>" and "<password>"
    Then An "<error message>" is displayed

    Examples: 
      | username  | password | error message					   |
      | user001	  |  pass123 | Invalid Username/Password |
      | user002   |  pass123 | Invalid Username/Password |

  @tag1  
  Scenario: Login data
    Given User is on Echotrack home page
    When User enters data 
    |emp01|emp01|
    |emp02|emp02|
    |emp03|emp03|
    |emp04|emp04|
    |emp05|emp05|
    Then User is logged in 
    
    
    
    
    
    
    
    
    
    
    