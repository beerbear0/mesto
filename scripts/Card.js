
export {Card}
class Card {
    constructor(item, templateElement, cardSelector) {
        this._cardSelector = cardSelector;
        // this._card = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
        this._card = document.querySelector('.card-template');
        this._cardImage = this._card.querySelector('.element__image');
        this._cardTitle = this._card.querySelector('.element__title');

        this._cardLikeIcon = this._card.querySelector(".element__like-btn");
        this._cardDelete = this._card.querySelector('.element__delete-btn');

        this._name = item['name'];
        this._link = item['link'];
    }
    _likeBtn(evt) {
        evt.target.classList.toggle('element__like_active')
    }

    _deleteCard (evt) {
        const targetElement = evt.target;
        const targetCard = targetElement.closest(".element");
        targetCard.remove();
    }

    _setEventListeners() {
        // this._cardLikeIcon.addEventListener('click', (evt) => this._likeBtn(evt));
        // this._cardDelete.addEventListener('click', (evt) => this._deleteCard(evt))
        const deleteButton = this._element.querySelector('.element__delete-btn');
        deleteButton.addEventListener('click', (evt) => {
            this._deleteCard(evt)
        })

        const likeButton = this._element.querySelector('.element__like-btn');
        likeButton.addEventListener('click', (evt) => {
            this._likeBtn(evt)
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
        // this._card.content.querySelector(this._cardSelector).cloneNode(true)
        //
        // this._cardTitle.textContent = this._name;
        // this._cardImage.src= this._link;
        // this._cardImage.alt = this._name;
        // this._setEventListeners();
        //
        // return this._card

        // const cardTempate = document.querySelector('.card-template').content;
        // const cardEl = cardTempate.querySelector(this._cardSelector).cloneNode(true);
        // const cardImg = cardEl.querySelector('.element__image')

        // cardEl.querySelector('.element__title').textContent = this._name;
        // cardImg.src= this._link;
        // cardImg.alt = this._name;

        // this._setEventListeners();

    }

}