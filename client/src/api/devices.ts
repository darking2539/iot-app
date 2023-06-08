import axios from "axios";

const AxiosFetch = axios.create({});
const baseAPIURL = import.meta.env.VITE_BASE_API_URL || "http://localhost:8080/api";



export const APIListDevices = () => {
    
    var token = localStorage.getItem("token")

    return AxiosFetch({
        method: 'POST',
        url: `${baseAPIURL}/device/list`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

export const APIDeleteDevices = (id: string) => {
    
    var token = localStorage.getItem("token")

    return AxiosFetch({
        method: 'Delete',
        url: `${baseAPIURL}/device/delete/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}

interface SubmitParam {
    id: string;
    deviceId: string;
    deviceName: string;
    protocol: string;
}

export const APISubmitDevices = (param: SubmitParam) => {
    
    var token = localStorage.getItem("token")

    return AxiosFetch({
        method: 'Post',
        url: `${baseAPIURL}/device/submit`,
        headers: {
            Authorization: `Bearer ${token}`
        },
        data: {
            id: param.id || "",
            deviceId: param.deviceId,
            deviceName: param.deviceName,
            protocol: param.protocol
        }
    });
}

export const APIGetDevices = (id: string) => {
    
    var token = localStorage.getItem("token")

    return AxiosFetch({
        method: 'Get',
        url: `${baseAPIURL}/device/${id}`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
}