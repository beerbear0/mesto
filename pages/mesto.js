 let popup = document.querySelector(".pop-up");
 let container = popup.querySelector(".pop-up__container");
 let close = popup.querySelector(".pop-up__close-btn");
 let open = document.querySelector(".profile__edit-btn");

 open.addEventListener("click", function () {
     popup.classList.add("pop-up__opened")
 });

 close.addEventListener("click", function () {
     popup.classList.remove("pop-up__opened")
 });

 // Находим форму в DOM
let formElement = document.querySelector(".pop-up__add-btn");
// Находим поля формы в DOM
let nameInput = popup.querySelector('.pop-up__name');
let jobInput = popup.querySelector('.pop-up__infoname');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    let inputName = nameInput.querySelector(".pop-up__name").value;
    let inputJob = jobInput.querySelector(".pop-up__infoname").value;

    // Выберите элементы, куда должны быть вставлены значения полей
     let profile = document.querySelector(".profile");
     let name = profile.querySelector(".profile__name");
     let infoname = profile.querySelector(".profile__infoname");
    // Вставьте новые значения с помощью textContent
    name.textContent = inputName;
    infoname.textContent = inputJob;
};

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

