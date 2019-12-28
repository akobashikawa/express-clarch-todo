module.exports = function addItemUseCaseMaker(User) {
    return function addItemUseCase({name}) {
        const user = new User();
        const item = user.addItem({name});
        return item;
    };
};