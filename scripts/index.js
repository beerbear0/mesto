 let popup = document.querySelector(".popup");
 let container = popup.querySelector(".popup__container");
 let editCloseBtn = popup.querySelector(".popup__close-btn");
 let nameInput = popup.querySelector('.popup__input_name_value');
 let jobInput = popup.querySelector('.popup__input_infoname_value');

 let profile = document.querySelector(".profile");
 let editOpenbtn = profile.querySelector(".profile__edit-btn");
 let profileName = profile.querySelector(".profile__name");
 let infoname = profile.querySelector(".profile__infoname");


 function popupOpen () {
    popup.classList.add("popup_opened");
    nameInput.value = profileName.textContent;
    jobInput.value = infoname.textContent;
 };

 function popupClose () {
    popup.classList.remove("popup_opened");
 };

 function formSubmitHandler (evt) {
     evt.preventDefault();

     profileName.textContent = nameInput.value;
     infoname.textContent = jobInput.value;

     popupClose();

 };

 function popupAddCardOpen () {
    popupAddCard.classList.add("popup-add-cards_opened");
 }
 function popupAddCardClose () {
    popupAddCard.classList.remove("popup-add-cards_opened");
 }



 container.addEventListener('submit', formSubmitHandler);
 editOpenbtn.addEventListener('click', popupOpen);
 editCloseBtn.addEventListener('click', popupClose);

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

 let popupAddCard = document.querySelector(".popup-add-cards");
 let containerAddCard = popupAddCard.querySelector(".popup__container-add-card");
 let image = document.querySelector(".element__image");
 let mesto = document.querySelector(".element__title");
 let imageInput = popupAddCard.querySelector(".popup__input_image_value");
 let mestoInput = popupAddCard.querySelector(".popup__input_mesto_value");
 let addOpenBtn = profile.querySelector(".profile__add");
 let addCloseBtn = popupAddCard.querySelector(".popup-add-cards__close");

 let saveSubmit = popupAddCard.querySelector(".popup__submit-add-card");
 let elementsContainer = document.querySelector(".elements");


 function addCard(imageValue, mestoValue) { // функция добавления карты через попап

     const cardTemplate = document.querySelector('#card-template').content; // находим темплате форму
     const cardElement = cardTemplate.querySelector('.element').cloneNode(true); //  клонируем карту

     cardElement.querySelector('.element__image').style.src = imageValue;
     cardElement.querySelector('.element__title').textContent = mestoValue;

     elementsContainer.append(cardElement);
 }
 // function formSubmit (evt) {
 //     evt.preventDefault();
 //
 //     imageInput.value = image.style.src;
 //     mestoInput.value = mesto.textContent;
 //
 //     popupAddCardClose();
 //
 // };
 saveSubmit.addEventListener('submit', function () { // функция кнопки сохранения попапа
     addCard(imageInput.value, linkInput.value);
     popupAddCardClose();

     imageInput.value = '';
     mestoInput.value = '';
 } )

// containerAddCard.addEventListener('submit', formSubmit);
 addOpenBtn.addEventListener("click", popupAddCardOpen);
 addCloseBtn.addEventListener('click', popupAddCardClose);

