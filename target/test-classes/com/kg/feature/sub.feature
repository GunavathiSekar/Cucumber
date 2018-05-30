@sub
Feature: Subtract Test
@sum
Scenario Outline:: Test the Subtraction
Given Get number1 as '<no1>'
And Get number2 as '<no2>'
When i sub '<no1>'-'<no2>'
Then display results

Examples:
| no1 	| no2	|
| 15	| 13	|
| 19	| 16	|