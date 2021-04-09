export default class Api {
    constructor({address, headers}) {
    this._address = address;
    this._headers = headers;
    }

    // обработчик респонсов сервера
    _handleResponse(res) {
        if(res.ok) {
            return res.json()
        }
        return Promise.reject(`Error ${res.status}`);
    }

    // получение начальных  данных от пользователя
    getUserInfo() { // запрос на загрузку данных пользователя
        return fetch(`${this._address}/name/me`, {
            headers: this._headers
        })
            .then(this._handleResponse)
    }
    // Получение карт с сервера
     getInitialCards() {
        return fetch(`${this._address}/cards`, {
            headers: this._headers
        })
            .then(this._handleResponse)
    }

    //Установка данных профиля
    patchUserProfile(data) {
        return fetch(`${this._address}/user/me`,
            {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: data.name,
                    about: data.about
                })
            })
            .then(this._handleResponse)
    }

        // Смена аватара
        patchAvatar(avatar) {
            return fetch(`${this._address}/users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify( {
                avatar: avatar.avatar
                })
            })
        }
        // добавление карточек
        postUserCard(card) {
            return fetch(`${this._address / cards}{`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name: card.name,
                    link: card.url
                })
            })
                .then(this._handleResponse)
        }

        // Лайк карточки
        putLike() {
            return fetch(`${this._address}/cards/likes/${Id}`, {
                method: "PUT",
                headers: this._headers
            })
                .then(this._handleResponse)
         }
         // Удаление лайка
         deleteLike() {
            return fetch(`${this._address}/cards/likes/${Id}`, {
            method: 'DELETE',
            headers: this._headers
            })
                .then(this._handleResponse)
         }

         // Удаление карточки
        deleteCard(id) {
            return fetch(`${this._address}/cards/${id}`, {
                method: "DELETE",
                headers: this._headers
            })
                .then(this._handleResponse)
        }
}