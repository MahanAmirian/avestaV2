import { BASE_INSTANCE } from "../Constants";

export const getBlogsData= async (data) => {
    const res = await BASE_INSTANCE.get("/blog/article", data);
    return res.data;
  };
  