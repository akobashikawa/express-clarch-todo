module.exports = function UserAdapter() {
    return function User() {
        this.getItems = function () {
            return [];
        };
    };
};