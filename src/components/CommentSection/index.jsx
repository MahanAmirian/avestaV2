import SliderCommentSec from "../SwiperSlider";

function CommentSection() {
  return (
    <>
      {/* <div className="min-h-screen lg:flex-nowrap  my-10 justify-between items-center container mx-32 w-full overflow-hidden flex  xs:flex-wrap-reverse md:flex-wrap  gap-20  ">
        <div className="xs:w-full sm:full md:w-3/5 lg:w-3/6 xs:h-full lg:h-screen">
          <SliderCommentSec />
        </div>
        <div className="lg:w-1/2 md:w-full  text-gray-700 font-mono font-extrabold my-auto h-full">
          <div className="text-5xl">
            نظرات و پیشنهادات <span className="text-sky-700">شما</span>
          </div>
          <div className="text-5xl">کلید پیشرفت ما</div>
          <div className="text-5xl">
            در <span className="text-sky-700">صرافی اوستا</span>
          </div>
        </div>
      </div> */}
      <div className="min-h-screen flex  xs:flex-wrap-reverse md:flex-wrap mx-4 xs:mx-2 md:mx-32 my-10">
  <div className="xs:w-full md:w-3/5 lg:w-3/6 xs:h-1/2 lg:h-screen">
    <SliderCommentSec />
  </div>
  <div className="flex flex-col justify-center items-end xs:w-full md:w-full lg:w-1/2  text-gray-700 font-mono font-extrabold">
    <div className="text-3xl xs:text-4xl sm:text-5xl">
      نظرات و پیشنهادات <span className="text-sky-700">شما</span>
    </div>
    <div className="text-3xl xs:text-4xl sm:text-5xl">کلید پیشرفت ما</div>
    <div className="text-3xl xs:text-4xl sm:text-5xl">
      در <span className="text-sky-700">صرافی اوستا</span>
    </div>
  </div>
</div>


    </>
  );
}

export default CommentSection;
