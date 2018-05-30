package com.kg.definition;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class MyStepDefinitions {

    @Given ("^I am at Gmail login page$")
	public void given()
		{
		System.out.println("Given");
		}
	@When ("^I fill in username as '(.+)'$")
	public void when(String username)
	{
		System.out.println("When "+username);
		
	}
	@Then ("^I fill in password as '(.+)'$")
	public void and(String password)
	{
		System.out.println("Then "+password);
		
	}

}