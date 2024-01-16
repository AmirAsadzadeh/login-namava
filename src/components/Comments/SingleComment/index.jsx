/* eslint-disable react/prop-types */
import CommentContent from "./CommentContent";
import CommentToolbox from "./CommentToolbox";
import styles from "./index.module.css";
export default function SingleComment({ commentData, isLastItem }) {
  const {
    userNickname,
    postDate,
    content,
    userPhoto,
    isSpoiler,
    likesDislikes,
  } = commentData;
  
  return (
    <div className={isLastItem ? styles.last : "" + " " + styles.container}>
      <CommentContent
        profilePhoto={userPhoto}
        postDate={postDate}
        userNickname={userNickname}
        content={content}
        isSpoiler={isSpoiler}
      />
      <CommentToolbox data={likesDislikes} />
    </div>
  );
}
