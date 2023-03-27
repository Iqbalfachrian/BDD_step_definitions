Feature: Search to Application

    Feature Description

Scenario: Guest want to search all menu with "Zero" keyword on Zero bank

    Given Guest go to zero Online Banking dashboard
    When Guest fill in "zero" keyword in search bar on the web
    Then Guest see all menu with the keyword "zero" on Zero bank search results
