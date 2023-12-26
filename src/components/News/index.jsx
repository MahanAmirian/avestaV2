import { Card } from "flowbite-react";
import image1 from "../../static/image 2.png";
import { GoCommentDiscussion } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import ScrollComponent from "../ScrollComponent";
import NavBar from "../../layout/NavBar";

function NewsPage() {
  return (
    <>
      <NavBar />

      <div className="w-full h-screen  gap-20  xl:overflow-hidden xs:overflow-scroll sm:overflow-hidden md:overflow-hidden  flex flex-row xs:flex-wrap md:flex-nowrap">
        <div className="w-1/2 xs:w-full  h-screen">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={image1}
            className="h-fit my-14 w-10/12 mx-auto"
          >
            <div className="text-xl font-bold text-gray-900 dark:text-white flex  flex-row justify-between gap-4">
              <div className="flex fle-row gap-4">
                <img src={image1} alt="" className="rounded-full w-10 h-10" />
                <div className="flex flex-col gap-2">
                  <p>محمد رنجبر</p>
                  <p className="text-xs opacity-60">1400/02/31</p>
                </div>
              </div>

              <div className="flex flex-row gap-4 justify-center items-center">
                <GoCommentDiscussion
                  size={15}
                  className="hover:scale-105 hover:text-sky-400 transition-all duration-150 ease-linear"
                />
                <BsFillSendFill
                  size={15}
                  className="hover:scale-105 hover:text-sky-400 transition-all duration-150 ease-linear"
                />
                <AiOutlineLike
                  size={15}
                  className="hover:scale-105 hover:text-sky-400 transition-all duration-150 ease-linear"
                />
                <AiOutlineDislike
                  size={15}
                  className="hover:scale-105 hover:text-sky-400 transition-all duration-150 ease-linear"
                />
              </div>
            </div>
            <div className=" text-gray-700 text-xs font-semibold opacity-75">
              <div>
                <p>
                  در یک روز آفتابی، در یک شهر کوچک، یک پسر جوان به نام علی در
                  حال قدم زدن در پارک بود. او به فکر آینده‌اش بود و درباره
                  رویاهایش فکر می‌کرد. علی می‌خواست یک نویسنده مشهور شود و
                  داستان‌هایش را در سراسر جهان منتشر کند. او همیشه عاشق نوشتن
                  بوده و ا
                </p>
                <p>
                  در یک روز آفتابی، در یک شهر کوچک، یک پسر جوان به نام علی در
                  حال قدم زدن در پارک بود. او به فکر آینده‌اش بود و درباره
                  رویاهایش فکر می‌کرد. علی می‌خواست یک نویسنده مشهور شود و
                  داستان‌هایش را در سراسر جهان منتشر کند. او همیشه عاشق نوشتن
                  بوده و ا
                </p>
                <hr className="border-slate-900 border-dotted" />
                <div className="flex flex-col gap-4">
                  <div className="flex fle-row gap-4">
                    <img
                      src={image1}
                      alt=""
                      className="rounded-full w-10 h-10"
                    />
                    <div className="flex flex-col gap-2">
                      <p>محمد رنجبر</p>
                      <p className="text-xs opacity-60">1400/02/31</p>
                      <p>در یک روز آفتابی، در یک شهر کوچک، یک </p>
                    </div>
                  </div>
                  <hr />
                  <div className="flex fle-row gap-4">
                    <img
                      src={image1}
                      alt=""
                      className="rounded-full w-10 h-10"
                    />
                    <div className="flex flex-col gap-2">
                      <p>محمد رنجبر</p>
                      <p className="text-xs opacity-60">1400/02/31</p>
                      <p>در یک روز آفتابی، در یک شهر کوچک، یک </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-1/2 xs:w-full sm:w-full md:w-full lg:w-full h-full my-auto flex justify-center items-center">
          <div className="h-full sm:p-10 md:p-4 mt-20">
            <ScrollComponent />
          </div>
          <div className="h-full mb-10 sm:p-10 md:p-4">
            <ScrollComponent />
          </div>{" "}
          <div className="h-full mt-20 sm:p-10 md:p-4">
            <ScrollComponent />
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsPage;
