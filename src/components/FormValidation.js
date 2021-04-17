export  class FormValidator {
    constructor(cardSelectors, formElement) {
        this._cardSelectors = cardSelectors
        this._formElement = formElement;
        this._inputList = [...this._formElement.querySelectorAll(this._cardSelectors.inputSelector)];
        this._buttonElement = this._formElement.querySelector(this._cardSelectors.submitButtonSelector);
    }
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            // this._setEventListener();
        })
        this._setEventListener();
    }

    _setEventListener() {


        this._toggleButtonState(this._inputList, this._buttonElement);

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState(this._inputList, this._buttonElement);
            })
        })
    };
    _toggleButtonState(inputList, buttonElement) {
        if (this._hasInvalidInput()) {
            buttonElement.disabled = true;
            buttonElement.classList.add(this._cardSelectors.inactiveButtonClass);
        }
        else {
            buttonElement.classList.remove( this._cardSelectors.inactiveButtonClass);
            buttonElement.disabled = false;
        }
    }
    _hasInvalidInput() {
        return  this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }
    _checkInputValidity(inputElement) {
        this._inputElement = inputElement;
        if (!this._inputElement.validity.valid) {
            this._showInputError(this._inputElement, inputElement.validationMessage);
        } else {
            this._hideInputError(this._inputElement);
        }
    };
    _showInputError(inputElement, errorMessage) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        this._inputElement.classList.add(this._cardSelectors.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add ( this._cardSelectors.errorClass);
    }
    _hideInputError (inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
        this._inputElement.classList.remove(this._cardSelectors.inputErrorClass);
        errorElement.classList.remove( this._cardSelectors.errorClass);
        errorElement.textContent = "";
    };
   clearValidateFormError() {
       // this._inputList = [...this._formElement.querySelectorAll(this._cardSelectors.inputSelector)];
       // const buttonElement = this._formElement.querySelector(this._cardSelectors.submitButtonSelector);

       this._inputList.forEach(inputElement => {
           // if(inputElement.classList.contains('popup__input_disabled')) {
           this._inputElement = inputElement;
               this._hideInputError(inputElement)
           // }
       })
       this._toggleButtonState(this._inputList, this._buttonElement);
   }
}