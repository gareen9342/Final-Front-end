import axios from "axios";
import { backUrl } from "../config/config";

const backUrl = "http://192.168.0.10:8787/swith/";
const ApiService = () => {};

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

ApiService.get = async (uri) => {
  let data = [];

  const config = {
    header: {
      "Content-Type": "application/json",
    },
  };
  try {
    data = await axios.get(`${uri}`, config);
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  return data;
};

ApiService.getWithHeader = async (uri, token) => {
  let data = [];

  const config = {
    header: {
      "Content-Type": "application/json",
      Authorization: "bearer " + token,
    },
  };
  try {
    data = await axios.get(`${uri}`, config);
  } catch (error) {
    console.error(error);
  }

  return data;
};

ApiService.post = async (uri, body) => {
  let resData = {};
  const config = { 'Content-Type': 'application/json'};
  try {
    resData = axios.post(`${uri}`, body, config);
  } catch (error) {
    console.error(error);
  }

  return resData;
};

ApiService.postWithHeader = async (uri, body, token) => {
  let resData = {};
  const config = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  try {
    resData = axios.post(`${uri}`, body, config);
  } catch (error) {
    console.error(error);
  }

  return resData;
};

export default ApiService;
