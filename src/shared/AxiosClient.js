import axios from "axios";
import Constants from "expo-constants";
import { authHeaderInterceptor } from "./interceptors/AuthHeaderInterceptor";

export const clientInstance = axios.create({
    baseURL: Constants.manifest.extra.baseUrl
})
clientInstance.interceptors.request.use(authHeaderInterceptor)