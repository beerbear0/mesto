
export {Card}
class Card {
    constructor(data, cardSelector) {
       this._cardSelector = cardSelector;
       this._card = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
       // this._card = this._getTemplate();
       this._cardImage = this._card.querySelector('.element__image');
       this._cardTitle = this._card.querySelector('.element__title');
       this._cardLikeIcon = this._card.querySelector(".element__like-btn");
       this._cardDelete = this._card.querySelector('.element__delete-btn');

       this._name = data.name;
       this._link = data.link;

      // this._setEventListener();
    }
    // _getTemplate() {
    //     const cardEl = document
    //         .querySelector(this._cardSelector)
    //         .content
    //         .querySelector('.element')
    //         .cloneNode(true)
    //
    //     return cardEl
    // }

    _likeBtn(evt) {
        evt.target.classList.toggle('element__like_active')
    }

    _deleteCard (event) {
        const targetElement = event.target;
        const targetCard = targetElement.closest(".element");
        targetCard.remove();
    }

    _setEventListeners() {
        this._cardLikeIcon.addEventListener('click', () => this._likeBtn());
        this._cardDelete.addEventListener('click', () => this._deleteCard())
    }

    addCard() {
        this._cardTitle.textContent = this._name;
        this._cardImage.src= this._link;
        this._cardImage.alt = this._name;
        this._setEventListeners();

        return this._card
    }
}