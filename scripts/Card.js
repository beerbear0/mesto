export default class Card {
    constructor(name, link) {
       this._card = document.querySelector(selector).content.querySelector('.card-template').cloneNode(true)
       this._cardImage = this._card.querySelector('.element__image');
       this._cardTitle = this._card.querySelector('.element__title');
       this._cardLikeIcon = this._card.querySelector(".element__like-btn");
       this._cardDelete = this._card.querySelector('.element__delete-btn');

       this.name = ['name'];
       this.link = ['link'];

       this._setEventListener();
    }
    likeBtn(evt) {
        evt.target.classList.toggle('element__like_active')
    }
    addCard() {
        // const newCard = cardTemplate.content.cloneNode(true);
        // const cardElText = newCard.querySelector(".element__title");
        // const cardElImage = newCard.querySelector(".element__image");

        // newCard.querySelector('.element__like-btn').addEventListener('click', likeBtn);

        this._cardTitle.textContent = card.name;
        this._cardImage.src= card.link;
        this._cardImage.alt = card.name;

        // // const removeBtn = newCard.querySelector(".element__delete-btn")
        // // removeBtn.addEventListener('click', deleteCard)
        // //
        // // const openImgBtn = newCard.querySelector(".element__open-image")
        // // openImgBtn.addEventListener('click', () => {
        // //     popupImgOpen(card)
        // })
        // лайк карточки
        this._cardLikeIcon.addEventListener('click', this.likeBtn());
        // удаление карточки
        this._cardDelete.addEventListener('click', this.deleteCard())

        return this._card
    }
    deleteCard (event) {
        const targetElement = event.target;
        const targetCard = targetElement.closest(".element");
        targetCard.remove();
    }
    popupImgOpen (card) {
        popupImg.src = card.link
        popupImg.alt = card.name
        popupTxt.textContent = card.name
        openPopup(popupImage);
}
    // _setEventListener{
    //
    // }
}