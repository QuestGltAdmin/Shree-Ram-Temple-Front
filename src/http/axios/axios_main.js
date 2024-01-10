import axios from "axios";

const axiosMain = axios.create({
  baseURL: "https://blockspace.donative.in:3009/",
  headers: {
    "Content-Type": "application/json",
  },
});
export default axiosMain;
