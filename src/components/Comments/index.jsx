/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import CommentInput from "./CommentInput";
import SingleComment from "./SingleComment";
import styles from "./index.module.css";
import { getComments } from "../../services/getComments";
import LoginWarning from "./LoginWarning";

export default function Comments({ isLogin }) {
  const [comments, setComments] = useState([]);
  const commentsDataLength = comments.length;
  const [isLoadingFirstData, setIsLoadingFirstData] = useState(true);
  const [isLoading, setIsLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  function handleAddComment(commentObject) {
    setComments((prev) => [commentObject, ...prev]);
  }

  function handleLoadNextPage(page) {
    async function getData() {
      setIsLoading(true);
      const { data } = await getComments(page);
      setIsLoading(false);
      setComments((prev) => [...prev, ...data]);
      setCurrentPage((prev) => prev + 1);
    }

    getData();
  }

  useEffect(() => {
    async function getData() {
      setIsLoadingFirstData(true);
      const { data } = await getComments();
      setIsLoadingFirstData(false);
      setComments(data);
    }

    getData();
  }, []);

  return (
    <div className={styles.container}>
      <p className={styles.title}>نظرات کاربران</p>
      {isLogin && <CommentInput onAdd={handleAddComment} />}
      {!isLogin && <LoginWarning />}
      <div className={styles["comments-container"]}>
        {!isLoadingFirstData &&
          comments.length > 0 &&
          comments.map((cm, i) => (
            <SingleComment
              key={cm.id}
              isLastItem={i < commentsDataLength - 1}
              commentData={cm}
            />
          ))}
      </div>
      <div
        role="button"
        className={styles.button}
        onClick={() => handleLoadNextPage(currentPage + 1)}
      >
        بیشتر
      </div>
    </div>
  );
}
