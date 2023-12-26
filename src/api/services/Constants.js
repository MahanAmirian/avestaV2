import axios from "axios";
// import { useQuery } from "react-query";

export const BASE_INSTANCE = axios.create({
  baseURL: "http://157.90.118.140/api",
  timeout: 25000
});


