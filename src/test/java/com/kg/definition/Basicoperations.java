package com.kg.definition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;
import static org.junit.Assert.assertEquals;
import com.kg.study.calc;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class Basicoperations {
    long number1,number2;
    calc c=new calc();
    @Given("^print number1 as '(.+)'$")
    public void i_fill_in_number1_as_(long no1)  {
        number1=no1; 
    }
    @Given("^enter number1 as '(.+)'$")
    public void enter_number1_as_(long no1)  {
        number1=no1;  
    }

    @When("^i sum '(.+)'$")
    public void i_sum_(long expected)  {
        long actual=c.sum(number1,number2);
        System.out.println("actual"+actual);
        assertEquals(expected,actual);  
    }

    @When("^i multiply '(.+)'$")
    public void i_multiply_(long expected)  {
        long actual=c.mul(number1,number2);
        System.out.println("actual"+actual);
        assertEquals(expected,actual);  
    }

    @Then("^it should display output$")
    public void it_should_display_the_results()  {  
    }

    @And("^print number2 as '(.+)'$")
    public void i_fill_in_number2_as_(long no2)  {
        number2=no2; 
    }

    @And("^enter number2 as '(.+)'$")
    public void enter_number2_as_(long no2)  {
        number2=no2;
    }
}