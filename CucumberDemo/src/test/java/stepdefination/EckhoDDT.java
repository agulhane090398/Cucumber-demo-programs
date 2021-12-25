package stepdefination;

import static org.testng.Assert.assertEquals;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.*;
import io.cucumber.java.en.*;

public class EckhoDDT {

	WebDriver driver;
	@Given("User is on Echotrack home page")
	public void user_is_on_Echotrack_home_page() {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "lib//chromedriver.exe");
		
		driver=new ChromeDriver();
		driver.get("https://www.echotrak.com/Login.aspx?ReturnUrl=%2f");
		driver.manage().window().maximize();
	}

	@When("User enters Data as {string} and {string}")
	public void user_enters_Data_as_and(String uname, String pwd) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("txtCustomerID")).sendKeys(uname);
		driver.findElement(By.id("txtPassword")).sendKeys(pwd);
		driver.findElement(By.name("Butsub")).click();;
	}

	@Then("An {string} is displayed")
	public void an_is_displayed(String errorMgs) {
	    // Write code here that turns the phrase above into concrete actions

		String actError=driver.findElement(By.id("lblMsg")).getText();
		assertEquals(actError, errorMgs);
		driver.close();
	}
	
	@When("User enters data")
	public void user_enters_data(DataTable dataTable) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.

		List<List<String>> data=dataTable.asLists();
		for(List<String> dl:data)
		{
			driver.findElement(By.id("txtCustomerID")).sendKeys(dl.get(0));
			driver.findElement(By.id("txtPassword")).sendKeys(dl.get(0));
			driver.findElement(By.name("Butsub")).click();;
			driver.findElement(By.id("txtCustomerID")).clear();
			driver.findElement(By.id("txtPassword")).clear();
			
		}
		
		//oR
		
//		for(int i=0;i<data.size();i++)
//		{
//			driver.findElement(By.id("txtCustomerID")).sendKeys(data.get(i).get(0));
//			driver.findElement(By.id("txtPassword")).sendKeys(data.get(i).get(0));
//			driver.findElement(By.name("Butsub")).click();
//		}
	}

	@Then("User is logged in")
	public void user_is_logged_in() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Done login");
		driver.close();
	}


}
