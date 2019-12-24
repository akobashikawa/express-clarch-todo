module.exports = function helloUseCaseAdapter({ Hello }) {
  return function sayHelloUseCase(name) {
    const hello = new Hello({});
    const greeting = hello.getGreeting();
    return `${greeting} ${name}`;
  };
};