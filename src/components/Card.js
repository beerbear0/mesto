// import {openPopup} from "./index.js";


export class Card {
    constructor(card, cardSelector, myId, {handleCardClick, handleDeleteCard, handleLike, handleLikeDelete}) {
        this._handleCardClick = handleCardClick;
        this._card = document.querySelector(cardSelector);
        this._name = card.name;
        this._link = card.link;
        this._likes = card.likes;
        this._owner = card.owner;
        this._myId = myId;
        this._id = card._id
        this._handleDeleteCard = handleDeleteCard;
        this._handleLike = handleLike;
        this._handleLikeDelete = handleLikeDelete;
    }
    // обработчик лайков
    likeBtn(evt) {
        evt.target.classList.toggle('element__like_active')
    }
    counterLike(arrLike) {
        const handleValue = this._card.querySelector('.element__handle-like');
        handleValue.textContent = arrLike.length
    }

    _setLikeHandle() {
        const userLike = this._card.querySelector('.element__like-btn');
        if(userLike.classList.contains('element__like_active')) {
            this._handleLikeDelete();
        }
        else {
            this._handleLike();
        }
    }

    // удаление карточек
    deleteCard (evt) {
        const targetElement = evt.target;
        const targetCard = targetElement.closest(".element");
        targetCard.remove();
    }
    // доб. слушатель
    _setEventListeners() {
        const deleteButton = this._element.querySelector('.element__delete-btn');
        deleteButton.addEventListener('click', (evt) => {
            this._handleDeleteCard(evt)
        })

        const likeButton = this._element.querySelector('.element__like-btn');
        likeButton.addEventListener('click', (evt) => {
            this._setLikeHandle(evt)
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

        const elImage =  this._element.querySelector('.element__image');
        const likeCounter = this._card.querySelector('.element__handle-like')

        this._element.querySelector('.element__title').textContent = this._name;
        elImage.src = this._link;
        elImage.alt = this._name;
        likeCounter.textContent = `${this._likes}`

        if(this._likes.find((like) => like._id === this.myId))  {
            this._card.querySelector('.element__like-btn').classList.add('element__like_active')
        }

        if(this._owner.id === this._myId) {
            this._card.querySelector('.element__delete-btn').classList.add('element__delete-btn_active');
        }

        this._setEventListeners();
        return this._element;
    }
}