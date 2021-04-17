export default class Section {
    constructor ({
                     // items,
                     renderer}, containerSelector) {
        // this._items = items
        this._renderer = renderer;
        this._containerSelector = containerSelector;
    }

    renderItems(items) {
        items.forEach((item) => {
            this._renderer(item);
        });
    }

    addItemPrepend(element) {
        this._containerSelector.prepend(element);
    }
}