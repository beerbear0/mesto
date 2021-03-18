import {openPopup} from "./index.js";

export {Card}
class Card {
    constructor(item, templateElement, cardSelector) {
        this._cardSelector = cardSelector;
        this._card = document.querySelector('.card-template');
        this._name = item.name;
        this._link = item.link;
    }
    _likeBtn(evt) {
        evt.target.classList.toggle('element__like_active')
    }

    _deleteCard (evt) {
        const targetElement = evt.target;
        const targetCard = targetElement.closest(".element");
        targetCard.remove();
    }
    _popUpImageOpen() {
        const popupImage = document.querySelector(".popup_type-image");
        const popupImg = popupImage.querySelector(".popup__image");
        const popupTxt = popupImage.querySelector(".popup__image-name");

        popupImg.src = this._link;
        popupImg.alt = this._name;
        popupTxt.textContent = this._name

        openPopup(popupImage)
    }
    _setEventListeners() {
        const deleteButton = this._element.querySelector('.element__delete-btn');
        deleteButton.addEventListener('click', (evt) => {
            this._deleteCard(evt)
        })

        const likeButton = this._element.querySelector('.element__like-btn');
        likeButton.addEventListener('click', (evt) => {
            this._likeBtn(evt)
        })

        const popupImageButton = this._element.querySelector('.element__image');
        popupImageButton.addEventListener('click', (evt) => {
            this._popUpImageOpen()
        })
    }
    _getTemplate() {
        return this._card.content.cloneNode(true)
    }
    addCard() {
        this._element = this._getTemplate();

        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._name;
        this._element.querySelector('.element__image').src = this._link;
        this._element.querySelector('.element__image').alt = this._link;

        return this._element;

    }

}