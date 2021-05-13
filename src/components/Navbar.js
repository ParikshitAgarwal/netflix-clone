import React,{useState,useEffect} from "react";
import '../css/navbar.css'
import { auth } from "../firebase";
import netflixLogo from "../images/netflix_logo.png"


const Navbar = () => {
    const [show, handleShow] = useState(false)

    const handleLogout = () =>{
        auth.signOut();
    }

    const transitionNavBAr = () => {
            if(window.scrollY > 100){
                handleShow(true);
            }
            else{
                handleShow(false)
            }
    }

    useEffect(() => {
        window.addEventListener("scroll",transitionNavBAr)
        return () => {
            window.removeEventListener("scroll",transitionNavBAr)
        }
    }, [])
  return (
    <div className={`nav ${show && "nav_black"}`}>
        <div className="nav_content">
      <img
        src={netflixLogo}
        className="nav_logo"
        alt=""
      />
   
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" className="nav_avatar" alt="" />
      <button onClick={handleLogout}>Logout</button>
    </div>
    </div>
  );
};

export default Navbar;
