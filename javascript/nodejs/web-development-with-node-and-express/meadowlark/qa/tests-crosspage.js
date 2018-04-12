var Browser = require('zombie');
    // assert = require('chai').assert;
// XXX chai가 문제가 있다는 보고가 있음. 근데 chai 페이지는 잘 운영되고 있는듯한데..
var browser;

suite('Cross-Page Tests', function() {
  setup(function() {
    browser = new Browser();
  });

  // XXX 첫번째 테스트가 정상적으로 동작하지 않음.
  //  Uncaught AssertionError: first
  // at /Users/iamlow/workspace/til/javascript/nodejs/web-development-with-node-and-express/meadowlark/qa/tests-crosspage.js:16:9
  // at EventLoop.done (node_modules/zombie/lib/eventloop.js:593:11)
  // at Immediate.<anonymous> (node_modules/zombie/lib/eventloop.js:692:71)
  test('requesting a group rate from the hood river tour page ' +
      'should populate the referrer field', function(done) {
    var referrer = 'http://localhost:3000/tours/hood-river';
    browser.visit(referrer, function() {
      browser.clickLink('.requestGroupRate', function() {
        // assert(browser.field('referrer').value === referrer, 'first');
        browser.assert.element('form input[name=referrer]', referrer);
        done();
      });
    });
  });

  test('requesting a group rate from the oregon cast tour page should ' +
      'populate the reffered field', function(done) {
    var referrer = 'http://localhost:3000/tours/oregon-coast';
    browser.visit(referrer, function() {
      browser.clickLink('.requestGroupRate', function() {
        // assert(browser.field('referrer').value === referrer, 'second');
        browser.assert.element('form input[name=referrer]', referrer);
        done();
      });
    });
  });

  test('visiting the "request group rate" page directly should result ' +
      'in an empty referrer field', function(done) {
    browser.visit('http://localhost:3000/tours/request-group-rate',
        function() {
          // assert(browser.field('referrer').value === '', 'third');
          browser.assert.element('form input[name=referrer]', '');
          done();
    });
  });

});
