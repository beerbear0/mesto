const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popupParents = document.querySelector(".popups");
const popupEdit = document.querySelector(".popup_edit-profile");
const popupAddCard = document.querySelector(".popup_add-card");
const popupImage = document.querySelector(".popup_type-image");
const profile = document.querySelector(".profile");
const elContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector('.card-template');

const editOpenbtn = profile.querySelector(".profile__edit-btn");
const addOpenBtn = profile.querySelector(".profile__add");
const profileName = profile.querySelector(".profile__name");
const infoname = profile.querySelector(".profile__infoname")

const container = popupEdit.querySelector(".popup__container");
const nameInput = popupEdit.querySelector('.popup__input_name-value');
const jobInput = popupEdit.querySelector('.popup__input_infoname-value');;

const containerAddCard = popupAddCard.querySelector(".popup__container_add-card");
const imageInput = popupAddCard.querySelector(".popup__input_image-value");
const mestoInput = popupAddCard.querySelector(".popup__input_mesto-value");


function openPopup (element) {
    element.classList.add("popup__opened");
}

function openEditPopup () {
    openPopup(popupEdit)
    nameInput.value = profileName.textContent;
    jobInput.value = infoname.textContent;
}

function popupClose (element) {
    element.classList.remove("popup__opened");
}
function handlerPopupClose (evt) {
    if(evt.target.classList.contains("popup__close-btn")) {
        popupClose(evt.target.closest(".popup"))
    }
}

function formSubmitHandler (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    infoname.textContent = jobInput.value;

    popupClose(popupEdit);
}

function render () {

    const elem = initialCards
        .map(addCard)

    elContainer.append(...elem);
}


function likeBtn(evt) {
    evt.target.classList.toggle('element__like_active')
}
function addCard (card) {

    const newCard = cardTemplate.content.cloneNode(true);
    const cardElText = newCard.querySelector(".element__title");
    const cardElImage = newCard.querySelector(".element__image");

    newCard.querySelector('.element__like-btn').addEventListener('click', likeBtn);

    cardElText.textContent = card.name;
    cardElImage.src= card.link;
    cardElImage.alt = 'Фото';

    const removeBtn = newCard.querySelector(".element__delete-btn")
    removeBtn.addEventListener('click', deleteCard)

    const openImgBtn = newCard.querySelector(".element__open-image")
    openImgBtn.addEventListener('click', popupImgOpen)

    return newCard;
}

function addBtn (evt) {
    evt.preventDefault();
    const inputText = mestoInput.value;
    const inputLink = imageInput.value;
    const cardAdd = addCard({name: inputText, link: inputLink})

    elContainer.prepend(cardAdd);

    imageInput.value = '';
    mestoInput.value = '';

    popupClose(popupAddCard);
}

function deleteCard (event) {
    const targetElement = event.target;
    const targetCard = targetElement.closest(".element");
    targetCard.remove();
}

function popupImgOpen (event) {
    const targetElement = event.target;
    const editing = targetElement.closest(".element");

    const cardElImg = editing.querySelector(".element__image");
    const cardElTxt = editing.querySelector(".element__title");
    const popupImg = popupImage.querySelector(".popup__image");
    const popupTxt = popupImage.querySelector(".popup__image-name");

    popupImg.src = cardElImg.src;
    popupImg.alt = "Фото";
    popupTxt.textContent = cardElTxt.textContent;

    openPopup(popupImage);

}

render();

popupParents.addEventListener("click", handlerPopupClose);
container.addEventListener('submit', formSubmitHandler);
editOpenbtn.addEventListener('click', openEditPopup);
containerAddCard.addEventListener('submit', addBtn);
addOpenBtn.addEventListener("click", () => openPopup(popupAddCard));

// enableValidation({
//     formSelector: '.popup__form',
//     inputSelector: '.popup__input',
//     submitButtonSelector: '.popup__button',
//     inactiveButtonClass: 'popup__button_disabled',
//     inputErrorClass: 'popup__input_type_error',
//     errorClass: 'popup__error_visible'
// });

const popupInput = popupParents.querySelector('.popup__input')

const showInputError = (popupParents, inputEl, errorMessage) => { // Добавляем класс ошибки инпуту
    const errorEl = popupParents.querySelector(`.${inputEl.id}-error`)
    inputEl.classList.add('popup__input_disabled')
    errorEl.textContent = errorMessage;
    errorEl.classList.add('popup__error_visible')
};

const hideInputError = (popupParents, inputEl) => {  // Удаляем класс ошибки инпуту
    const errorEl = popupParents.querySelector(`.${inputEl.id}-error`);
    inputEl.classList.remove('popup__input_disabled')
    errorEl.classList.remove('form__input-error_active');
    errorEl.textContent = '';

};

const checkInputValidity = (popupParents, inputEl) => { // Проверяем инпут на валидность
    if (!inputEl.validity.valid) {
        showInputError(popupParents, inputEl, inputEl.validationMessage)

    } else {
        hideInputError(popupParents, inputEl)
    }
};
container.addEventListener('submit', function (evt) {
    evt.preventDefault();
});

popupInput.addEventListener('input', function () {
    checkInputValidity(container, inputEl);
});

function setEventListeners (popupParents) {
    const inputList = Array.from(popupParents.querySelectorAll('.form__input'));
    inputList.forEach((inputEl) => {
        inputEl.addEventListener('input', function () {
            checkInputValidity(popupParents, inputEl);
        });
    });
}
function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.popup__container'));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        setEventListeners(formElement);
    });
}
enableValidation()


// nameInput.addEventListener('input', () => checkInputValidity(nameInput));
// jobInput.addEventListener('input', () => checkInputValidity(jobInput));
// mestoInput.addEventListener('input', () => checkInputValidity(mestoInput));
// imageInput.addEventListener('input', () => checkInputValidity(imageInput));