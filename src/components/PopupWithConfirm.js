import Popup from "./Popup.js";


export  default class PopupWithConfirm extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector)
        this._submitBtn = this._popup.querySelector('.popup__submit_delete-card');
    }
    setHandleSumbit(func) {
        this._handleSubmit = func;
    }
    open() {
        super.open();
        this.loaderHandler('Да')
    }
    setEventListeners() {
        super.setEventListeners();
        this._submitBtn.addEventListener('click', (evt) => {
            evt.preventDefault()
            this.loaderHandler('Удаление...');
            this._handleSubmit();
            this.close()
        })
    }
}