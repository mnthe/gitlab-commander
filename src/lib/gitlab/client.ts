import axios, { AxiosRequestConfig, AxiosResponse, Method } from "axios";
import * as p from 'path';
import { GitLabOption } from "./types";

export class GitLabClient {
    constructor(private option: GitLabOption) { }

    private async request(method: Method, path: string, config: AxiosRequestConfig): Promise<AxiosResponse> {
        const url = p.join(this.option.host, path)
        return await axios.request({
            ...config,
            url,
            method,
        })
    }
    private get = async (path: string, data: object): Promise<AxiosResponse> => this.request('get', path, { params: data })
    private post = async (path: string, data: object): Promise<AxiosResponse> => this.request('post', path, { data })
    private patch = async (path: string, data: object): Promise<AxiosResponse> => this.request('patch', path, { data })
    private delete = async (path: string, data: object): Promise<AxiosResponse> => this.request('delete', path, { params: data })
}