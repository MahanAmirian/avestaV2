// Import Swiper React components
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardScroller from "./CardScroller";
import { getBlogsData } from "../../api/services/getBlogsData";
import { useCallback } from "react";

function ScrollComponent({fetchData}) {
  const slideCount = 9; // Number of slides to render
  const [cardsData, setCardsData] = useState([]);
  
  const fetchBlogAndArticle = async () => {
    const res = await getBlogsData();
    setCardsData(res);
  };
  // useEffect(() => {
  //   fetchBlogAndArticle()
  //   console.log(cardsData)
  // }, [cardsData]);

  const slides = Array.from({ length: slideCount }, (_, index) => (
    <SwiperSlide key={index} className="bg-slate-100 rounded-2xl transition-all duration-200 ease-linear">
      <CardScroller title={cardsData[0]?.title} />
    </SwiperSlide>
  ));
  return (
    <Swiper
      direction="vertical"
      modules={[Autoplay, Pagination, Navigation]}
      mousewheel={true}
      autoplay={{ delay: 1000 }}
      spaceBetween={10}
      loop={true}
      className="mySwiper h-full m-2 rounded-2xl transition-all duration-200 ease-linear"
      slidesPerView={4}
      speed={5000}
    >
      {slides}
    </Swiper>
  );
}
export default ScrollComponent;
