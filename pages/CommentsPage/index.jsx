import { useState } from "react";
import Comments from "../../src/components/Comments";
import CommentsHeader from "../../src/components/CommentsHeader";
import Cookies from "js-cookie";

export default function CommentsPage() {
  const [isLogin, setIsLogin] = useState(!!Cookies.get('isLogin'));

  function handleLogout() {
    Cookies.remove("isLogin");
    setIsLogin(false);
  }
  return (
    <>
      <CommentsHeader isLogin={isLogin} onLogout={handleLogout} />
      <Comments isLogin={isLogin} />
    </>
  );
}
