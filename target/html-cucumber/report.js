$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_the_Login_Link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This sceanrio is to define the failure path",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter the incorrect username and passowrd",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_enter_the_incorrect_username_and_passowrd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the Login Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_click_on_the_Login_Button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});