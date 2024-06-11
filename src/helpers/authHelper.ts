import AuthContract from "../contracts/AuthContract"

export enum LocalStorageKey {
    Token = 'token'
}


export class AuthHelper {
    token: string | null

    constructor() {
        this.token = localStorage.getItem(LocalStorageKey.Token);
    }

    get() {
        return localStorage.getItem(LocalStorageKey.Token);
    }

    setAuth(auth: AuthContract) {
        if (auth) {
            localStorage.setItem(LocalStorageKey.Token, auth.token);
        }
    }

    removeAuth() {
        localStorage.removeItem(LocalStorageKey.Token);
    }
}

const authHelper = new AuthHelper()
export default authHelper