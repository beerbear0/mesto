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