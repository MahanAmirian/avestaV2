import CommentSection from "../CommentSection";

function ReviewSection() {
  return (
    <div className="flex flex-row  h-screen  container mx-auto rounded-3xl">
      <div className=" w-full">
        <CommentSection />
      </div>
      <div className=" w-3/5 text-gray-800 my-auto flex flex-col gap-10 py-10 ">
        <h1 className="font-bold lg:text-5xl md:text-3xl sm:text-lg text-start flex flex-col gap-8">
          <div>
            {" "}
            نظرات و پیشنهادات <span style={{ color: "#1A50FF" }}>شما</span>{" "}
          </div>
          <div>کلید پیشرفت ما</div>
          <div>
            <span style={{ color: "#1A50FF" }}> در </span> صرافی اوستا
          </div>
        </h1>
        <p className="font-extrabold  sm:pl-0">
          {" "}
          امور مهاجرتی , دارای مجوز از دولت کانادا , ثبت دقیق معاملات
        </p>
      </div>
    </div>
  );
}

export default ReviewSection;
