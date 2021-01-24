 let popup = document.querySelector(".popup");
 let container = popup.querySelector(".popup__container");
 let close = popup.querySelector(".popup__close-btn");
 let open = document.querySelector(".profile__edit-btn");

 function switchPopupOpen () {
    popup.classList.toggle("popup__opened")
}

const submitBtn = document.querySelector(".popup__submit");

const nameInput = popup.querySelector('.popup__name');
const jobInput = popup.querySelector('.popup__infoname');

const profile = document.querySelector(".profile");
const profileName = profile.querySelector(".profile__name");
const infoname = profile.querySelector(".profile__infoname");


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    profileName.textContent = nameInput.value; 
   
    infoname.textContent = jobInput.value;
    switchPopupOpen();
    

};

container.addEventListener('submit', formSubmitHandler); 
open.addEventListener('click', switchPopupOpen);
