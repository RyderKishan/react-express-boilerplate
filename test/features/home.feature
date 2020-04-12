Feature: Home Screen
  Scenario: I want to see the Home page rendering
    Given I open React Express Boilerplate
    Then I see the header element
    Then I see the footer element
    Then I see the article element
    Then I see the Home container
    Then I see the actions class element
    Then I see 2 action buttons
    Then I see Fetch Results Button
    Then I see Clear Results Button
    Then I see the results class element
    Then I see No Results
  Scenario: I fetch the results
    When I click fetch results button
    Then I see the loader
    Then I see the results populated
    Then I see Clear Results Button Enabled
  Scenario: I Use the search
    Then I enter text
    Then I wait