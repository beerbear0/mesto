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


const popup = document.querySelector(".popup");
 const container = popup.querySelector(".popup__container");
 const editCloseBtn = popup.querySelector(".popup__close-btn");
 const nameInput = popup.querySelector('.popup__input_name_value');
 const jobInput = popup.querySelector('.popup__input_infoname_value');

 const profile = document.querySelector(".profile");
 const editOpenbtn = profile.querySelector(".profile__edit-btn");
 const profileName = profile.querySelector(".profile__name");
 const infoname = profile.querySelector(".profile__infoname");
 const addOpenBtn = profile.querySelector(".profile__add");

 const popupAddCard = document.querySelector(".popup-add-card");
 const containerAddCard = popupAddCard.querySelector(".popup-add-card__container");
 const addCloseBtn = popupAddCard.querySelector(".popup-add-card__close-btn");
 const imageInput = popupAddCard.querySelector(".popup__input_image_value");
 const mestoInput = popupAddCard.querySelector(".popup__input_mesto_value");

 const elContainer = document.querySelector(".elements");

 const cardTemplate = document.querySelector('.card-template');
 const popupImage = document.querySelector(".popup-image");
 const imgCloseBtn = popupImage.querySelector(".popup-image__close-btn");

 function opnPopup (item) {
    item.classList.add("popup-add-card_opened");
}
 function popupOpen () {
    
    opnPopup(popup)

    nameInput.value = profileName.textContent;
    jobInput.value = infoname.textContent;
 }

 function popupCls (item) {
     item.classList.remove("popup-add-card_opened");
 }
 function popupClose () {
     popupCls(popup)
 }

function popupAddCardOpen () {
    opnPopup(popupAddCard)
}

function popupAddCardClose () {
    popupCls(popupAddCard)
}

 function formSubmitHandler (evt) {
     evt.preventDefault();

     profileName.textContent = nameInput.value;
     infoname.textContent = jobInput.value;

     popupClose(popupAddCard);

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

     newCard.querySelector('.element__like').addEventListener('click', likeBtn);

     cardElText.textContent = card.name;
     cardElImage.src= card.link;

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

     popupAddCardClose();
 }

 function deleteCard (event) {
     const targetElement = event.target;
     const targetCard = targetElement.closest(".element");
     targetCard.remove();
 }
 function popupImgOpen (event) {
     const targetElement = event.target;
     editing = targetElement.closest(".element");

     const cardElImg = editing.querySelector(".element__image");
     const cardElTxt = editing.querySelector(".element__title");
     const popupImg = popupImage.querySelector(".popup-image__open");
     const popupTxt = popupImage.querySelector(".popup-image__name");

     popupImg.src = cardElImg.src;
     popupTxt.textContent = cardElTxt.textContent;

         popupImage.classList.add("popup-image_active");
 }
    function popupImgCls () {
        popupImage.classList.remove("popup-image_active");
    }
 render();
 
 container.addEventListener('submit', formSubmitHandler);
 editOpenbtn.addEventListener('click', popupOpen);
 editCloseBtn.addEventListener('click', popupClose);
 containerAddCard.addEventListener('submit', addBtn);
 addOpenBtn.addEventListener("click", popupAddCardOpen);
 addCloseBtn.addEventListener('click', popupAddCardClose);
 imgCloseBtn.addEventListener("click", popupImgCls);

