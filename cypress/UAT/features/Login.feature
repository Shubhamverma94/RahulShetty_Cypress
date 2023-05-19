# Feature: To validate OrangeHRM

# # Generally we dont do this 
# # Scenario: Validate Login With valid credential
# # Given open the browser and navigate to the Login Page
# # #Given is used  when you have a pre-condition
# # When Enter the Name Admin
# # #When is used when you want to  perform some action
# # And Enter the Password admin123
# # And Click on Login Button
# # Then Login should be successfull
# # #Then is like post-condition to find out the result
# # #But-->extra info on the result

# # Do it in this manner
# # Background: OrangeHRM

# @PositiveTesting
# Scenario Outline: Test OrangeHRM with valid and invalid case
# Given Open the Browser
# When Enter the Name <name>
# And Enter the Password <pwd>
# And Click on Login Button
# Then Login should be successfull
# # can use but but making seperate will work good
# # But In invalid case it should display Invalid Credentials

# Examples:
    # | name   | pwd       | 
    # | Admin  | admin123  |
    # | Admin  | admin123  |

# @NegativeTesting
# Scenario: Test OrangeHRM with Invalid Data
# Given Open the Browser
#     When Enter the invalid name shubham
#     And Enter the invalid pwd shubham
#     And Click on Login Button
#     Then it should display Invalid Credentials

#     #run -e TAGS="@positive" --headed

Feature: To validate OrangeHRM
  Background: OrangeHRM
    Given open the browsers and Navigate to the Login Page
  @PositveTesting
  Scenario Outline: Test OrangeHRM with Valid and invalid case
    When Enter the Name <name>
    And Enter the password <pwd>
    And Click on Loginbtn
    Then Login should be Successfull
    Examples:
      | name  | pwd      |
      | Admin | admin123 |
      | Admin | admin123 |
  @NegativeTesting
  Scenario: Test OrangeHRM with Invalid data
    When Enter the invalid name shubham
    And Enter the invalid pwd shubh123
    And Click on Loginbtn
    Then it should display Invalid credentials
