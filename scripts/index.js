import {Card} from './Card.js';
import {constList, initialCards} from './initialsCard.js';
import {FormValidation} from "./FormValidation.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";

const popupEdit = document.querySelector(".popup_edit-profile");
const popupAddCard = document.querySelector(".popup_add-card");

const profile = document.querySelector(".profile");
const elContainer = document.querySelector(".elements");
const popups = document.querySelectorAll('.popup');

const editOpenbtn = profile.querySelector(".profile__edit-btn");
const addOpenBtn = profile.querySelector(".profile__add");
const profileName = profile.querySelector(".profile__name");
const buttonClosePopup = document.querySelectorAll(".popup__close-btn")
const infoname = profile.querySelector(".profile__infoname")
const container = popupEdit.querySelector(".popup__container");

export const nameInput = popupEdit.querySelector('.popup__input_name-value');
export const jobInput = popupEdit.querySelector('.popup__input_infoname-value');
const imageInput = popupAddCard.querySelector(".popup__input_image-value");
const mestoInput = popupAddCard.querySelector(".popup__input_mesto-value");

const containerAddCard = popupAddCard.querySelector(".popup__container_add-card");
const popupFormAdd = document.querySelector('.popup__form_add');
const btnSubmit = document.querySelector('.popup__submit_add-card')

// обработчик закрытия попапа
function handlerClosePopup(evt) {
    const targetPopup = evt.target.closest('.popup');
    popupClose(targetPopup);
}

// открываем попап
export function openPopup (element) {
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

// создание карточки
// function createCard(item) {
//     elContainer.prepend(new Card(item, '.card-template').addCard());
// }

// обработчик попапа доб.карточки
function addNewCard (evt) {
    evt.preventDefault();
    const newCard = {name: mestoInput.value, link: imageInput.value}

    cardLIst(newCard);
    popupClose(popupAddCard);

}
const cardLIst = new Section({
    items: constList,
    renderer: (item) => {
        cardLIst.addItem(addNewCard(item));
    }
},
    elContainer)
// initialCards.forEach(function (item) {
//     createCard(item, elContainer, '.element')
// })
Array.from(document.querySelectorAll(".popup__container")).forEach((formElement) => {
    const formValidation = new FormValidation(constList, formElement);
    formValidation.enableValidation()
})



containerAddCard.addEventListener('submit', addNewCard);
buttonClosePopup.forEach(button => button.addEventListener('click', handlerClosePopup));
popups.forEach(overlayEl => overlayEl.addEventListener('mouseup', overlayClosePopup));
container.addEventListener('submit', formSubmitHandler);
editOpenbtn.addEventListener('click', openEditPopup);
addOpenBtn.addEventListener("click", () => {
    popupFormAdd.reset();
    btnSubmit.classList.add('popup__submit_disabled');
    btnSubmit.disabled = true;
    openPopup(popupAddCard);
});

