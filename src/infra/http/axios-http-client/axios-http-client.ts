import { HttpPostParams } from "@/data/protocols/http";
import axios from 'axios'

export class AxiosHttpClient {
  async post (params: HttpPostParams<any>): Promise<void> {
    // Work around in order to ensure it is typed correctly
    await axios.post(params.url, params.body)
  }
}