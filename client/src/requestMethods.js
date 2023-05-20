import { Axios } from "axios";

const Base_URL = "http://localhost:3000/api/"

export const publicRequest = axios.create({
    baseURL: Base_URL,
})

export const userRequest = axios.create({
    baseURL: Base_URL,
    header: {token: "Bearer "}
})