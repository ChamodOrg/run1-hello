Feature: F1 Greeting

  @story-F1.1
  Rule: Opening the app shows the greeting "Hello, World!"

    Scenario: A visitor opens the app
      Given Vera the visitor has the app address
      When Vera opens the app
      Then the page shows "Hello, World!"

  @story-F1.2
  Rule: The greeting is shown without signing in

    Scenario: A visitor who has not signed in sees the greeting
      Given Vera the visitor has never signed in
      When Vera opens the app
      Then the page shows "Hello, World!"
      And Vera is not asked to sign in

  @story-F1.1
  @negative
  Rule: The page is view only

    Scenario: The page offers nothing to enter
      Given Vera the visitor has opened the app
      Then the page has no field to type a name into
