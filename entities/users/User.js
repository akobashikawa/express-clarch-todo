module.exports = function UserMaker({getItems, addItem}) {
    return function User() {
        this.getItems = getItems;
        this.addItem = addItem;
    };
};