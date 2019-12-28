module.exports = function getItemsControllerMaker({ getItemsUseCase}) {
    return async function getItemsController(request) {
        const response = await getItemsUseCase();
        return response;
    };
};