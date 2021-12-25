package stepdefination;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

public class AmazonSteps {

	WebDriver driver;

	@Given("User is on Amazon home page")
	public void user_is_on_Amazon_home_page() {
		// Write code here that turns the phrase above into concrete actions

		System.setProperty("webdriver.chrome.driver", "lib//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.amazon.com/");
		driver.manage().window().maximize();

	}

	@When("User searches for {string}")
	public void user_searches_for(String SearchItem) {
		// Write code here that turns the phrase above into concrete actions

		driver.findElement(By.id("twotabsearchtextbox")).sendKeys(SearchItem);
		driver.findElement(By.id("nav-search-submit-button")).click();
	}

	@Then("Results for {string} are displayed")
	public void results_for_are_displayed(String title) {
		// Write code here that turns the phrase above into concrete actions
		if (!driver.getPageSource().contains(title)) {
			driver.close();
			Assert.assertTrue(false);
		} else {
			driver.close();
			Assert.assertTrue(true);
		}
	}

	@When("User sorts by {string}")
	public void user_sorts_by(String criteria) {
	    // Write code here that turns the phrase above into concrete actions

		driver.findElement(By.className("a-button-inner")).click();
		List<WebElement> sortCriteria=driver.findElements(By.cssSelector("li.a-dropdown-item>a"));
		for(WebElement sc:sortCriteria)
		{
			if(sc.getText().equals(criteria))
			{
				sc.click();
				break;
			}
		}	
	}
	@Then("Results are sorted")
	public void results_are_sorted() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Done");
	}

	@When("User filter by {string}")
	public void user_filter_by(String string) {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Done");
	}

	@Then("Results are Filtered")
	public void results_are_Filtered() {
		// Write code here that turns the phrase above into concrete actions
		System.out.println("Done");
	}
	
	@When("User enters {string}")
	public void user_enters(String product) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("twotabsearchtextbox")).sendKeys(product);
		driver.findElement(By.id("twotabsearchtextbox")).sendKeys(Keys.ENTER);
	}

}
