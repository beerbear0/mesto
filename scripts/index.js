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

const nameInput = popupEdit.querySelector('.popup__input_name-value');
const jobInput = popupEdit.querySelector('.popup__input_infoname-value');

const editOpenbtn = profile.querySelector(".profile__edit-btn");
const addOpenBtn = profile.querySelector(".profile__add");
const profileName = profile.querySelector(".profile__name");
const buttonClosePopup = document.querySelectorAll(".popup__close-btn")
const infoname = profile.querySelector(".profile__infoname")
const container = popupEdit.querySelector(".popup__container");

const imageInput = popupAddCard.querySelector(".popup__input_image-value");
const mestoInput = popupAddCard.querySelector(".popup__input_mesto-value");
const containerAddCard = popupAddCard.querySelector(".popup__container_add-card");
const popupFormAdd = document.querySelector('.popup__form_add');
const btnSubmit = document.querySelector('.popup__submit_add-card')


const userInfo = new UserInfo('.profile__name', '.profile__infoname');

const editSubmitHandler = (data) => {
    userInfo.setUserInfo({
        name: data["name-input"],
        info: data["infoname-input"]
    })
    formEdit.close();
}

const formEdit = new PopupWithForm('.popup_edit-profile', (data) => {
    editSubmitHandler(data);
})


const handleEditPopup = () => {
    const {name, info} = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = info;
    formEdit.open();
}


const formAddCardHandler = (data) => {
    const name = data["mesto-input"];
    const link = data["url-input"];
    cardList.addItem(createCard({ name, link }));
    formAddCard.close();
}

const formAddCard = new PopupWithForm('.popup_add-card', (data) => {
    formAddCardHandler(data)
});


const addCardPopupHandler = () => {
    // popupAddCard.reset();
    formAddCard.open();
}

const popupImgOpen = new PopupWithImage('.popup_type-image');
// popupImgOpen.setEventListeners();

function createCard (item) {
    const card = new Card(
        item,
        () =>  popupImgOpen.open(item.name, item.link),
        );
    return card.addCard();
}


const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        // createCard(item)
        cardList.addItem(createCard(item))
    }
}, '.elements');


// const editFormValidation = new FormValidation('.popup_edit-profile', formE)
Array.from(document.querySelectorAll(".popup__container")).forEach((formElement) => {
    const formValidation = new FormValidation(constList, formElement);
    formValidation.enableValidation()
})

formEdit.setEventListeners();
formAddCard.setEventListeners();

editOpenbtn.addEventListener('click', handleEditPopup);
addOpenBtn.addEventListener('click', addCardPopupHandler);

cardList.renderItems();