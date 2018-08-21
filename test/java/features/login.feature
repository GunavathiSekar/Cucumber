@login
Feature: Mail Login Test

@mytag
Scenario Outline: Test mail Login
Given I am at mail login page
When I fill in username ad '<username>'
Then I fill in password as '<password>'
Examples:
| username | password | 
| sathish  |  12345   |
| dhinesh  |  56789   |