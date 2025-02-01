const helloWorld = require('./helloWorld'); // import the code from the javascript file 

describe('Hello World', function() { // describes what should be happening 
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
