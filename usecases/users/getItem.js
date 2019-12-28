module.exports = function getItemUseCaseMaker(User) {
    return function getItemUseCase(id) {
        const user = new User();
        const item = user.getItem(id);
        return item;
    };
};