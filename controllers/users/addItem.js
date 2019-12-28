module.exports = function addItemControllerMaker({ addItemUseCase}) {
    return async function addItemController(request) {
      const name = request.name;
      const response = await addItemUseCase({name});
      return response;
    };
};