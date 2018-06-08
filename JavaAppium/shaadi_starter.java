import io.appium.java_client.android.AndroidDriver;
import java.net.MalformedURLException;
import java.net.URL; 
import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.Test;

public class MyTestClass {
        AndroidDriver dr;
        @Test 
        public void testMyApp() throws MalformedURLException{ 

                DesiredCapabilities capabilities = new DesiredCapabilities(); 
                capabilities.setCapability("deviceName", "CVH5TC14002160"); 
                capabilities.setCapability("platformVersion", ""); 
                capabilities.setCapability("platformName", "Android"); 
                capabilities.setCapability("appPackage", "com.shaadi.android");
                capabilities.setCapability("appActivity", "com.shaadi.android.SplashScreenActivity"); 
                dr = new AndroidDriver(new URL("http://90.0.1.205:4723/wd/hub"), capabilities); // here         90.0.1.205 is the current machine ip address         
                dr.findElement(By.id("android:id/button1")).click();
        }
}
