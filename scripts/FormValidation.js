
export class FormValidation {
    constructor(cardSelectors, formElement) {
        this._cardSelectors = cardSelectors
        this._formElement = formElement;
        // this._inputSelector = constList.inputSelector;
        // this._submitButtonSelector = constList.submitButtonSelector;
        // this._inactiveButtonClass = constList.inactiveButtonClass
        // this._inputErrorClass = constList.inputErrorClass
        // this._errorClass = constList.errorClass
        // this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        // this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    }
    enableValidation() {
        this._formElement.addEventListener('submit', (evt) => evt.preventDefault())

        this._setEventListener()
    }

    _setEventListener() {
        this._inputList = [...this._formElement.querySelectorAll(this._cardSelectors.inputSelector)];
        this._buttonElement = this._formElement.querySelector(this._cardSelectors.submitButtonSelector);

        this._toggleButtonState();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                this._toggleButtonState();
            })
        })
    };
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonElement.disabled = true;
            this._buttonElement.classList.add(this._cardSelectors.inactiveButtonClass);
        }
        else {
            this._buttonElement.classList.remove( this._cardSelectors.inactiveButtonClass);
            this._buttonElement.disabled = false;
        }
    }
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
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
        // const errorElement = this._inputElement.closest(this._cardSelectors.labelSelectors).querySelector(this._cardSelectors.inputErrorSelectors)
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

}