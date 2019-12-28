module.exports = function getItemsUseCaseMaker(User) {
    return function getItemsUseCase() {
        const user = new User();
        const items = user.getItems();
        return items;
    };
};