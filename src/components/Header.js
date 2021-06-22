import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <ul className="flex items-stretch container rounded-full mx-auto bg-black text-yellow-600">
        <li className="active:bg-green-700">
          <Link to="/">Home</Link>
        </li>
        <li className="px-12">
          <Link to="/login">로그인</Link>
        </li>
        <li className="px-12">
          <Link to="/feed">feed</Link>
        </li>
        <li className="px-8 text-blue-400">
          <Link to="/map">map</Link>
        </li>
        <li>
          <Link to="/study/generate">스터디 만들기</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
