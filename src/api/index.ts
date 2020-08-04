import axios from "axios";
import { apiService } from "./api";

const getToken = () => {
  if (!localStorage.getItem("holivarChatSession")) {
    return undefined;
  }

  try {
    // @ts-ignore
    const { token } = JSON.parse(localStorage.getItem("holivarChatSession"));
    return token as undefined | string;
  } catch (e) {
    console.log(e);
  }
};

const axiosInstance = axios.create({
  transformRequest: [
    function (data, headers) {
      headers["Authorization"] = `Bearer ${getToken()}`;
      return JSON.stringify(data);
    },
  ],
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiService(axiosInstance);
