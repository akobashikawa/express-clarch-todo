module.exports = function getItemControllerMaker(getItemUsecase) {
    return async function getItemController(request) {
      const id = request.params.id;
      const response = await getItemUsecase(id);
      return response;
    };
};