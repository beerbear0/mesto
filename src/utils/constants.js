export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_disabled',
    errorClass: 'popup__error_visible'
}


// для валидации
export const checkProfileContainer = document.querySelector('.popup__container_edit-profile'); // определяем форму редактирования профиля
export const checkPlaceContainer = document.querySelector('.popup__container_add-card'); // определяем форму, откуда будем тянуть инпуты названия места и ссылку (попап2)
export const checkAvatarContainer = document.querySelector('.popup__container_avatar') // попап аватарки

//popups section
export const popupProfile = document.querySelector('.popup_edit-profile');// ищем обычный попап
export const popupPlace = document.querySelector('.popup_add-card'); // ищем попап новых мест
export const popupImage = document.querySelector('.popup_type-image'); //ищем попап открытия изображений
export const popupAvatar = document.querySelector('.popup_avatar') // попап аватарки
export const popupConfirm = document.querySelector('.popup_delete-card');// попап подтверждения удаления карты

export const ElementsContainer = document.querySelector('.elements');

//inputs section
export const nameInput = document.querySelector('.popup__input_name-value'); // ищем инпут имени
export const jobInput = document.querySelector('.popup__input_infoname-value'); //ищем инпут профессии

//button/listeners section
export const editProfileButton = document.querySelector('.profile__edit-btn'); // ищем кнопку вызова попапа редактирования профиля
export const addPlaceButton = document.querySelector('.profile__add'); // ищем кнопку вызова попапа добавления нового места
export const avatarEditButton = document.querySelector('.profile__avatar-btn')


export const name = document.querySelector('.profile__name');
export const job = document.querySelector('.profile__infoname');
export const avatar = document.querySelector('.profile__avatar');

export const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
    headers: {
        authorization: '9e52048b-0cd1-4d2d-8134-21ed3d4ebe58',
        'Content-Type': 'application/json'
    }
}