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
 let addOpenBtn = profile.querySelector(".profile__add");
 let addCloseBtn = popupAddCard.querySelector(".popup-add-cards__close");

 let saveSubmit = popupAddCard.querySelector(".popup__submit-add-card");

 let elContainer = document.querySelector(".elements");

 function popupAddCardOpen () {
     popupAddCard.classList.add("popup-add-cards_opened");
 }
 function popupAddCardClose () {
     popupAddCard.classList.remove("popup-add-cards_opened");
 }

 function render () {
     const elem = initialCards
        .map(addCard)

     elContainer.append(...elem);
 }

 const cardTemplate = document.querySelector('.card-template');

 function addCard (card) {
     let newCard = cardTemplate.content.cloneNode(true);
     let cardElText = newCard.querySelector(".element__title");
     let cardElImage = newCard.querySelector(".element__image");

     newCard.querySelector('.element__like').addEventListener('click', function (evt) {
         evt.target.classList.toggle('element__like_active')
     });

     cardElText.textContent = card.name;
     cardElImage.src = card.link;

     return newCard;
 }

 function addBtn () {

     let imageInput = popupAddCard.querySelector(".popup__input_image_value");
     let mestoInput = popupAddCard.querySelector(".popup__input_mesto_value");
     const cardText = addCard({mestoInput});
     const cardImage = addCard({imageInput});

     elContainer.prepend(cardText, cardImage);

     imageInput.value = '';
     mestoInput.value = '';

     popupAddCardClose();
 }

render();

 saveSubmit.addEventListener('click', addBtn);
 addOpenBtn.addEventListener("click", popupAddCardOpen);
 addCloseBtn.addEventListener('click', popupAddCardClose);
