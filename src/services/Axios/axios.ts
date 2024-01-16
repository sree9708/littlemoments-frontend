import { useAppDispatch } from "@/hooks/useStore"
import axios from "axios"
import { setUserId } from "../Redux/reducers/userSlice"

const BASE_URL = "http://localhost:4000/api/v1/"

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
        const dispatch = useAppDispatch()
        if (prvsRequest.url?.includes("/users")) {
          await axiosInstance.get('/users/verify-token')
          .then(response => {
            dispatch(setUserId(response.data.id));
            console.log(response.data);
          })
          .catch(error => {
            dispatch(setUserId(null));
            console.error(error);
          });
          return axiosInstance(prvsRequest)
        } else if (prvsRequest.url?.includes("/props")) {

          return axiosInstance(prvsRequest)
        }else{
          throw Error("Unauthorized")
        }
      } catch (error) {
        console.log("Error refreshing token:", error)
        throw error
      }
    }
    return Promise.reject(err)
  },
)

export default axiosInstance
