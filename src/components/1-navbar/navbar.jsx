import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import logo1 from "../../assets/logo1.png";
import { MdMenuOpen } from "react-icons/md";
import Overlay from "../overlay/overlay";

export default function Navbar({ isMobile, page, setPage }) {
  const [visible, setVisible] = useState(false);

  // Styles separated into objects
  const containerStyle = {
    width: "100%",
    height: "4rem",
    position: "fixed",
    top: 0, // Keep navbar at the top at all times
    transition: "top 0.3s ease-in-out", // Optional, can be removed if no transition needed
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
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
    height: "60%",
    aspectRatio: "1/1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid .5px #ccc",
    borderRadius: "50%",
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
            <CiSearch size={20} />
          </p>
        ) : (
          <p style={isMobile ? searchButtonStyle2 : searchButtonStyle}>
            <CiSearch style={{ marginRight: ".5rem" }} />
            Search
          </p>
        )}

        <p style={menuButtonStyle} onClick={() => setVisible(true)}>
          <MdMenuOpen size={20} />
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