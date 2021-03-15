import {Card} from './Card.js';
import {constList, initialCards} from './initialsCard.js';
import {FormValidation} from "./FormValidation.js";

const popupEdit = document.querySelector(".popup_edit-profile");
const popupAddCard = document.querySelector(".popup_add-card");
// const popupImage = document.querySelector(".popup_type-image");
const profile = document.querySelector(".profile");
const elContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector('.card-template');
const popups = document.querySelectorAll('.popup');

const editOpenbtn = profile.querySelector(".profile__edit-btn");
const addOpenBtn = profile.querySelector(".profile__add");
const profileName = profile.querySelector(".profile__name");
const buttonClosePopup = document.querySelectorAll(".popup__close-btn")
const infoname = profile.querySelector(".profile__infoname")
const container = popupEdit.querySelector(".popup__container");
const nameInput = popupEdit.querySelector('.popup__input_name-value');
const jobInput = popupEdit.querySelector('.popup__input_infoname-value');

const containerAddCard = popupAddCard.querySelector(".popup__container_add-card");

// обработчик закрытия попапа
function handlerClosePopup(evt) {
    const targetPopup = evt.target.closest('.popup');
    popupClose(targetPopup);

}

// открываем попап
function openPopup (element) {
    element.classList.add("popup__opened");
    document.addEventListener('keydown', keyClosePopup);
}

// открываем попап редактирования
function openEditPopup () {
    openPopup(popupEdit)
    nameInput.value = profileName.textContent;
    jobInput.value = infoname.textContent;
}

// закрываем попапы
function popupClose (element) {
    element.classList.remove("popup__opened");
    document.removeEventListener('keydown', keyClosePopup);
}

// обработчик отправки ред.попапа
function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    infoname.textContent = jobInput.value;

    popupClose(popupEdit);

}
// функция закрытия попапа по нажатию кнопки
    function keyClosePopup(event) {
        if (event.key === 'Escape') {
             const openedPopup = document.querySelector('.popup__opened');
            popupClose(openedPopup);

        }
    }
// функция закрытия попапа по клику оверлай
function overlayClosePopup(event) {
    const targetOverlay = event.target;
    popupClose(targetOverlay);
}

// function createCard (obj) {
//     const card = new Card(obj, ('.card-template'));
//     const cardElement  = card.addCard();
//
//     return cardElement
// }
// initialCards.forEach(elContainer);

// Создаем карты
function createCard(item) {
    elContainer.prepend(new Card(item, '.card-template').createCard());
}

// Кнопка добавить карточку
function addCardSubmit(evt) {
    evt.preventDefault();
    const cardArguments = { name: inputCardTitle.value, link: inputCardImage.value };

    createCard(cardArguments);
    popupClose(popupAddCard);
}

// function addBtn (evt) {
//     evt.preventDefault();
//     const inputText = mestoInput.value;
//     const inputLink = imageInput.value;
//     const cardAdd = addCard({name: inputText, link: inputLink})
//
//     elContainer.prepend(cardAdd);
//
//     imageInput.value = '';
//     mestoInput.value = '';
//
//     popupClose(popupAddCard);
// }


// добавляем карты из обьекта
// initialCards.forEach((card) => {
//     cardTemplate.prepend(createCard(card))
// })

function popupImgOpen (card) {
    const popupImg = cardTemplate.querySelector('.popup__image');
    const popupTxt = cardTempate.querySelector(".element__title");
    if (evt.target.classList.contains('element__image')) {
        popupImg.src = card.link
        popupImg.alt = card.name
        popupTxt.textContent = card.name
        openPopup(popupImage);
    }
}
buttonClosePopup.forEach(button => button.addEventListener('click', handlerClosePopup));
popups.forEach(overlayEl => overlayEl.addEventListener('mouseup', overlayClosePopup));
container.addEventListener('submit', formSubmitHandler);
editOpenbtn.addEventListener('click', openEditPopup);
containerAddCard.addEventListener('submit', addCardSubmit);
addOpenBtn.addEventListener("click", () => openPopup(popupAddCard));
elContainer.addEventListener('click', popupImgOpen)

Array.from(document.querySelectorAll(".popup__container")).forEach((formElement) => {
    const formValidation = new FormValidation(constList, formElement);
    const formValid = formValidation.enableValidation()
})


// функции добавления карточек
// function render () {
//
//     const elem = initialCards
//         .map(addCard)
//
//     elContainer.append(...elem);
// }
//
//
// function likeBtn(evt) {
//     evt.target.classList.toggle('element__like_active')
// }
// function addCard (card) {
//
//     const newCard = cardTemplate.content.cloneNode(true);
//     const cardElText = newCard.querySelector(".element__title");
//     const cardElImage = newCard.querySelector(".element__image");
//
//     newCard.querySelector('.element__like-btn').addEventListener('click', likeBtn);
//
//     cardElText.textContent = card.name;
//     cardElImage.src= card.link;
//     cardElImage.alt = card.name;
//
//     const removeBtn = newCard.querySelector(".element__delete-btn")
//     removeBtn.addEventListener('click', deleteCard)
//
//     const openImgBtn = newCard.querySelector(".element__open-image")
//     openImgBtn.addEventListener('click', () => {
//         popupImgOpen(card)
//     })
//
//     return newCard;
// }

// render();



// function deleteCard (event) {
//     const targetElement = event.target;
//     const targetCard = targetElement.closest(".element");
//     targetCard.remove();
// }
//
