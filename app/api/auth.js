import apiClient from "./client";

const login = (email, password) => apiClient.post('/auth',{email,password})
const register = (username,email,password) => apiClient.post('/auth/users/',{username,email,password})
export default {
    login,
    register,
}