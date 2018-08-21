package definition;
import com.kg.example.Login;

import static org.junit.Assert.assertThat;

import java.util.List;
import org.junit.runner.RunWith;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class table{
    Login l=new Login();
    @Given("^I am at GMail login page$")
    public void given() {
        System.out.println("Given");
    }
    @When("^I open GMail login$")
    public void open(DataTable table) {
        List<List<String>> data = table.raw();
        System.out.println("Total Rows " + data.size());
        for (int i = 1; i <= data.size() - 1; i++) {
            String name=l.user(data.get(i).get(0));
            String pass=l.pass(data.get(i).get(1));
            assertThat(name, pass, @login1);
            //System.out.println(data.get(i).get(0)+""+data.get(i).get(1));
            //System.out.println(data.get(i).get(1));
        }

    }

    @Given("^I am GMail login page$")
    public void i_am_gmail_login_page(){
        System.out.println("1245");
    }
    @When("^I GMail login$")
    public void i_gmail_login(DataTable tb)  {
       System.out.println("abcde");
    }
}