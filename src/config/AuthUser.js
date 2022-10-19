import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthUser() {
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
    
    const navigate = useNavigate()

    const getToken = () => {
        const tokenString = sessionStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
        
        return userToken
    }

    const getUser = () => {
        const userString = sessionStorage.getItem('user')
        const userDetail = JSON.parse(userString)
        
        return userDetail
    }

    const [token, setToken] = useState(getToken())
    const [user, setUser] = useState(getUser())
    
    const saveToken = (user, token) => {
        sessionStorage.setItem('token', JSON.stringify(token))
        sessionStorage.setItem('user', JSON.stringify(user))

        setToken(token)
        setUser(user)
        window.location.reload()
    }

    const logout = () => { 
        sessionStorage.clear()
        navigate('/')
    }

    const AxiosAuth = axios.create({
        withCredentials: false,
        baseURL: API_URL
    })

    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        AxiosAuth,
        logout
    }
}