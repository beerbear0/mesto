export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._popupClickHandler = this._popupClickHandler.bind(this);
        this._popupCloseBtn = this._popup.querySelector('.popup__close-btn');
        this.close = this.close.bind(this);
    }
    // открываем попап
    open() {
        this._popup.classList.add('popup__opened');
        this._popup.addEventListener('mousedown', this._popupClickHandler)
        document.addEventListener('keydown', this._popupClickHandler);
    }
    // закрываем попап
    close() {
        this._popup.classList.remove("popup__opened");
        this._popup.removeEventListener('mousedown', this._popupClickHandler)
        document.removeEventListener('keydown', this._popupClickHandler);
    }
    _popupClickHandler(evt) {
        if (evt.key === 'Escape' || evt.target === evt.currentTarget || evt.target === this._popup) {
            this.close()
        }
    }
    // добавляем слушатель
    setEventListeners() {
        this._popupCloseBtn.addEventListener('click', () => {
            this.close();
        })

    }
}