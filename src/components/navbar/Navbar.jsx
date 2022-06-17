import React, { useState, useEffect } from "react";
import "./navbar.scss";
import LogoImage from "../../assets/images/logo.png";
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY === 0 ? false : true);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`navbar ${isScrolled ? "navbar scrolled" : ""}`}>
      <div className="container">
        <div className="left">
          <img className="logo" src={LogoImage} alt="logo" />
          <span className="navbar-menu-item"> Homepage</span>
          <span className="navbar-menu-item"> Series</span>
          <span className="navbar-menu-item"> Movies</span>
          <span className="navbar-menu-item"> New & Popular</span>
          <span className="navbar-menu-item"> My List</span>
        </div>
        <div className="right">
          <Search className="navbar-icon-right" />
          <span>KID</span>
          <Notifications className="navbar-icon-right" />
          <img
            className="avatar"
            src="https://picsum.photos/200/200"
            alt="avatar"
          />
          <div className="profile">
            <ArrowDropDown className="navbar-icon-right icon" />
            <div className="options">
              <span className="options-item">Setting</span>
              <span className="options-item">Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
