module.exports = function getUsersControllerAdapter(getUsersUseCase) {
    return async function getUsersController(request) {
        const users = await getUsersUseCase();
        return users;
    };
};