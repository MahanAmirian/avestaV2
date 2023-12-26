import { Card } from "flowbite-react";
import image2 from "../../../static/image 2.png";
// import { useState } from "react";
import { getBlogsData } from "../../../api/services/getBlogsData";
// import { useQuery } from "../../../hooks/useQuery";

function CardScroller({ title }) {
  // const query = useQuery();

  return (
    <Card
      // onClick={fetchBlogAndArticle}
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={image2}
      className="border-sky-800 h-1/3 cursor-pointer flex flex-col gap-3 text-center rounded-2xl bg-white"
    >
      <h5 className="font-semibold text-xs text-center tracking-tight text-gray-700">
        <p>{title}</p>
      </h5>
    </Card>
  );
}

export default CardScroller;
