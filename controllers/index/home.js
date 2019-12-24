module.exports = function homeControllerAdapter({ sayHelloUseCase }) {
  return function (req) {
    const message = sayHelloUseCase('Express');
    const response = { message };
    return response;
  };
};