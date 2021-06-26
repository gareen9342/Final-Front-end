import React from "react";
import { Link } from "react-router-dom";
const Header = ({ logout }) => {
  return (
    <div>
      <ul className="flex items-stretch container rounded-full mx-auto bg-black text-yellow-600">
        <li className="active:bg-green-700">
          <Link to="/">Home</Link>
        </li>
        <li className="px-12">
          <Link to="/feed">feed</Link>
        </li>
        <li className="px-8 text-blue-400">
          <Link to="/map">map</Link>
        </li>
        <li className="px-8">
          <Link to="/mystudy">my study</Link>
        </li>
        <li className="px-12">
          <Link to="/">
            <button onClick={logout}>Logout</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
