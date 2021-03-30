export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._items = items;
    }
    // отрисовка всех елементов
    renderItems() {
        this._items.forEach((item) => {
            this._renderer(item);
        })
    }
    // доб. елемент в контейнер
    addItem(element) {
        this._container.prepend(element);
    }


}