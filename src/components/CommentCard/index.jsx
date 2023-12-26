// eslint-disable-next-line react/prop-types
import OpenedCommentCard from "./OpenedCommentCard";
import "./commentStyle.css";
function CommentCard() {
  return (
    <div>
      <div className=" w-96 h-96 flex ">
        <OpenedCommentCard/>
      </div>
    </div>
  );
}

export default CommentCard;
