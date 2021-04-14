import "./index.css";

import {Card} from '../components/Card.js';
import {
    constList,
    nameInput,
    jobInput,
    editOpenbtn,
    addOpenBtn,
    btnSubmit,
    apiConfig,
    avatarEditBtn,
} from '../utils/constants.js';

import {FormValidation} from "../components/FormValidation.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js"
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";


const userInfo = new UserInfo('.profile__name', '.profile__infoname', '.profile__avatar');
const api = new Api(apiConfig)

const openPopupAddCard = new PopupWithForm('.popup_add-card', {
    handleFormSubmit: (item) => {
        api.postUserCard(item)
            .then((item) => {
                createCard(item, false)
                openPopupAddCard.close()
            })
            .catch((err) => {
                console.log(err)
            })
    }
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, res]) => {
        userInfo.setUserInfo(userData);
        const myID = userData._id;

        const openPopupAddCard = new PopupWithForm('.popup_add-card', {
            handleFormSubmit: (item) => {
                api.postUserCard(item)
                    .then((item) => {
                        createCard(item, false)
                        openPopupAddCard.close()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
        })

const constantCard = new Section({
    renderer: (item => createCard(item, true))
}, '.elements');
constantCard.renderItems(res);

openPopupAddCard.setEventListeners();

function createCard(item) {
    const card = new Card(item, '.card-template', myID, {
        handleCardClick: () => {
            popupWithImage.open(item.name, item.link)
        },
        handleDeleteCard: () => {
            openPopupConfirm.open();
            openPopupConfirm.setHandleSumbit(() => {
                api.deleteCard(card._id)
                    .then(() => {
                        card.deleteCard()
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            })
        },
        handleLike: () => {
            api.deleteLike(item._id)
                .then((item) => {
                    card.counterLike(item.likes)
                    card.likeBtn();
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    })
        constantCard.addItem(card.addCard())
    }
    })


const popupWithImage = new PopupWithImage('.popup_type-image');
    popupWithImage.setEventListeners()

    const openPopupAvatar = new PopupWithForm('.popup_avatar', {
        handleFormSubmit: (item) => {
            api.patchAvatar(item)
                .then((data) => {
                    userInfo.setUserAvatar(data);
                    openPopupAvatar.close();
                })
                .catch((err) =>{
                    console.log(err)
                })
        }
    })
openPopupAvatar.setEventListeners();

    const profileForm = new PopupWithForm('.popup_edit-profile', {
        handleFormSubmit: (item) => {
            api.patchUserProfile(item)
                .then((res) => {
                    userInfo.setUserInfo(res)
                    profileForm.close()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    })
    profileForm.setEventListeners();

    const openPopupConfirm = new PopupWithConfirm('.popup_delete-card');
    openPopupConfirm.setEventListeners()


// валидация форм
Array.from(document.querySelectorAll(".popup__container")).forEach((formElement) => {
    const formValidation = new FormValidation(constList, formElement);
    formValidation.enableValidation()
})
editOpenbtn.addEventListener('click', () => {
    const profile = userInfo.getUserInfo();
    nameInput.value = profile.name
    jobInput.value = profile.info
    profileForm.open()
})

addOpenBtn.addEventListener('click', () => {
    btnSubmit.classList.add('popup__submit_disabled');
    btnSubmit.disabled = true;
    openPopupAddCard.open();
})

avatarEditBtn.addEventListener('click', () => {
    openPopupAvatar.open()
})