module.exports = function addItemControllerMaker(addItemUseCase) {
    return async function addItemController(request) {
      const name = request.body.name;
      const response = await addItemUseCase({name});
      return response;
    };
};