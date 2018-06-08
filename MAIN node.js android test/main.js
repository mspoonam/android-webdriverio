const wdio = require("webdriverio");
const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.1.0",
    deviceName: "CVH5T15C14002160",
    app: "D:\\shaadi-appium-starter\\5.5.5_v2app-shaadi-debug.apk",
    automationName: "UiAutomator2"
  }
};


const client = wdio.remote(opts);

describe('Poonammmmmmm Testing', function () {

  before(function () {
    this.timeout(5000);
    return client.init();
  });

  afterEach(function () {
    this.timeout(5000);
    return client.click('android=new UiSelector().resourceId("com.shaadi.android:id/button1")');
  });

  after(function () {
    return client.end();
  });
});

// client
//   .init()
//   // .click("~DONE")/
//   .client.click('android=new UiSelector().resourceId("com.shaadi.android:id/button1")')
//   //   .click("~Alert Dialogs")
//   //   .back()
//   //   .back()
//   .end();