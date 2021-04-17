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
    ElementsContainer,
    name,
    job,
    avatar
} from '../utils/constants.js';

import {FormValidator} from "../components/FormValidation.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js"
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";



const userInfoProfile = new UserInfo(name, job, avatar);// userprofile unit class
const api = new Api(apiConfig);


let myID = 0;

Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, res]) => {
        userInfoProfile.setUserInfo(userData);
        myID = userData._id;
        starterCards.renderItems(res);

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
    return card.generateCard();
}

const starterCards = new Section({
    renderer: (item) => {
        starterCards.addItemPrepend(createCard(item))
    }
}, ElementsContainer);


const openPopupPlaceAdd = new PopupWithForm(popupPlace, (item) => {
        api.postUserCard(item)
            .then((item) => {
                starterCards.addItemPrepend(createCard(item))
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
    profileContainer.clearValidateFormError()
});

addPlaceButton.addEventListener('click', () => {
    openPopupPlaceAdd.openPopup();
    placeContainer.clearValidateFormError()
})

avatarEditButton.addEventListener('click', () => {
    openPopupAvatar.openPopup();
    avatarContainer.clearValidateFormError();
});

