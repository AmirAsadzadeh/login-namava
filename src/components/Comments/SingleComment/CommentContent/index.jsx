/* eslint-disable react/prop-types */
import { useState } from "react";
import ArrowDown from "../../../Svgs/ArrowDown";
import ProfileDefault from "../../../Svgs/ProfileDefault";
import WarningIcon from "../../../Svgs/WarningIcon";
import SvgContainer from "../../../UI/SvgContainer";
import styles from "./index.module.css";
import { toPersianDate } from "../../../../utils/toPersianDate";

export default function CommentContent({
  profilePhoto,
  userNickname,
  postDate,
  content,
  isSpoiler = false,
}) {
  const [isSpoilerConfirmed, setIsSpoilerConfirmed] = useState(false);

  function handleSpoilerConfirm() {
    setIsSpoilerConfirmed(true);
  }

  const year = postDate.slice(0, 4);
  const month = postDate.slice(4, 6);
  const day = postDate.slice(6, 8);
  const date = `${year}-${month}-${day}`;

  return (
    <div className={styles.container}>
      <div className={styles["photo-name-container"]}>
        <div className={styles.photo}>
          {profilePhoto ? (
            <img src="" alt="" />
          ) : (
            <SvgContainer>
              <ProfileDefault />
            </SvgContainer>
          )}
        </div>
        <div className={styles.title}>
          <p>{userNickname}</p>
          <span>{"-"}</span>
          <p>
            {toPersianDate(date, {
              day: "numeric",
              month: "long",
              weekday: "long",
            })}{" "}
            {toPersianDate(date, {
              year: "numeric",
            })}
          </p>
        </div>
      </div>
      {isSpoiler === "Spoiled" && !isSpoilerConfirmed ? (
        <SpoilerContent onClick={handleSpoilerConfirm} />
      ) : (
        <p className={styles.content}>{content}</p>
      )}
    </div>
  );
}

function SpoilerContent({ onClick }) {
  return (
    <div className={styles.spoiler} onClick={onClick}>
      <SvgContainer>
        <WarningIcon />
      </SvgContainer>
      <p>این نظر حاوی اسپویلر است و داستان فیلم را لو میدهد.</p>
      <SvgContainer className={styles["arrow-down"]}>
        <ArrowDown />
      </SvgContainer>
    </div>
  );
}
