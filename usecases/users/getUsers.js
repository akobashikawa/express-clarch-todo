module.exports = function getUsersUseCaseAdapter({ User }) {
    return function getUsers() {
        const user = new User({});
        const items = [];
        return items;
    };
};