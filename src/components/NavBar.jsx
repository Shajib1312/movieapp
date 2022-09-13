import React from "react";
import "./NavBar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Logo from "../components/images/mt copy.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const [click, setClick] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => setClick(!click);
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => setClick(false)}>
          <div
            onClick={() => window.scroll(0, 0)}
            className="font-bold text-sm sm:text-xl cursor-pointer flex items-center 
      text-white"
          >
            <img src={Logo} alt="img" />
            Trailers
          </div>
        </Link>
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className="nav-item">
          <Link to="/movies" onClick={() => setClick(false)}>
            Movies
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/series" onClick={() => setClick(false)}>
            Series
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/searching" onClick={() => setClick(false)}>
            Search
          </Link>
        </li>
        {user?.email ? (
          <>
            <li className="nav-item">
              <Link to="/account" onClick={() => setClick(false)}>
                Account
              </Link>
            </li>
            <li
              className="nav-item"
              onClick={handleLogout}
              style={{ color: "red", cursor: "pointer", fontSize: "17px" }}
            >
              Logout
            </li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <Link to="/login" onClick={() => setClick(false)}>
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" onClick={() => setClick(false)}>
                Sign Up
              </Link>
            </li>
          </>
        )}
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <AiOutlineClose size={30} style={{ color: "#fff" }} />
        ) : (
          <AiOutlineMenu size={30} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
