import { BASEURL, TIMEOUT } from "../../utils/config";
import axios from "axios";

const axiosInstance = axios.create({
  //istanza
  baseURL: BASEURL,
  timeout: TIMEOUT,
});

export function responseApi(response) {
  //general function for get the response
  return response?.data;
}

export function responseApiError(error) {
  //general function in case of wrong api call
  return {
    message: error?.message,
    status: error?.status,
  };
}

export async function postApi(resource, obj, header = null) {
  return axiosInstance
    .post(resource, obj, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : "",
    })
    .then(responseApi())
    .catch(responseApiError());
}

export async function getApi(resource) {
  return axiosInstance
    .get(resource)
    .then(responseApi())
    .catch(responseApiError());
}

export async function getApi2(resource, header = null) {
  try {
    return await axiosInstance.get(resource, {
      headers: header !== null ? { Authorization: `Bearer ${header}` } : "",
    });
  } catch (error) {
    responseApiError();
  }
}
