import { AxiosHttpClient } from "./axios-http-client"
import axios from 'axios'
import faker from 'faker'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('AxiosHttpClient', () => { 
  test('Should call axios with correct URL', async () => { 
    const mockUrl = faker.internet.url()
    const sut = new AxiosHttpClient()
    sut.post({ url: mockUrl })

    expect(mockedAxios).toHaveBeenCalledWith(mockUrl)
   })
 })