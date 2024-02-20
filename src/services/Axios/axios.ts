import { store } from "../Redux/store"
import axios from "axios"
import { setUserId } from "../Redux/reducers/userSlice"
import { setPropId } from "../Redux/reducers/propSlice"

const BASE_URL = process.env.NEXT_BASE_URL

const axiosTokenInstance = axios.create({
  baseURL: BASE_URL,
})

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

axiosInstance.interceptors.request.use(
  async config => {
    config.withCredentials = true
    return config
  },
  err => Promise.reject(err),
)

axiosInstance.interceptors.response.use(
  response => response,
  async err => {
    const prvsRequest = err?.config
    if (err?.response?.status === 401 && !prvsRequest?.sent) {
      prvsRequest.sent = true
      try {
        if (prvsRequest.url?.includes("/users")) {
          await axiosTokenInstance
            .get("/users/refresh-token/verify")
            .then(response => {
              store.dispatch(setUserId(response.data.id))
            })
            .catch(error => {
              store.dispatch(setUserId(null))
              throw Error("Unauthorized")
            })
          return axiosInstance(prvsRequest)
        } else if (prvsRequest.url?.includes("/props")) {
          await axiosTokenInstance
            .get("/props/refresh-token/verify")
            .then(response => {
              store.dispatch(setPropId(response.data.id))
            })
            .catch(error => {
              store.dispatch(setPropId(null))
              throw Error("Unauthorized")
            })
          return axiosInstance(prvsRequest)
        } else {
          throw Error("Unauthorized")
        }
      } catch (error) {
        throw error
      }
    }
    return Promise.reject(err)
  },
)

export default axiosInstance
