$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/AmazonWithBackground.feature");
formatter.feature({
  "name": "Amazon Search",
  "description": "All scenarios related to search functionality",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.background({
  "name": "Search",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 96.0.4664.45 with binary path C:\\Users\\HP\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANIKET-JACK-PC\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x010FBDE3+2473443]\n\tOrdinal0 [0x01096661+2057825]\n\tOrdinal0 [0x00FA2438+1057848]\n\tOrdinal0 [0x00FC054A+1181002]\n\tOrdinal0 [0x00FBC435+1164341]\n\tOrdinal0 [0x00FB9CAF+1154223]\n\tOrdinal0 [0x00FE9ADF+1350367]\n\tOrdinal0 [0x00FE974A+1349450]\n\tOrdinal0 [0x00FE55AB+1332651]\n\tOrdinal0 [0x00FC2104+1188100]\n\tOrdinal0 [0x00FC2F59+1191769]\n\tGetHandleVerifier [0x01282266+1549718]\n\tGetHandleVerifier [0x0132D4A7+2250711]\n\tGetHandleVerifier [0x0118718B+521403]\n\tGetHandleVerifier [0x01186229+517465]\n\tOrdinal0 [0x0109B79D+2078621]\n\tOrdinal0 [0x0109FB58+2095960]\n\tOrdinal0 [0x0109FC92+2096274]\n\tOrdinal0 [0x010A9541+2135361]\n\tBaseThreadInitThunk [0x766AFA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77237A9E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77237A6E+238]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepdefination.RediffPOM.setUp(RediffPOM.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on Amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.user_is_on_Amazon_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User searches for \"Mobile\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.user_searches_for(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Results for \"Amazon.com : Mobile\" are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.results_for_are_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Sort results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "User sorts by \"Avg. Customer Review\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.user_sorts_by(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Results are sorted",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.results_are_sorted()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"this.driver\" is null\r\n\tat stepdefination.RediffPOM.tearDown(RediffPOM.java:44)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "Search",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 96.0.4664.45 with binary path C:\\Users\\HP\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ANIKET-JACK-PC\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002716.0.1\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x010FBDE3+2473443]\n\tOrdinal0 [0x01096661+2057825]\n\tOrdinal0 [0x00FA2438+1057848]\n\tOrdinal0 [0x00FC054A+1181002]\n\tOrdinal0 [0x00FBC435+1164341]\n\tOrdinal0 [0x00FB9CAF+1154223]\n\tOrdinal0 [0x00FE9ADF+1350367]\n\tOrdinal0 [0x00FE974A+1349450]\n\tOrdinal0 [0x00FE55AB+1332651]\n\tOrdinal0 [0x00FC2104+1188100]\n\tOrdinal0 [0x00FC2F59+1191769]\n\tGetHandleVerifier [0x01282266+1549718]\n\tGetHandleVerifier [0x0132D4A7+2250711]\n\tGetHandleVerifier [0x0118718B+521403]\n\tGetHandleVerifier [0x01186229+517465]\n\tOrdinal0 [0x0109B79D+2078621]\n\tOrdinal0 [0x0109FB58+2095960]\n\tOrdinal0 [0x0109FC92+2096274]\n\tOrdinal0 [0x010A9541+2135361]\n\tBaseThreadInitThunk [0x766AFA29+25]\n\tRtlGetAppContainerNamedObjectPath [0x77237A9E+286]\n\tRtlGetAppContainerNamedObjectPath [0x77237A6E+238]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:78)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:197)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:129)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:647)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepdefination.RediffPOM.setUp(RediffPOM.java:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User is on Amazon home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.user_is_on_Amazon_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User searches for \"Mobile\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.user_searches_for(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Results for \"Amazon.com : Mobile\" are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.results_for_are_displayed(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Filter results",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.step({
  "name": "User filter by \"Brand\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.user_filter_by(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Results are Filtered",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.AmazonSteps.results_are_Filtered()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.close()\" because \"this.driver\" is null\r\n\tat stepdefination.RediffPOM.tearDown(RediffPOM.java:44)\r\n",
  "status": "failed"
});
});