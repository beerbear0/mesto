export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    // обработчик респонсов сервера
    _handleResponse(res){
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Error! : ${res.status} 123`)
        }

    }

    // получение начальных данных от пользователя
    getUserInfo() { // Запрос на загрузку данных пользователя
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(this._handleResponse)
    }


    // получение серверных карточек
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
                headers: this._headers
            }
        )
            .then(this._handleResponse)
    }

    //установка данных профиля
    patchUserProfile(input) {
        return fetch(`${this._baseUrl}/users/me`,
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: input.inputName,
                    about: input.inputAbout
                })
            })
            .then(this._handleResponse)
    }


    // смена аватары
    patchAvatar(input) {
        return fetch(`${this._baseUrl}/users/me/avatar`,  {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: input.avatarInput
            })
        })
            .then(this._handleResponse)
    }

    postUserCard(input) {
        return fetch(`${this._baseUrl}/cards`,  {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: input.inputMesto,
                link: input.inputUrl
            })
        })
            .then(this._handleResponse)
    }

    //  постановка лаек
    putLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
                method: 'PUT',
                headers: this._headers
            }
        )
            .then(this._handleResponse)
    }

    // снятие лаека
    deleteLike(id) {
        return fetch(`${this._baseUrl}/cards/likes/${id}`, {
                method: 'DELETE',
                headers: this._headers
            }
        )
            .then(this._handleResponse)
    }

    // удалить карточку
    deleteCard(id) {
        return fetch(`${this._baseUrl}/cards/${id}`,  {
                method: 'DELETE',
                headers: this._headers
            }
        )
            .then(this._handleResponse)
    }

}