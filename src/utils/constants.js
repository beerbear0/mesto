
export const constList = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_disabled',
    errorClass: 'popup__error_visible'
}

export const popupEdit = document.querySelector(".popup_edit-profile");
export const profile = document.querySelector(".profile");
export const nameInput = popupEdit.querySelector('.popup__input_name-value');
export const jobInput = popupEdit.querySelector('.popup__input_infoname-value');
export const editOpenbtn = profile.querySelector(".profile__edit-btn");
export const addOpenBtn = profile.querySelector(".profile__add");
export const btnSubmit = document.querySelector('.popup__submit_add-card')
export const avatarEditBtn = document.querySelector('.popup_avatar')


export const apiConfig = {
    address:`https://mesto.nomoreparties.co/v1/cohort-22`,
    headers: {
        authorization: '9e52048b-0cd1-4d2d-8134-21ed3d4ebe58',
        'Content-Type': 'application/json'
    }
}