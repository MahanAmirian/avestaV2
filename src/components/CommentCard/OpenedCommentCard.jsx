import pic1Cm from "../../static/pic1Cm.png";

function OpenedCommentCard() {
  return (
    <div className="w-full h-2/6 bg-white bg-opacity-80 rounded-3xl flex flex-col gap-5  p-3 ">
      <div className="flex text-gray-900 gap-4">
        <div>
          <img
            src={pic1Cm}
            alt=""
            className="rounded-full"
            width={30}
            height={30}
          />
        </div>
        <div className="flex flex-col  ">
          <div className="text-xs font-extrabold">محمد رنجبر</div>
          <p className="text-xs opacity-70">پست شده در 12/10/1401</p>
        </div>
      </div>
      <div className="text-xs text-gray-900 px-4">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur,
        corrupti.
      </div>
    </div>
  );
}

export default OpenedCommentCard;
