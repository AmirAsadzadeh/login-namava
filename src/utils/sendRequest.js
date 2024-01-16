import axios from "axios";
import { _BASE_URL } from "../constants/baseUrl";

export async function sendRequest({ url, method = "get", body }) {
  const { data } = await axios({
    baseURL: _BASE_URL,
    url,
    method,
    data: body,
  });

  return data;
}
