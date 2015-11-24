describe('Login Test', function() {

  describe('When I push the submit button', function() {

    var username = '';
    var password = '';

    beforeEach(function() {
      browser.get('/');

      var usernameInput = element.all(by.css('input')).first();
      usernameInput.sendKeys('aspire19');

      var passwordInput = element.all(by.css('input')).last();
      passwordInput.sendKeys('aspire19!');

      username = element.all(by.model('vm.user.username')).first();
      password = element.all(by.model('vm.user.password')).first();
    });

    it('Validate input box value using regex', function() {
      var comments = element.all(by.css('input'));
      expect(username.getAttribute('value')).toMatch(/^[0-9a-zA-Z]+/);
      expect(password.getAttribute('value')).toMatch(/^[0-9a-zA-Z]+/);
    });

    it('Validate length of input box', function() {
      expect(username.getAttribute('value').then(function(text) {
        return text.length
      })).toBeGreaterThan(6);
      expect(password.getAttribute('value').then(function(text) {
        return text.length
      })).toBeGreaterThan(6);
    });

  });

});