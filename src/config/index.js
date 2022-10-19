import axios from "axios";

const isLocalhost = Boolean(
    window.location.hostname === "localhost" ||
    window.location.hostname === "[::1]" ||
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)

const API_URL = isLocalhost 
        ? "http://127.0.0.1:8000/"
        : "https://api.oshatechnology.com/"

const getToken = () => {
    const tokenString = sessionStorage.getItem('token')
    const userToken = JSON.parse(tokenString)
    
    return userToken
}

export const AxiosCustom = axios.create({
    withCredentials: false,
    baseURL: API_URL,
    headers: {
        'Authorization': `Bearer ${getToken()}` 
    }
})