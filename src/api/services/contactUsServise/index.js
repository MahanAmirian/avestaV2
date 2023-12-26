import { BASE_INSTANCE } from "../Constants";

export const postContactUSContent= async (data) => {
    const res = await BASE_INSTANCE.post("/contactus/", data);
    return res.data;
  };