package stepdefination;

import java.util.List;
import java.util.Map;
import io.cucumber.datatable.*;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.*;

public class DemoReg {

	WebDriver driver;
	@Given("User is on DemoReg page")
	public void user_is_on_DemoReg_page() {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "lib//chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("http://demo.automationtesting.in/Register.html");
		driver.manage().window().maximize();

	}

	@When("User enters registration data")
	public void user_enters_registration_data(DataTable dataTable) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.

		
		Map<String,String> data=dataTable.asMap(String.class, String.class);
		driver.findElement(By.cssSelector("input[ng-model=\"FirstName\"]")).sendKeys(data.get("name"));
		driver.findElement(By.cssSelector("input[ng-model=\"EmailAdress\"]")).sendKeys(data.get("email"));
		driver.findElement(By.cssSelector("input[ng-model=\"Phone\"]")).sendKeys(data.get("phone"));
		
		List<WebElement> radios=driver.findElements(By.name("radiooptions"));
		for(WebElement rb:radios)
		{
			if(rb.getAttribute("value").equals(data.get("gender")))
			{
				rb.click();
				break;
			}
		}
	}

	@Then("User is Registered")
	public void user_is_Registered() {
	    // Write code here that turns the phrase above into concrete actions
		driver.close();
	}
	
}
