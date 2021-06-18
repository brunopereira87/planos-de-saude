import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:'http://lb-aws-1105894158.sa-east-1.elb.amazonaws.com'
})

export const api = {
  get(endpoint){
    return axiosInstance.get(endpoint)
  },

  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  }
}