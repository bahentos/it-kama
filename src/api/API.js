import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "33da27bd-ba6f-4cd1-85c7-2987adbb3e20"
    },
})


export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
                return response.data
            })
    },

    followUsers (id) {
        return instance
            .post(`follow/${id}`).then(response => {
                return response.data
            })
    },

    unfollowUsers (id) {
        return instance
            .delete(`follow/${id}`).then(response => {
                return response.data
            })
    },
};

export const profileAPI = {
    setUserProfile (id) {
        return instance
            .get(`profile/${id}`).then(response => {
                return response.data;

            });
    },

    userPhotoCheck (id) {
        return instance
            .get(`profile/${id}`).then(response => {
                return response.data;

            });
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    updateStatus(status) {
        return instance
            .put(`profile/status`, {status: status})
    },
};

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`).then(response => {
                return response.data;

            })
            .catch(error => { alert(error.message)});
    },
}