
@login1
Feature:test data table 
Scenario: GMail login
Given I am at GMail login page
When I open GMail login
| username 		| password 		|
| Mango 		| Yellow 		|
| Apple 		| Red 			|
| Blackberries 	| Purple 		|

Scenario: GMail login1
Given I am GMail login page
When I GMail login
| user 		| pass 		|
| Man 		| Yell 		|
| App 		| Reds		|
| Black 	| Purp 		|