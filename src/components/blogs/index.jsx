import { Card } from "flowbite-react";
import image1 from "../../static/image 2.png";
import { GoCommentDiscussion } from "react-icons/go";
import { BsFillSendFill } from "react-icons/bs";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineArrowUp,
  AiOutlineArrowDown,
} from "react-icons/ai";
import ScrollComponent from "../ScrollComponent";
import CmPopover from "./CmPopover";
import { useState } from "react";
import "./styles.css";
import NavBar from "../../layout/NavBar";
import { toast } from "react-toastify";
function NewsAndBlogs() {
  const [isCmSectionOpen, setIsCmSectionOpen] = useState(false);

  const toggleExpand = () => {
    setIsCmSectionOpen(!isCmSectionOpen);
  };

  function copyCurrentRouteLink() {
    // Get the current URL
    const currentUrl = window.location.href;
    console.log(currentUrl);

    // Create a temporary input element
    const tempInput = document.createElement("input");

    // Set the value of the input element to the current URL
    tempInput.value = currentUrl;

    // Append the input element to the document
    document.body.appendChild(tempInput);

    // Select the value of the input element
    tempInput.select();

    // Copy the selected value
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);
    toast.success("linke copied");
  }

  return (
    <>
      <NavBar />
      <div className="w-full h-full container mx-auto gap-20  mt-10 flex flex-row xs:flex-wrap-reverse lg:flex-nowrap">
        <div className=" xs:w-full sm:w-full md:w-full md-lg:w-full lg:w-full h-screen my-auto flex justify-center items-center">
          <div className="h-full w-1/3 sm:p-10 md:p-4 mt-20">
            <ScrollComponent />
          </div>
          <div className="h-full w-1/3 mb-10 sm:p-10 md:p-4">
            <ScrollComponent />
          </div>{" "}
          <div className="h-full w-1/3 mt-20 sm:p-10 md:p-4">
            <ScrollComponent />
          </div>
        </div>
        <div className=" xs:w-full sm:w-full md:w-full h-full  ">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={image1}
            className=" mx-auto   flex w-full flex-col items-cente"
          >
            <div className="text-xl font-bold text-gray-900 dark:text-black flex  flex-row justify-between gap-4">
              <div className="flex fle-row gap-4">
                <img src={image1} alt="" className="rounded-full w-10 h-10" />
                <div className="flex flex-col gap-2">
                  <p>محمد رنجبر</p>
                  <p className="text-xs opacity-60">1400/02/31</p>
                </div>
              </div>

              <div className="flex flex-row gap-4 justify-center items-center">
                <GoCommentDiscussion
                  onClick={() => toggleExpand()}
                  size={15}
                  className="hover:scale-105 hover:text-sky-400 transition-all duration-150 ease-linear"
                />
                <BsFillSendFill
                  onClick={copyCurrentRouteLink}
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
            <div className=" text-gray-700 text-xs font-semibold opacity-75 mb-3 relative">
              <div className="flex  flex-col gap-4">
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
            <div
              onClick={toggleExpand}
              className="cursor-pointer w-full flex justify-center transition-all duration-150"
            >
              {!isCmSectionOpen ? (
                <div className="rounded-full bg-gray-100 shadow-xl p-3">
                  <AiOutlineArrowUp size={26} />
                </div>
              ) : (
                <div className="rounded-full bg-gray-100 shadow-xl p-3">
                  <AiOutlineArrowDown size={26} />
                </div>
              )}
            </div>
            <div className={` cm-section ${isCmSectionOpen ? "open" : ""} `}>
              <div className="mt-auto relative h-full ">
                <CmPopover />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

export default NewsAndBlogs;
