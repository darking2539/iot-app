import axios from "axios";

const AxiosFetch = axios.create({});
const baseAPIURL = import.meta.env.VITE_BASE_API_URL || "http://localhost:8080/api";

interface LoginParam {
    username: string;
    password: string;
}

export const APILogin = (jsonParam: LoginParam) => {
    return AxiosFetch({
        method: 'POST',
        url: `${baseAPIURL}/auth/login`,
        data: {
            username: jsonParam?.username,
            password: jsonParam?.password,
        }
    });
}

interface RegisterParam {
    username: string;
    password: string;
    email: string;
}

export const APIRegister = (jsonParam: RegisterParam) => {
    return AxiosFetch({
        method: 'POST',
        url: `${baseAPIURL}/auth/register`,
        data: {
            username: jsonParam?.username,
            password: jsonParam?.password,
            email: jsonParam?.email
        }
    });
}

export const APIGetProfile = () => {
    
    var token = localStorage.getItem("token")

    return AxiosFetch({
        method: 'Get',
        url: `${baseAPIURL}/auth/profile`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}