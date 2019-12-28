module.exports = function HelloMaker() {
  return function Hello({ greeting }) {
    this.greeting = greeting || 'Hello';

    this.getGreeting = function () {
      return this.greeting;
    };
  };
};