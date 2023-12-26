import { BASE_INSTANCE } from "../Constants";

export const postCommentService= async (data) => {
    const res = await BASE_INSTANCE.post("/blog/article/1/comments/", data);
    return res.data;
  };