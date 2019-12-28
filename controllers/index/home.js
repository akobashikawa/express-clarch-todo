module.exports = function homeControllerMaker(helloUseCase) {
  return function (req) {
    const message = helloUseCase('Express');
    const response = { message };
    return response;
  };
};