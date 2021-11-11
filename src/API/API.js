import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "ca82aa64-be5a-4edd-a7ef-d0813e33e053"
    }
}
)


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followAPI(u) {
        return instance.post(`follow/${u}`, {},)
            .then(response => response.data)
    },

    unFollowAPI(u) {
        return instance.delete(`follow/${u}`, {})
            .then(response => response.data)
    },
    myLogin() {
        return instance.get('auth/me')
            .then(response => response.data)
    },

    setUserProfileAPI(userID) {
        return instance.get(`profile/` + userID)
            .then(response => response.data)

    }
}