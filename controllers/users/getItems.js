module.exports = function getItemsControllerMaker({usecase}) {
    return async function getItemsController() {
        const items = await usecase();
        return items;
    };
};