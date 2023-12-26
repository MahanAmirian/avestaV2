import { BASE_INSTANCE } from "../Constants";

export const getHeroSectionData= async (data) => {
    const res = await BASE_INSTANCE.get("/hero", data);
    return res.data;
  };
  