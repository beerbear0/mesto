export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }
    open() {
        this._popup.classList.add('popup__opened');
        document.addEventListener('keydown', this._handleEscClose);
    }
    close() {
        this._popup.classList.remove("popup__opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            // const openedPopup = document.querySelector('.popup__opened');
            this.close();
        }
    }
    _handlerOverlayClose(evt) {
        if(evt.target === evt.currentTarget) {
            this.close();
        }
    }
    setEventListeners() {
        this._popupCloseBtn = this._popup.querySelector('.popup__close-btn')

        this._popupCloseBtn.addEventListener('click', () => {
            this.close();
        })
        this._popupCloseBtn.addEventListener('clik', (evt) => {
            this._handlerOverlayClose(evt)
        })
    }
}