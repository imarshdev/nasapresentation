import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import logo1 from "../../assets/logo1.png";
import { MdMenuOpen } from "react-icons/md";
import Overlay from "../overlay/overlay";

export default function Navbar({ isMobile, page, setPage }) {
  const [visible, setVisible] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Styles separated into objects
  const containerStyle = {
    width: "100%",
    height: "5rem",
    position: "fixed",
    top: showNavbar ? 0 : "-5rem", // Hide navbar when scrolling down
    transition: "top 0.3s ease-in-out",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#5cbdb9",
    zIndex: 9,
  };

  const containerStyle2 = {
    ...containerStyle,
    justifyContent: "space-between",
    padding: "0 1rem",
  };

  const navItemStyle = (currentPage) => ({
    width: "23%",
    height: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    backgroundColor: page === currentPage ? "darkgreen" : "transparent",
    color: page === currentPage ? "#fff" : "#000",
    cursor: "pointer",
  });

  const navSpanStyle = {
    width: "60%",
    height: "80%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "aliceblue",
    borderRadius: "50px",
    border: "solid .5px #cccccc50",
  };

  const searchButtonStyle = {
    width: "10%",
    textAlign: "start",
    backgroundColor: "orange",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    color: "#fff",
    cursor: "pointer",
  };

  const searchButtonStyle2 = {
    width: "35%",
    textAlign: "start",
    backgroundColor: "orange",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    color: "#fff",
    cursor: "pointer",
  };

  const menuButtonStyle = {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid .5px #ccc",
    borderRadius: "30px",
    cursor: "pointer",
  };

  return (
    <>
      <div style={isMobile ? containerStyle2 : containerStyle}>
        <img src={logo1} style={{ height: "100%" }} />

        {/* Conditionally render nav items or menu icons based on screen size */}
        {isMobile ? (
          <></>
        ) : (
          <span style={navSpanStyle}>
            <p
              className="navitem"
              style={navItemStyle("home")}
              onClick={() => setPage("home")}
            >
              Home
            </p>
            <p
              className="navitem"
              style={navItemStyle("about")}
              onClick={() => setPage("about")}
            >
              About
            </p>
            <p
              className="navitem"
              style={navItemStyle("tours")}
              onClick={() => setPage("tours")}
            >
              Tours
            </p>
            <p
              className="navitem"
              style={navItemStyle("destinations")}
              onClick={() => setPage("destinations")}
            >
              Destinations
            </p>
          </span>
        )}

        {isMobile ? (
          <p style={menuButtonStyle}>
            <CiSearch size={24} />
          </p>
        ) : (
          <p style={isMobile ? searchButtonStyle2 : searchButtonStyle}>
            <CiSearch style={{ marginRight: ".5rem" }} />
            Search
          </p>
        )}

        <p style={menuButtonStyle} onClick={() => setVisible(true)}>
          <MdMenuOpen size={24} />
        </p>
      </div>
      <Overlay
        visible={visible}
        setVisible={setVisible}
        isMobile={isMobile}
        setPage={setPage}
      />
    </>
  );
}
