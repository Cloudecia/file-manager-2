import axios, { AxiosRequestConfig } from "axios";

import { baseURL } from "../constants/endpoints";

const config: AxiosRequestConfig = { baseURL };
export const axiosInstance = axios.create(config);
