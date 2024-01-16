/* eslint-disable react/prop-types */
import { useState } from "react";
import { toPersianDigits } from "../../../../utils/toPersianDigits";
import styles from "./index.module.css";

export default function CommentToolbox({ data }) {
  const { likeCount, dislikeCount } = data;

  const [like, setLike] = useState({
    count: likeCount,
    isLiked: false,
  });

  const [dislike, setDislike] = useState({
    count: dislikeCount,
    isDisliked: false,
  });

  function handleLike() {
    if (dislike.isDisliked) {
      setDislike({ count: dislike.count - 1, isDisliked: false });
      setLike({ count: like.count + 1, isLiked: true });
    } else {
      if (like.isLiked) {
        setLike({ count: like.count - 1, isLiked: false });
      } else {
        setLike({ count: like.count + 1, isLiked: true });
      }
    }
  }

  function handleDislike() {
    if (like.isLiked) {
      setLike({ count: like.count - 1, isLiked: false });
      setDislike({ count: dislike.count + 1, isDisliked: true });
    } else {
      if (dislike.isDisliked) {
        setDislike({ count: dislike.count - 1, isDisliked: false });
      } else {
        setDislike({ count: dislike.count + 1, isDisliked: true });
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.likes} onClick={handleLike}>
        <div
          style={{ backgroundColor: like.isLiked ? "green" : "transparent" }}
          className={styles["like-icon"]}
        ></div>
        <p>{toPersianDigits(like.count)}</p>
      </div>
      <div className={styles.dislikes}>
        <div
          style={{
            backgroundColor: dislike.isDisliked ? "red" : "transparent",
          }}
          className={styles["dislike-icon"]}
          onClick={handleDislike}
        ></div>
        <p>{toPersianDigits(dislike.count)}</p>
      </div>
    </div>
  );
}
