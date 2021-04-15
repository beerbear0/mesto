export const validationConfig = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_type_active'
};


// для валидации
export const checkProfileContainer = document.querySelector('.popup__container_edit-profile'); // определяем форму редактирования профиля
export const checkPlaceContainer = document.querySelector('.popup__container_add-card'); // определяем форму, откуда будем тянуть инпуты названия места и ссылку (попап2)
export const checkAvatarContainer = document.querySelector('.popup__container_avatar') // попап аватарки

//popups section
export const popupProfile = document.querySelector('.popup_edit-profile');// ищем обычный попап (попап1)
export const popupPlace = document.querySelector('.popup_add-card'); // ищем попап новых мест (попап 2)
export const popupImage = document.querySelector('.popup_type-image'); //ищем попап открытия изображений (попап 3)
export const popupAvatar = document.querySelector('.popup_avatar') // попап аватарки (попап 4)
export const popupConfirm = document.querySelector('.popup_delete-card') // попап подтверждения удаления карты (попап 5)

//inputs section
export const nameInput = document.querySelector('.popup__input_name-value'); // ищем инпут имени (попап 1)
export const jobInput = document.querySelector('.popup__input_infoname-value'); //ищем инпут профессии (попап 1)

//button/listeners section
export const editProfileButton = document.querySelector('.profile__edit-btn'); // ищем кнопку вызова попапа редактирования профиля
export const addPlaceButton = document.querySelector('.profile__add'); // ищем кнопку вызова попапа добавления нового места
export const avatarEditButton = document.querySelector('.profile__avatar-btn')

//on-page selectors
export const currentName = document.querySelector('.profile__name'); // ищем текущее имя юзера на странице
export const currentJob = document.querySelector('.profile__infoname'); //ищем текущуюю профессию юзера на странице
export const currentAvatar = document.querySelector('.profile__avatar')


//utiils section
export const userSetting = {
    name: currentName,
    about: currentJob,
    avatar: currentAvatar
}

export const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-22',
    headers: {
        authorization: '9e52048b-0cd1-4d2d-8134-21ed3d4ebe58',
        'Content-Type': 'application/json'
    }
}