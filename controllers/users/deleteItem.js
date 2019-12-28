module.exports = function deleteItemControllerMaker(deleteItemUsecase) {
    return async function deleteItemController(request) {
      const id = request.params.id;
      const response = await deleteItemUsecase(id);
      return response;
    };
};