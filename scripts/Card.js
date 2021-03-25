// import {openPopup} from "./index.js";


export class Card {
    constructor(card, handleCardClick) {
        this._handleCardClick = handleCardClick;
        this._card = document.querySelector('.card-template');
        this._name = card.name;
        this._link = card.link;
    }
    _likeBtn(evt) {
        evt.target.classList.toggle('element__like_active')
    }

    _deleteCard (evt) {
        const targetElement = evt.target;
        const targetCard = targetElement.closest(".element");
        targetCard.remove();
    }
    // _popUpImageOpen() {
    //     const popupImage = document.querySelector(".popup_type-image");
    //     const popupImg = popupImage.querySelector(".popup__image");
    //     const popupTxt = popupImage.querySelector(".popup__image-name");
    //
    //     popupImg.src = this._link;
    //     popupImg.alt = this._name;
    //     popupTxt.textContent = this._name
    //
    //     openPopup(popupImage)
    // }
    _setEventListeners() {
        const deleteButton = this._element.querySelector('.element__delete-btn');
        deleteButton.addEventListener('click', (evt) => {
            this._deleteCard(evt)
        })

        const likeButton = this._element.querySelector('.element__like-btn');
        likeButton.addEventListener('click', (evt) => {
            this._likeBtn(evt)
        })

        // const popupImageButton = this._element.querySelector('.element__image');
        // popupImageButton.addEventListener('click', (evt) => {
        //     this._popUpImageOpen()
        // })

        const elImage = this._element.querySelector('.element__image');
        elImage.addEventListener('click', () => {
            this._handleCardClick(this._link, this._name)
        })
    }
    _getTemplate() {
        return this._card.content.cloneNode(true)
    }
    addCard() {
        this._element = this._getTemplate();

        const elImage =   this._element.querySelector('.element__image');

        this._setEventListeners();

        this._element.querySelector('.element__title').textContent = this._name;
        elImage.src = this._link;
        elImage.alt = this._name;

        return this._element;
    }
}