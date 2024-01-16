import { _BASE_URL } from "../constants/baseUrl";
import { sendRequest } from "../utils/sendRequest";

export async function getComments(page = 1) {
  const url = `${_BASE_URL}/api/v1.0/comments?pi=${page}&ps=10&mediaId=10715&profileId=0`;
  try {
    const data = await sendRequest({ url });

    if (!data.succeeded) {
      return {
        isSucceeded: false,
        data: "مشکلی در دریافت کامنت ها بوجود آمده.",
      };
    }

    const finalData = data.result.map((item) => {
      const {
        id: id,
        body: content,
        createDateUTC: postDate,
        profileAvatar: userPhoto,
        profileCaption: userNickname,
        flag: isSpoiler,
        commentLikeDislike: likesDislikes,
      } = item;

      return {
        id,
        content,
        postDate,
        userPhoto,
        userNickname,
        isSpoiler,
        likesDislikes,
      };
    });

    return {
      isSucceeded: true,
      data: finalData,
    };
  } catch (error) {
    return { isSucceeded: false, data: error };
  }
}
