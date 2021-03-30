
export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._name = document.querySelector(nameSelector);
        this._job = document.querySelector(jobSelector);
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            info: this._job.textContent
        }
    }

    setUserInfo({ name, info }) {
        this._name.textContent = name;
        this._job.textContent = info;
    }
}