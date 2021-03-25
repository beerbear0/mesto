// import {nameInput, jobInput} from "./index.js";

export default class UserInfo {
    constructor(nameSelector, jobSelector) {
        this._name = nameSelector;
        this._job = jobSelector;
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            info: this._job.textContent
        }
    }

    setUserInfo(data) {
        this._name = data.profileName;
        this._job = data.infoname;
    }
}