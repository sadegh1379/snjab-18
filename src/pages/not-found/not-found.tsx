import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import history from "utils/history";
import { NotFoundContainer } from "./css/not-found.style";
import notFoundImage from "./img/not-found.webp";

const NotFound: React.FC = () => {
  useEffect(() => {
    history.replace("/notfound");
  }, []);
  return (
    <NotFoundContainer>
      <img className="notfound_img" src={notFoundImage}></img>
      <p className="notfound_message">
        صفحه مورد <span className="first-step">نظر</span> یافت نشد!
      </p>
      <Link to="/applications">بازگشت به خانه</Link>
    </NotFoundContainer>
  );
};
export default NotFound;
