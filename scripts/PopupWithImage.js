import Popup from "./Popup.js";

//класс редактирования попапа формы
export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(name, link) {
        super.open();

        const popupCardImg = this._popup.querySelector('.popup__image');
        const popupCardTxt = this._popup.querySelector('.popup__image-name');

        popupCardImg.src = link;
        popupCardImg.alt = name;
        popupCardTxt.textContent = name;
    }

}