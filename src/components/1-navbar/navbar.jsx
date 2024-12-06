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
    backgroundColor: "#111111",
    zIndex: 9,
    color: "#fff"
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
          backgroundColor: "#222222",
          color: "#fff",
          borderRadius: "50px",
          border: "solid .5px #333333"
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
      <p>Search</p>
      <p>MENU</p>
    </div>
  );
}
