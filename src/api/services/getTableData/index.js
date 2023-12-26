import { BASE_INSTANCE } from "../Constants";

export const getTableData= async (data) => {
    const res = await BASE_INSTANCE.get("/currency/table/", data);
    return res.data;
  };
  