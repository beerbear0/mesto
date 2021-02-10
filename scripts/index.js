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
 }

 function popupClose () {
    popup.classList.remove("popup_opened");
 }

 function formSubmitHandler (evt) {
     evt.preventDefault();

     profileName.textContent = nameInput.value;
     infoname.textContent = jobInput.value;

     popupClose();

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

 let addOpenBtn = profile.querySelector(".profile__add");
 let addCloseBtn = popupAddCard.querySelector(".popup-add-cards__close");

 let saveSubmit = popupAddCard.querySelector(".popup__submit-add-card");
 const imageInput = popupAddCard.querySelector(".popup__input_image_value");
 const mestoInput = popupAddCard.querySelector(".popup__input_mesto_value");

 let elContainer = document.querySelector(".elements");

 const cardTemplate = document.querySelector('.card-template');
 let btnOpenImage = cardTemplate.querySelector(".element__open-image");

 let popupImage = document.querySelector(".popup-image");
 let imgCloseBtn = popupImage.querySelector(".popup__close-btn");
 let nameImage = popupImage.querySelector(".popup__image-name");

 function popupAddCardOpen () {
     popupAddCard.classList.add("popup-add-cards_opened");
 }

 function popupAddCardClose () {
     popupAddCard.classList.remove("popup-add-cards_opened");
 }

 function opnClsPopupImg () {
     popupImage.classList.toggle("popup-image_active")
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

     let newCard = cardTemplate.content.cloneNode(true);
     let cardElText = newCard.querySelector(".element__title");
     let cardElImage = newCard.querySelector(".element__image");

     newCard.querySelector('.element__like').addEventListener('click', likeBtn);

     cardElText.textContent = card.name;
     cardElImage.src= card.link;

     const removeBtn = newCard.querySelector(".element__delete-btn")
     removeBtn.addEventListener('click', deleteCard)


     return newCard;
 }

 function addBtn (evt) {
     evt.preventDefault();
     let inputText = mestoInput.value;
     let inputLink = imageInput.value;
     const cardAdd = addCard({name: inputText, link: inputLink})

     elContainer.prepend(cardAdd);

     imageInput.value = '';
     mestoInput.value = '';

     popupAddCardClose();
 }

 function deleteCard (event) {
     const targetElement = event.target;
     const targetCard = targetElement.closest(".element");
     targetCard.remove();
 }


 // function openPopupImg () {
 //    popupImage.classList.add("popup-image_active")
 // }
 // function closePopupImg () {
 //     popupImage.classList.remove("popup-image_active");
 // }


render();

 containerAddCard.addEventListener('submit', addBtn);
 addOpenBtn.addEventListener("click", popupAddCardOpen);
 addCloseBtn.addEventListener('click', popupAddCardClose);
 btnOpenImage.addEventListener('click', opnClsPopupImg);
 imgCloseBtn.addEventListener("click", opnClsPopupImg);