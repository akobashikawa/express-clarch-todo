module.exports = function updateItemControllerMaker(updateItemUseCase) {
    return async function updateItemController(request) {
      const id = request.params.id;
      const name = request.body.name;
      const response = await updateItemUseCase({id, name});
      return response;
    };
};