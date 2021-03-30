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
        // this._popup.addEventListener('click', this._popupClickHandler)
        document.addEventListener('keydown', this._handleEscClose);
    }
    // закрываем попап
    close() {
        this._popup.classList.remove("popup__opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }
    // обработчики закрытия попапа
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _handlerOverlayClose(evt) {
        if(evt.target === evt.currentTarget) {
            this.close();
        }
    }

    _popupClickHandler(evt) {
        if (evt.target.classList.contains("popup__opened")) {
            this.close();
        }
    }
    // добавляем слушатель
    setEventListeners() {

        this._popupCloseBtn.addEventListener('click', () => {
            this.close();
        })
        this._popupCloseBtn.addEventListener('click', (evt) => {
            this._handlerOverlayClose(evt)
        })
    }
}