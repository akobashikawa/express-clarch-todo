module.exports = function UserMaker({getItems}) {
    return function User() {
        this.getItems = getItems;
    };
};