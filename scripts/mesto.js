 const popup = document.querySelector(".popup");
 const container = popup.querySelector(".popup__container");
 const EditCloseBtn = popup.querySelector(".popup__close-btn");
 const submitBtn = popup.querySelector(".popup__submit");
 const nameInput = popup.querySelector('.popup__name');
 const jobInput = popup.querySelector('.popup__infoname');
 
 const profile = document.querySelector(".profile");
 const EditOpenbtn = profile.querySelector(".profile__edit-btn");
 const profileName = profile.querySelector(".profile__name");
 const infoname = profile.querySelector(".profile__infoname");
 
const LikeBtn = document.querySelector(".element__like-btn");
 
 function switchPopupOpen () {
    popup.classList.toggle("popup__opened"); 
};

function BtnOn () {
    LikeBtn.setAttribute('src', './images/Union.png');
}; 

LikeBtn.addEventListener('click', function () {
    LikeBtn.setAttribute('src', './images/Union.png');
});

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    profileName.textContent = nameInput.value; 
   
    infoname.textContent = jobInput.value;
    switchPopupOpen();
    
};

container.addEventListener('submit', formSubmitHandler);  
EditOpenbtn.addEventListener('click', switchPopupOpen);
EditCloseBtn.addEventListener('click', switchPopupOpen);