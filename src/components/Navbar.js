import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../css/navbar.css";
import { auth } from "../firebase";
import netflixLogo from "../images/netflix_logo.png";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    if (input != "") {
      history.push({ pathname: "/search", state: input });
    }
  };
  const handleLogout = () => {
    auth.signOut();
  };

  const transitionNavBAr = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBAr);
    return () => {
      window.removeEventListener("scroll", transitionNavBAr);
    };
  }, []);
  return (
    <>
      <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_content">
          <img src={netflixLogo} className="nav_logo" alt="" />
          <form action="" onSubmit={search}>
            <input
              className="search_box"
              type="text"
              name="search"
              id=""
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />

            <i
              type="submit"
              onClick={search}
              class="fas fa-search"
              id="search_icon"
            ></i>
          </form>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            className={"nav_avatar"}
            alt=""
          />
          <button className="logout_btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
