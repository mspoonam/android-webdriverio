//client.click('android=new UiSelector().resourceId("com.shaadi.android:id/SignInWithProgressbar")')

var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config = require('./helpers/desiredCapabilities').options;
var client = webdriverio.remote(config);


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