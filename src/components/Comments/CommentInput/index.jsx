/* eslint-disable react/prop-types */
import { useState } from "react";
import SendButtonDeactive from "../../Svgs/SendButtonDeactive";
import SvgContainer from "../../UI/SvgContainer";
import SendButtonActive from "../../Svgs/SendButtonActive";
import ProfileDefault from "../../Svgs/ProfileDefault";
import styles from "./index.module.css";

export default function CommentInput({ profileImage, onAdd }) {
  const [input, setInput] = useState("");
  const [isSpoilerChecked, setIsSpoilerChecked] = useState(false);

  function handleToggleSpoiler() {
    setIsSpoilerChecked((prev) => !prev);
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function handleInputSubmit(e) {
    e.preventDefault();

    if (!input.trim().length) return;

    const isSpoiler = isSpoilerChecked ? "Spoiled" : "None";
    const content = input;
    const now = new Date();
    const postDate = `${now.getFullYear()}${now.getMonth()}${now.getDate()}`;
    const id = now;
    const userNickname = "امیرعلی (خودم)";
    const likesDislikes = { likeCount: 0, dislikeCount: 0 };

    onAdd({
      id,
      userNickname,
      postDate,
      isSpoiler,
      content,
      likesDislikes,
    });

    setInput("");
    setIsSpoilerChecked(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        {profileImage ? (
          <img src="" alt="user profile photo" />
        ) : (
          <SvgContainer>
            <ProfileDefault />
          </SvgContainer>
        )}
      </div>
      <form className={styles.form} onSubmit={handleInputSubmit}>
        <div className={styles["input-container"]}>
          <input
            type="text"
            placeholder="نظرتان درباره این فیلم چیست؟"
            className={styles.input}
            onChange={handleInputChange}
            value={input}
          />
          <div
            className={styles["spoiler-container"]}
            onClick={handleToggleSpoiler}
          >
            <span
              style={{ backgroundColor: isSpoilerChecked ? "green" : "transparent" }}
              className={styles.checkbox}
            ></span>
            <p>این نظر حاوی اسپویلر است و داستان فیلم را لو میدهد.</p>
          </div>
        </div>
        <div role="button" className={styles.button}>
          <SvgContainer>
            {input.trim().length ? (
              <SendButtonActive onClick={handleInputSubmit} />
            ) : (
              <SendButtonDeactive />
            )}
          </SvgContainer>
        </div>
      </form>
    </div>
  );
}
