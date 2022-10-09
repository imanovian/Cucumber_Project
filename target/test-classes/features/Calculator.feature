Feature: This feature will be creating a calculator for adding

  Scenario: Adding two numbers
    Given i have a calculator
    When I add 4 and 5
    Then I should get result as 9

  Scenario Outline: To Add two numbers
    Given i have a calculator
    When I add <int1> and <int2>
    Then I should get result as <result>

    Examples: 
      | int1 | int2 | result |
      |    2 |    3 |      5 |
      |    3 |    4 |      7 |
      |    5 |    6 |     11 |

  Scenario: To add two numbers
    Given: i have a calculator
    When I add below numbers
      | 3 |
      | 2 |
      | 5 |
      | 4 |
      | 3 |
    Then I should get result as 17
