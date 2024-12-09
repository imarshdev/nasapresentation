import React from "react";
import { Sidebar } from "primereact/sidebar";
import { IoIosClose } from "react-icons/io";
import { RiHomeFill } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { GrMapLocation } from "react-icons/gr";

export default function Overlay({ visible, setVisible, isMobile }) {
  // Inline styles for the component
  const sidebarStyle = {
    padding: "5px",
  };

  const closeButtonStyle = {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 0.5px #ccc",
    borderRadius: "30px",
    cursor: "pointer",
  };

  const textInputStyle = {
    width: "100%",
    height: "2rem",
    border: "solid 1px #ccc",
    paddingLeft: "1rem",
  };

  const textareaStyle = {
    ...textInputStyle,
    height: "8rem",
    paddingTop: "0.5rem",
  };

  const submitButtonStyle = {
    width: "100%",
    backgroundColor: "limegreen",
    padding: "0.8rem",
    border: "none",
    color: "white",
    cursor: "pointer",
  };

  const topperStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };

  const smallSpan = {
    fontSize: "12px",
  };

  return (
    <>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        style={sidebarStyle} // Apply the container style
      >
        {isMobile ? (
          <>
            <div style={topperStyle}>
              <p
                style={closeButtonStyle} // Apply the close button style
                onClick={() => setVisible(false)}
              >
                <RiHomeFill size={20} />
              </p>
              <p
                style={closeButtonStyle} // Apply the close button style
                onClick={() => setVisible(false)}
              >
                <CgDetailsMore size={20} />
              </p>
              <p
                style={closeButtonStyle} // Apply the close button style
                onClick={() => setVisible(false)}
              >
                <GrMapLocation size={20} />
              </p>
              <p
                style={closeButtonStyle} // Apply the close button style
                onClick={() => setVisible(false)}
              >
                <IoIosClose size={30} />
              </p>
            </div>
            <div style={topperStyle}>
              <span style={smallSpan}>Home</span>
              <span style={smallSpan}>About</span>
              <span style={smallSpan}>Tours</span>
              <span style={smallSpan}>Close</span>
            </div>
          </>
        ) : (
          <p
            style={closeButtonStyle} // Apply the close button style
            onClick={() => setVisible(false)}
          >
            <IoIosClose size={30} />
          </p>
        )}
        <br />
        <br />
        <h2>Book An Appointment</h2>
        <input
          type="text"
          style={textInputStyle} // Apply the text input style
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="text"
          style={textInputStyle} // Apply the text input style
          placeholder="Email Address"
        />
        <br />
        <br />
        <textarea
          style={textareaStyle} // Apply the textarea style
          placeholder="Message"
        />
        <br />
        <br />
        <button
          onClick={() => setVisible(false)}
          style={submitButtonStyle} // Apply the submit button style
        >
          <p>Submit now</p>
        </button>
      </Sidebar>
    </>
  );
}
