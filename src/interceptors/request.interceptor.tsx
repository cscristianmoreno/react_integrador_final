import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import request from "../services/request.service";

export class RequestInterceptor {

    constructor() {
        this.axiosInterceptorInitializer();
    }

    public axiosInterceptorInitializer(): void {
        request.interceptors.request.use(
            (req: InternalAxiosRequestConfig<unknown>): InternalAxiosRequestConfig<unknown> => {
                req.headers["Content-Type"] = "application/json";
                return req;
            }
        );

        request.interceptors.response.use(
            (res: AxiosResponse<unknown, unknown>): AxiosResponse<unknown, unknown> => {
                return res;
            },
            (error: AxiosError<unknown>): Promise<AxiosError<unknown>> => {
                console.log(error.message);
                return Promise.resolve(error);
            }
        );
    }
}