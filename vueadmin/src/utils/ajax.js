import axios from "axios";
const baseUrl = "";
export let myAjax = axios.defaults({
  baseURL: baseUrl,
});
