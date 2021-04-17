
export default class UserInfo {
    constructor(nameSelector, jobSelector, avatarSelector) {
        this._name = nameSelector;
        this._job = jobSelector;
        this._avatar = avatarSelector;
    }
    // создаем обьект с данными пользователя
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._job.textContent,
            avatar: this._avatar
        }
    }
    // принимаем новые данные пользователя и добавляем на страницу
    setUserInfo({ name, about, avatar }) {
        this._name.textContent = name ? name : this._name.textContent;
        this._job.textContent = about ? about : this._job.textContent;
        this._avatar.src = avatar ? avatar : this._avatar.src;
    }

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }
}