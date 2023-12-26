import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Controller,
  EffectCreative,
  EffectCards
} from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";
import { useState } from "react";
import HorizentalSlider from "../CommentCard/HorizentalSlider";
import CommentCard from "../CommentCard";
import CommentProfileImg from "../CommentCard/CommentProfileImg";
import OpenedCommentCard from "../CommentCard/OpenedCommentCard";

const SliderCommentSec = () => {
  const [isCardOpen, setIsCardOpen] = useState(true);

  const slideData = [
    [
      isCardOpen ? <CommentProfileImg /> : <OpenedCommentCard />,
      <CommentProfileImg />,
      <CommentProfileImg />,
      <CommentProfileImg />,
    ],
    [
      <CommentProfileImg />,
      isCardOpen ? <CommentProfileImg /> : <OpenedCommentCard />,
      <CommentProfileImg />,
      <CommentProfileImg />,
    ],
    [
      <CommentProfileImg />,
      <CommentProfileImg />,
      isCardOpen ? <CommentProfileImg /> : <OpenedCommentCard />,
      <CommentProfileImg />,
    ],
    [
      <CommentProfileImg />,
      <CommentProfileImg />,
      <CommentProfileImg />,
      isCardOpen ? <CommentProfileImg /> : <OpenedCommentCard />,
    ],
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, Controller, EffectCreative, EffectCards]}
      grabCursor={true}
      onDurationChange={10}
      effect="cards"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      onSwiper={() => setIsCardOpen(!isCardOpen)}
      autoplay={{ delay: 3500 }}
      className="h-full w-full p-10 rounded-3xl"
    >
      {slideData.map((slides, index) => (
        <SwiperSlide
          key={index}
          className="commentBg flex bg-sky-700 bg-opacity-70 flex-col rounded-3xl gap-3 p-10"
        >
          {slides}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderCommentSec;
