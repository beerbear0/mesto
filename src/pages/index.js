import "./index.css";

import {Card} from '../Components/Card.js';
import {constList,
    initialCards,
    nameInput,
    jobInput,
    editOpenbtn,
    addOpenBtn,
    btnSubmit,
} from '../utils/constants.js';

import {FormValidation} from "../Components/FormValidation.js";
import Section from "../Components/Section.js";
import Popup from "../Components/Popup.js";
import PopupWithImage from "../Components/PopupWithImage.js";
import PopupWithForm from "../Components/PopupWithForm.js";
import UserInfo from "../Components/UserInfo.js";

const userInfo = new UserInfo('.profile__name', '.profile__infoname');

// попап редактирования информации
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

// попап добавления карточки
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
    btnSubmit.classList.add('popup__submit_disabled');
    btnSubmit.disabled = true;
    formAddCard.open();
}
// попал открытия фото
const popupImgOpen = new PopupWithImage('.popup_type-image');
// popupImgOpen.setEventListeners();

// функия создания карточки
function createCard (item) {
    const card = new Card(
        item,
        () =>  popupImgOpen.open(item.name, item.link),
        );
    return card.addCard();
}

// фунция доб. карточки в разметку
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardList.addItem(createCard(item))
    }
}, '.elements');


// валидация форм
Array.from(document.querySelectorAll(".popup__container")).forEach((formElement) => {
    const formValidation = new FormValidation(constList, formElement);
    formValidation.enableValidation()
})

// слушатели
formEdit.setEventListeners();
formAddCard.setEventListeners();

editOpenbtn.addEventListener('click', handleEditPopup);
addOpenBtn.addEventListener('click', addCardPopupHandler);

cardList.renderItems();