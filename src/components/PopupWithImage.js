import Popup from "./Popup.js";

//класс редактирования попапа формы
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupCardImg = this._popup.querySelector('.popup__image');
        this._popupCardTxt = this._popup.querySelector('.popup__image-name');
    }

    open(name, link) {
        super.open();
        this._popupCardImg.src = link;
        this._popupCardImg.alt = name;
        this._popupCardTxt.textContent = name;
    }
}