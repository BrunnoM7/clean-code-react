import { HttpPostClient, HttpPostParams, HttpResponse } from "@/data/protocols/http";
import axios from 'axios'

export class AxiosHttpClient implements HttpPostClient<any, any> {
  async post (params: HttpPostParams<any>): Promise<HttpResponse<any>> {
    try {
      const axiosResponse = await axios.post(params.url, params.body)
      return {
        statusCode: axiosResponse.status,
        body: axiosResponse.data
      }
    } catch (error: any) {
      const axiosResponse = error?.response
      return {
        statusCode: axiosResponse?.status ?? 500,
        body: axiosResponse?.data
      }
    }
  }
}