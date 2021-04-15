
export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
        this._avatar = document.querySelector(avatarSelector)
    }
    // создаем обьект с данными пользователя
    getUserInfo() {
        return {
            name: this._name.textContent,
            info: this._job.textContent,
            avatar: this._avatar.src
        }
    }
    // принимаем новые данные пользователя и добавляем на страницу
    setUserInfo(data) {
        this._name.textContent = data.name;
        this._job.textContent = data.info;
        this._avatar.src = data.avatar;
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}