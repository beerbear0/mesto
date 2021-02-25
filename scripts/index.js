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

const popupEdit = document.querySelector(".popup_edit-profile");
const popupAddCard = document.querySelector(".popup_add-card");
const popupImage = document.querySelector(".popup_type-image");
const profile = document.querySelector(".profile");
const elContainer = document.querySelector(".elements");
const cardTemplate = document.querySelector('.card-template');
const popups = document.querySelectorAll('.popup');

const editOpenbtn = profile.querySelector(".profile__edit-btn");
const addOpenBtn = profile.querySelector(".profile__add");
const profileName = profile.querySelector(".profile__name");
const buttonClosePopup = document.querySelectorAll(".popup__close-btn")
const infoname = profile.querySelector(".profile__infoname")
const container = popupEdit.querySelector(".popup__container");
const nameInput = popupEdit.querySelector('.popup__input_name-value');
const jobInput = popupEdit.querySelector('.popup__input_infoname-value');
const submitButton = popupEdit.querySelector('.popup__submit');

const containerAddCard = popupAddCard.querySelector(".popup__container_add-card");
const imageInput = popupAddCard.querySelector(".popup__input_image-value");
const mestoInput = popupAddCard.querySelector(".popup__input_mesto-value");

// обработчик закрытия попапа
function handlerClosePopup(evt) {
    const targetPopup = evt.target.closest('.popup');
    popupClose(targetPopup);
}
// открываем попап
function openPopup (element) {
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
// функции добавления карточек
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

buttonClosePopup.forEach(button => button.addEventListener('click', handlerClosePopup));
popups.forEach(overlayEl => overlayEl.addEventListener('mouseup', overlayClosePopup));
container.addEventListener('submit', formSubmitHandler);
editOpenbtn.addEventListener('click', openEditPopup);
containerAddCard.addEventListener('submit', addBtn);
addOpenBtn.addEventListener("click", () => openPopup(popupAddCard));

