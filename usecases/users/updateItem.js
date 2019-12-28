module.exports = function updateItemUseCaseMaker(User) {
    return function updateItemUseCase({id, name}) {
        const user = new User();
        const item = user.updateItem({id, name});
        return item;
    };
};