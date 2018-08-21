package definition;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class MyStepDefinitions {

    @Given("^I am at mail login page$")
    public void i_am_at_mail_login_page()  {
       
    }

    @When("^I fill in username ad '(.+)'$")
    public void i_fill_in_username_ad_(String username)  {
        System.out.println(username);
       
    }

    @Then("^I fill in password as '(.+)'$")
    public void i_fill_in_password_as_(String password)  {
        System.out.println(password);
       
    }

}