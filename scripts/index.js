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

 const popupTitle = popup.querySelector('.popup__title');

 const profile = document.querySelector(".profile");
 const editOpenbtn = profile.querySelector(".profile__edit-btn");
 const profileName = profile.querySelector(".profile__name");
 const infoname = profile.querySelector(".profile__infoname");
 const addOpenBtn = profile.querySelector(".profile__add");
 const popupInput = popup.querySelector('.popup__input');
 const popupAddCard = document.querySelector(".popup_add-card");
 const containerAddCard = popup.querySelector(".popup__container_add-card");
 // const imageInput = popup.querySelector(".popup__input_image_value");
 // const mestoInput = popup.querySelector(".popup__input_mesto_value");
 const elContainer = document.querySelector(".elements");
 const cardTemplate = document.querySelector('.card-template');
 // const popupImage = document.querySelector(".popup_image");
 // const imgCloseBtn = popupImage.querySelector(".popup__close-btn");
 const inputOne = popup.querySelector(".popup__input_one");
 const inputTwo = popup.querySelector(".popup__input_two");


 function popupOpn () {

     nameInput.value = profileName.textContent;
     jobInput.value = infoname.textContent;

     popupOpen ()
 }

function popupAddCardOpen () {
    inputOne.classList.add("popup__input_mesto_value");
    inputTwo.classList.add("popup__input_image_value");

    const imageInput = popup.querySelector(".popup__input_image_value");
    const mestoInput = popup.querySelector(".popup__input_mesto_value");

    imageInput.placeholder = 'Ссылка на картинку';
    mestoInput.placeholder = 'Название';

    popupTitle.textContent = "Новое место";

    imageInput.value = '';
    mestoInput.value = '';

    popupOpen()
}
function popupImgOpn () {
    const popupGrid = popup.querySelector(".popup__grid")
    const popupSubmit = popup.querySelector('.popup__submit');
    const popupImgBlock = popup.querySelectorAll(".popup_image_block");

    popup.classList.add('popup_image');
    popupGrid.classList.add('popup__grid_image');
    popupImgBlock.classList.add("popup_image_block");
    popupTitle.classList.add('popup__title_image');
    popupInput.classList.add('popup__input_block');
    popupSubmit.classList.add('popup__submit_block');
    container.classList.add('popup__container_image');

    popupOpen()
}

 function popupOpen () {
    popup.classList.add("popup_opened");
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

 addOpenBtn.addEventListener('click', popupAddCardOpen);
 container.addEventListener('submit', formSubmitHandler);
 editOpenbtn.addEventListener('click', popupOpn);
 editCloseBtn.addEventListener('click', popupClose);


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
 //
 function addBtn (evt) {
     evt.preventDefault();

     inputOne.classList.add("popup__input_mesto_value");
     inputTwo.classList.add("popup__input_image_value");
     inputOne.classList.remove("popup__input_name_value");
     inputTwo.classList.remove("popup__input_infoname_value");

     const imageInput = popup.querySelector(".popup__input_image_value");
     const mestoInput = popup.querySelector(".popup__input_mesto_value");

     const inputText = mestoInput.value;
     const inputLink = imageInput.value;
     const cardAdd = addCard({name: inputText, link: inputLink})

     elContainer.prepend(cardAdd);

     imageInput.value = '';
     mestoInput.value = '';

     popupClose();
 }

 function deleteCard (event) {
     const targetElement = event.target;
     const targetCard = targetElement.closest(".element");
     targetCard.remove();
 }
 function popupImgOpen (event) {
     const targetElement = event.target;
     const editing = targetElement.closest(".element");
     popupTitle.classList.add("popup__title_image");
     const cardElImg = editing.querySelector(".element__image");
     const cardElTxt = editing.querySelector(".element__title");
     const popupImg = popup.querySelector(".popup_image_block");
     const popupTxt = popup.querySelector(".popup__title_image");

     popupImg.src = cardElImg.src;
     popupTxt.textContent = cardElTxt.textContent;

    popupImgOpn()
 }

 render();

 containerAddCard.addEventListener('submit', addBtn);

