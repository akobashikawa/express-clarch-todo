module.exports = function UserMaker({getItems, addItem, getItem, updateItem, deleteItem}) {
    return function User() {
        this.getItems = getItems;
        this.addItem = addItem;
        this.getItem = getItem;
        this.updateItem = updateItem;
        this.deleteItem = deleteItem;
    };
};