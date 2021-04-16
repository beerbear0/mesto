import "./index.css";

import Card from '../components/Card.js';
import {
    validationConfig,
    checkProfileContainer,
    checkPlaceContainer,
    checkAvatarContainer,
    popupProfile,
    popupPlace,
    popupImage,
    popupAvatar,
    popupConfirm,
    nameInput,
    jobInput,
    editProfileButton,
    addPlaceButton,
    avatarEditButton,
    apiConfig,
} from '../utils/constants.js';

import {FormValidator} from "../components/FormValidation.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js"
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

let myID = 0;

const userInfoProfile = new UserInfo('.profile__name', '.profile__infoname', '.profile__avatar');// userprofile unit class
const api = new Api(apiConfig);




Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, res]) => {
        userInfoProfile.setUserInfo(userData);
        starterCards.renderItems(res);
        myID = userData._id;
        // openPopupPlaceAdd.setEventListeners();
    })
    .catch(err => console.log(err))

function createCard(item) {
    const card = new Card(item, '.card-template', myID, {

        handleCardClick: () => {
            popupWithImage.openPopup(item.name, item.link);
        },

        handleRemoveCard: () => {
            openPopupConfirm.openPopup();
            openPopupConfirm.setHandleSubmit(() => {
                    api.deleteCard(card._id)
                        .then(() => {
                            card.removeCard();
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                }
            );
        },

        handleLikeSet: () => {
            api.putLike(item._id) // обмен данными с сервером
                .then((item) => {
                    card.counterLike(item.likes); // записываем в разметку длину массива из ответа сервера
                    card.toggleLike(); // меняем стиль лайка
                })
                .catch((err) => {
                    console.log(err);
                })
        },

        handleLikeRemover: () => {
            api.deleteLike(item._id)
                .then((item) => {
                    card.counterLike(item.likes);
                    card.toggleLike();
                })
                .catch((err) => {
                    console.log(err);
                })
        },

    })
    starterCards.addItemPrepend(card.generateCard())

}

const starterCards = new Section({
    renderer: (item) => {
        createCard(item)
    }
}, '.elements');


const openPopupPlaceAdd = new PopupWithForm(popupPlace, (item) => {
        api.postUserCard(item)
            .then((item) => {
                createCard(item)
                openPopupPlaceAdd.closePopup()
            })
            .catch((err) => {
                console.log(err);
            })
})
openPopupPlaceAdd.setEventListeners();

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

const openPopupAvatar = new PopupWithForm(popupAvatar, (item) => {
        api.patchAvatar(item)
            .then((data) => {
                userInfoProfile.setUserAvatar(data);
                openPopupAvatar.closePopup()
            })
            .catch((err) => {
                console.log(err);
            })
})
openPopupAvatar.setEventListeners();

const profileForm = new PopupWithForm(popupProfile, (item) => {
        api.patchUserProfile(item)
            .then((item) => {
                userInfoProfile.setUserInfo(item)
                profileForm.closePopup()

            })
            .catch((err) => {
                console.log(err);
            })
})

profileForm.setEventListeners();


const openPopupConfirm = new PopupWithConfirm(popupConfirm)
openPopupConfirm.setEventListeners();

const profileContainer= new FormValidator(validationConfig, checkProfileContainer);
profileContainer.enableValidation();
const placeContainer = new FormValidator(validationConfig, checkPlaceContainer);
placeContainer.enableValidation();
const avatarContainer = new FormValidator(validationConfig, checkAvatarContainer);
avatarContainer.enableValidation()


editProfileButton.addEventListener('click', () => {
    const profile = userInfoProfile.getUserInfo();
    nameInput.value = profile.name;
    jobInput.value = profile.about;
    profileForm.openPopup();
});

addPlaceButton.addEventListener('click', () => {
    openPopupPlaceAdd.openPopup();
})

avatarEditButton.addEventListener('click', () => {
    openPopupAvatar.openPopup()
});

