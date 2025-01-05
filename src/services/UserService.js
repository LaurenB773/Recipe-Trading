import axios from axios

export default {
    getProfile(userId) {
        return axios.get("/profile", { params: { userId } });
    },
    editProfile(profile) {
        axios.put('/profile', profile)
    },
    deleteProfile() {
        axios.delete('/profile')
    }
}