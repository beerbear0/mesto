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


 const popupEdit = document.querySelector(".popup");
 const container = popupEdit.querySelector(".popup__container");
 const editCloseBtn = popupEdit.querySelector(".popup__close-btn");
 const nameInput = popupEdit.querySelector('.popup__input_name_value');
 const jobInput = popupEdit.querySelector('.popup__input_infoname_value');

 const profile = document.querySelector(".profile");
 const editOpenbtn = profile.querySelector(".profile__edit-btn");
 const profileName = profile.querySelector(".profile__name");
 const infoname = profile.querySelector(".profile__infoname");
 const addOpenBtn = profile.querySelector(".profile__add");

 const popupAddCard = document.querySelector(".popup-add-card");
 const containerAddCard = popupAddCard.querySelector(".popup-add-card__container");
 const addCloseBtn = popupAddCard.querySelector(".popup-add-card__close-btn");
 const imageInput = popupAddCard.querySelector(".popup-add-card__input_image_value");
 const mestoInput = popupAddCard.querySelector(".popup-add-card__input_mesto_value");

 const elContainer = document.querySelector(".elements");

 const cardTemplate = document.querySelector('.card-template');
 const popupImage = document.querySelector(".popup-image");
 const imgCloseBtn = popupImage.querySelector(".popup-image__close-btn");

 function openPopup (popup) {
    popup.classList.add("popup__opened");
}

 function openEditPopup () {

     openPopup(popupEdit)

    nameInput.value = profileName.textContent;
    jobInput.value = infoname.textContent;
 }

 function popupClose (popup) {
     popup.classList.remove("popup__opened");
 }

 function closePopupEdit () {
     popupClose(popupEdit)
 }

 function popupAddCardOpen () {
    openPopup(popupAddCard)
 }

 function popupCloseAddCard () {
     popupClose(popupAddCard)
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
     const popupImg = popupImage.querySelector(".popup-image__open");
     const popupTxt = popupImage.querySelector(".popup-image__name");

     popupImg.src = cardElImg.src;
     popupImg.alt = "Фото";
     popupTxt.textContent = cardElTxt.textContent;

     openPopup(popupImage);

 }
    function popupImgCls () {
        popupClose(popupImage);
    }

 render();

 container.addEventListener('submit', formSubmitHandler);
 editOpenbtn.addEventListener('click', openEditPopup);
 editCloseBtn.addEventListener('click', closePopupEdit);
 containerAddCard.addEventListener('submit', addBtn);
 addOpenBtn.addEventListener("click", popupAddCardOpen);
 addCloseBtn.addEventListener('click', popupCloseAddCard);
 imgCloseBtn.addEventListener("click", popupImgCls);

