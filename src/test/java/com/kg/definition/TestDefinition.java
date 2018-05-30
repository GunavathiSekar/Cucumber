package com.kg.definition;

import java.util.List;
import org.junit.runner.RunWith;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
public class TestDefinition {
    @Given("^I am at GMail login page$")
    public void given() {
        System.out.println("Given");
    }
    @When("^I open GMail login$")
    public void open(DataTable table) {
        List<List<String>> data = table.raw();
        System.out.println("Total Rows " + data.size());
        // System.out.println(data.get(1).get(1));
        for (int i = 1; i <= data.size() - 1; i++) {
            System.out.println(data.get(i).get(0));
            System.out.println(data.get(i).get(1));
        }

    }
}