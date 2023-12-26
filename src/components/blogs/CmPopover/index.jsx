import { useState } from "react";
import SendUserCommentForm from "../SendUserCommentForm";
import userImage from "../../../static/image 2.png";
import "./styles.css";

const UserCommentSection = () => {
  // eslint-disable-next-line no-unused-vars
  const [openCommentForm, setOpenCommentForm] = useState(true);

  return (
    <div
      className={`user-comment-section galass  ${
        openCommentForm ? "animate" : "animate.grow"
      } flex flex-col absolute w-full bottom-20 rounded-2xl justify-between  transition-all duration-200 ease-in-out `}
      style={{
        height: "550px",
      }}
    >
      <div className="comment-list border h-full py-10 border-gray-400 rounded-xl  p-2 flex flex-col overflow-auto">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex fle-row gap-2 w-full">
            <img src={userImage} alt="" className="rounded-full w-10 h-10" />
            <div className="flex flex-col gap-1">
              <p>محمد رنجبر</p>
              <p className="text-xs opacity-60">1400/02/31</p>
              <p>در یک روز آفتابی، در یک شهر کوچک، یک </p>
              <hr className="border border-gray-500 w-full" />
            </div>
          </div>
        ))}
      </div>
      <div className="">
        <div>{openCommentForm && <SendUserCommentForm />}</div>
      </div>
    </div>
  );
};

export default UserCommentSection;
