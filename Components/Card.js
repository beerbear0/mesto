// import {openPopup} from "./index.js";


export class Card {
    constructor(card, handleCardClick) {
        this._handleCardClick = handleCardClick;
        this._card = document.querySelector('.card-template');
        this._name = card.name;
        this._link = card.link;
    }
    // обработчик лайков
    _likeBtn(evt) {
        evt.target.classList.toggle('element__like_active')
    }
    // удаление карточек
    _deleteCard (evt) {
        const targetElement = evt.target;
        const targetCard = targetElement.closest(".element");
        targetCard.remove();
    }
    // доб. слушатель
    _setEventListeners() {
        const deleteButton = this._element.querySelector('.element__delete-btn');
        deleteButton.addEventListener('click', (evt) => {
            this._deleteCard(evt)
        })

        const likeButton = this._element.querySelector('.element__like-btn');
        likeButton.addEventListener('click', (evt) => {
            this._likeBtn(evt)
        })

        const elImage = this._element.querySelector('.element__image');
        elImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
        })
    }
    // клонируем темплайт елемент
    _getTemplate() {
        return this._card.content.cloneNode(true)
    }
    // доб. карточку
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