module.exports = function getItemsControllerMaker(getItemsUsecase) {
    return async function getItemsController(request) {
        const response = await getItemsUsecase();
        return response;
    };
};