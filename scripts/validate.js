const constList = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_disabled',
    errorClass: 'popup__error_visible'
}

const showInputError = (formElement, inputElement, errorMessage, constList) => {

    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(constList.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add (constList.errorClass);
}
const hideInputError = (formElement, inputElement, constList) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(constList.inputErrorClass);
    errorElement.classList.remove(constList.errorClass);
    errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, constList) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, constList);
    } else {
        hideInputError(formElement, inputElement, constList);
    }
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => !inputElement.validity.valid)
    }


const toggleButtonState = (inputList, submitButtonSelector, constList) => {
    // const findAtLeastOneNotValid = (inputElement) => !inputElement.validity.valid;
    // const hasNotValidInput = inputList.some(findAtLeastOneNotValid);

    if (hasInvalidInput(inputList)) {
        submitButtonSelector.disabled = true;
        submitButtonSelector.classList.add(constList.inactiveButtonClass);
    } else {
        submitButtonSelector.classList.remove(constList.inactiveButtonClass);
        submitButtonSelector.disabled = false;
    }
}

// const buttonActive = (submitButtonSelector, inactiveClass) => {
//     submitButtonSelector.classList.add(inactiveClass);
//     submitButtonSelector.disabled = false;
// }
// const buttonDeactive = (submitButtonSelector, inactiveClass) => {
//     submitButtonSelector.classList.remove(inactiveClass);
//     submitButtonSelector.disabled = true;
// }
//
// const toggleButtonState = (inputList, submitButtonSelector, constList) => {
//     if (hasInvalidInput(inputList)) {
//         buttonActive(submitButtonSelector, constList.inactiveButtonClass);
//     } else {
//         buttonDeactive(submitButtonSelector, constList.inactiveButtonClass);
//     }
// }

const setEventListener = (formElement, constList) => {
    const inputList = Array.from(formElement.querySelectorAll(constList.inputSelector));
    const submitButtonSelector = formElement.querySelector(constList.submitButtonSelector);
    toggleButtonState(inputList, submitButtonSelector, constList);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function () {
            checkInputValidity(formElement, inputElement, constList);
            toggleButtonState(inputList, submitButtonSelector, constList);
        })
    })
}


const enableValidation = (constList) => {
    const formList = Array.from(document.querySelectorAll(constList.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function (evt) {
            evt.preventDefault();
        })
        setEventListener(formElement, constList);
    })
}


enableValidation(constList)