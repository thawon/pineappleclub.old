describe("Simple E2e Test", function() {
  it("Should open the front page and check", function() {    
	var ptor = protractor.getInstance();
	ptor.driver.get("http://127.0.0.1:3000/#/");
	ptor.sleep(2000);
	expect(browser.getTitle()).toEqual("Pineapple Club");
  });
});