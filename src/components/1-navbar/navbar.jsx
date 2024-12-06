import React from "react";
export default function Navbar() {
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
    <div style={containerStyle}>
      <p>Wagagai Tours</p>
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
          cursor: "pointer"
        }}
      >
        Search
      </p>
      <p>MENU</p>
    </div>
  );
}
