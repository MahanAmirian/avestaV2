import pic1Cm from "../../static/pic1Cm.png";
function CommentProfileImg() {
  return (
    <div className="w-14 h-14 bg-white rounded-3xl p-3 flex justify-center items-center shadow-2xl">
      <img src={pic1Cm} alt="" className="rounded-full" />
    </div>
  );
}

export default CommentProfileImg;
