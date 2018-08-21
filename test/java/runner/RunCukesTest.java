package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "..\\example\\src\\test\\java\\features", 
glue = "definition", dryRun = false, strict = true,
tags = {"@login1"},
plugin = { "pretty", "html:target/html", "json:target/cucumber.json" })
public class RunCukesTest {

}