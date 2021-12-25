package tests;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

//@RunWith(Cucumber.class)
//@CucumberOptions(
//		
//		dryRun=true,
//		strict=true,
//		monochrome = true,
//		features="src/test/resources/Features",
//		glue="stepdefination",
//		plugin= {"pretty" , "html:html-report"},
//		//tags= {"@login" }
//		tags= {"@login or @pri1" }
//		//tags= {"@login and pri1" }
//		//tags= {"not @login" }
//		)
//public class TestRunner {
//
//}


@RunWith(Cucumber.class)
@CucumberOptions(
		
		//dryRun=true,
		strict=true,
		monochrome = true,
		features="src/test/resources/Features/RediffLoginRegPOM.feature",
		glue="stepdefination",
		plugin= {"pretty" , "html:html-report"}
		//tags= {"@login or @pri1" }
		)
public class TestRunner {

}


//@RunWith(Cucumber.class)
//@CucumberOptions(
//		
//		//dryRun=true,
//		strict=true,
//		monochrome = true,
//		features="src/test/resources/Features/AmazonWithBackground.feature",
//		glue="stepdefination",
//		plugin= {"pretty" , "html:html-report"}
//		//tags= {"@login or @pri1" }
//		)
//public class TestRunner {
//
//}



//@RunWith(Cucumber.class)
//@CucumberOptions(
//		
//		//dryRun=true,
//		strict=true,
//		monochrome = true,
//		features="src/test/resources/Features/",
//		glue="stepdefination",
//		plugin= {"pretty" , "html:html-report"}
//		
//		)
//public class TestRunner {
//
//}
