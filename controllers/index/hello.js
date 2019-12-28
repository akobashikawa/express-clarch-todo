module.exports = function helloControllerMaker(helloUseCase) {
  return function (req) {
    const message = helloUseCase('Express');
    const response = { message };
    return response;
  };
};