module.exports = function deleteItemUseCaseMaker(User) {
    return function deleteItemUseCase(id) {
        const user = new User();
        const item = user.deleteItem(id);
        return item;
    };
};