import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import logo1 from "../../assets/logo1.png";
import { MdMenuOpen } from "react-icons/md";
import Overlay from "../overlay/overlay";
export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const containerStyle = {
    width: "100%",
    height: "5rem",
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    zIndex: 9,
  };
  const navItemStyle = {
    width: "23%",
    height: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
  };

  return (
    <>
      <div style={containerStyle}>
        <img src={logo1} style={{ height: "100%" }} />
        <span
          style={{
            width: "60%",
            height: "80%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "aliceblue",
            borderRadius: "50px",
            border: "solid .5px #cccccc50",
          }}
        >
          <p className="navitem" style={navItemStyle}>
            Home
          </p>
          <p className="navitem" style={navItemStyle}>
            About
          </p>
          <p className="navitem" style={navItemStyle}>
            Tours
          </p>
          <p className="navitem" style={navItemStyle}>
            Destinations
          </p>
        </span>
        <p
          style={{
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
          }}
        >
          <CiSearch style={{ marginRight: ".5rem" }} />
          Search
        </p>
        <p
          style={{
            width: "50px",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "solid .5px #ccc",
            borderRadius: "30px",
            cursor: "pointer",
          }}
          onClick={() => setVisible(true)}
        >
          <MdMenuOpen size={24} />
        </p>
      </div>
      <Overlay visible={visible} setVisible={setVisible} />
    </>
  );
}
