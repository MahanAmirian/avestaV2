import { BASE_INSTANCE } from "../Constants";

export const getConverterCurService= async (data) => {
    const res = await BASE_INSTANCE.get("/currency/currencies/", data);
    return res.data;
  };
  