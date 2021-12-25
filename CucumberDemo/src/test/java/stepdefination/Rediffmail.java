package stepdefination;


import static org.testng.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Rediffmail {
	WebDriver driver;

	@Given("User is on Rediffmail home page")
	public void user_is_on_Rediffmail_home_page() {
		// Write code here that turns the phrase above into concrete actions

		System.setProperty("webdriver.chrome.driver", "lib//chromedriver.exe");

		driver = new ChromeDriver();
		driver.get("https://mail.rediff.com/cgi-bin/login.cgi");
		driver.manage().window().maximize();
	}

//	@When("User enters valid username and password")
//	public void user_enters_valid_username_and_password() {
//		// Write code here that turns the phrase above into concrete actions
//
//		driver.findElement(By.xpath("//input[@id='login1']")).sendKeys("admin");
//		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("admin");
//	}

	@When("User clicks on sign in button")
	public void user_clicks_on_sign_in_button() {
		// Write code here that turns the phrase above into concrete actions

		driver.findElement(By.xpath("//input[@name=\"proceed\"]")).click();
	}

	@Then("User is navigated to the Inbox page")
	public void user_is_navigated_to_the_Inbox_page() {
		// Write code here that turns the phrase above into concrete actions

		System.out.println("Valid Test is pass");
	}

//	@When("User enters invalid username and password")
//	public void user_enters_invalid_username_and_password() {
//		// Write code here that turns the phrase above into concrete actions
//		driver.findElement(By.xpath("//input[@id='login1']")).sendKeys("gherkin");
//		driver.findElement(By.xpath("//input[@id='password']")).sendKeys("pass");
//	}

	@When("User enters {string} and {string}")
	public void user_enters_and(String username, String password) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='login1']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@id='password']")).sendKeys(password);
	}

//	@Then("An error is displayed on the screen")
//	public void an_error_is_displayed_on_the_screen() {
//		// Write code here that turns the phrase above into concrete actions
//		String errmgs=driver.findElement(By.xpath("//div[@id='div_login_error']")).getText();
//		assertEquals("Temporary error occured[#5001], please try again.", errmgs);
//
//	}
	

	@Then("An error {string} is displayed")
	public void an_error_is_displayed(String expError) {
	    // Write code here that turns the phrase above into concrete actions
		String errmgs=driver.findElement(By.xpath("//div[@id='div_login_error']")).getText();
		assertEquals(expError, errmgs);
	}


}
