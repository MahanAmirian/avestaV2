import { BASE_INSTANCE } from "../Constants";

export const convertCurrency= async (data) => {
    const res = await BASE_INSTANCE.post("/currency/convertor", data);
    return res.data;
  };