package stepdefination;

import static org.testng.Assert.assertEquals;

import java.util.Map;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import pageExtentionModel.*;
import utilities.WebBrowser;

public class RediffPOM {

	WebDriver driver;
	ReddifLogin lg;
	RediffReg rg;
	
	/*Below is Hook
	 * it is executed before and after every senario
	 * we can also use tag in hook to manage various hooks 
	 * eg @Before("@Login or @pri1")
	 * 
	 * one can have  multiple hooks or tagged hooks
	 */
	@Before
	public void setUp()
	{
		System.setProperty("webdriver.chrome.driver", "lib//chromedriver.exe");
		
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		
		lg=new ReddifLogin(driver);
		rg=new RediffReg(driver);
	}
	
	@After
	public void tearDown()
	{
		driver.close();
	}
	
	@Given("User is on Rediff home page")
	public void user_is_on_Rediff_home_page() {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://mail.rediff.com/cgi-bin/login.cgi");
	}

	@When("User enters data as {string} and {string}")
	public void user_enters_data_as_and(String uname, String pwd) {
	    // Write code here that turns the phrase above into concrete actions
		lg.login(uname, pwd);
	}

	@Then("User is navigated to the Mail page")
	public void user_is_navigated_to_the_Mail_page() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Done");
	}

	@Then("An error {string} is displayed on the page")
	public void an_error_is_displayed_on_the_page(String expError) {
	    // Write code here that turns the phrase above into concrete actions
		String actError=lg.getError();
		assertEquals(actError, expError);
	}

	@Given("User is navigated to ragistration page")
	public void user_is_navigated_to_ragistration_page() {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://mail.rediff.com/cgi-bin/login.cgi");
		lg.navigateToRegistration();
	}

	@When("User enters data following data")
	public void user_enters_data_following_data(DataTable dataTable) {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
	    // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
	    // Double, Byte, Short, Long, BigInteger or BigDecimal.
	    //
	    // For other transformations you can register a DataTableType.
		Map<String, String> data=dataTable.asMap(String.class, String.class);
		rg.regiter(data.get("name"), data.get("email"), data.get("gender"), data.get("country"));
	}

	@Then("User is registred successfully")
	public void user_is_registred_successfully() {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Done");
	}

}
