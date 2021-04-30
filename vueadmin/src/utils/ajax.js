import axios from "axios";
export const baseUrl = "http://webxrj.top:3838";
let myAjax = axios;
myAjax.defaults.baseURL = baseUrl;
export default myAjax;
