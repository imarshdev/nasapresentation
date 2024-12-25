import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { IoIosClose } from "react-icons/io";
import { RiHomeFill } from "react-icons/ri";
import { CgDetailsMore } from "react-icons/cg";
import { GrMapLocation } from "react-icons/gr";
import emailjs from "emailjs-com";

export default function Overlay({ visible, setVisible, isMobile, setPage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Inline styles for the component
  const sidebarStyle = { padding: "5px" };
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
    padding: "0.2rem",
    border: "none",
    color: "white",
    cursor: "pointer",
  };
  const topperStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  };
  const smallSpan = { fontSize: "12px" };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    emailjs
      .send(
        "service_x0l4ni8", // Replace with your EmailJS service ID
        "template_ejzmfta", // Replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Yv2e1B7f7KNJaouJz" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("Message sent successfully!");
          console.log("SUCCESS!", response.status, response.text);
          setVisible(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.log("Failed to send the message. Please try again.");
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
        style={sidebarStyle}
      >
        {isMobile ? (
          <>
            <div style={topperStyle}>
              <p
                style={closeButtonStyle}
                onClick={() => {
                  setVisible(false), setPage("home");
                }}
              >
                <RiHomeFill size={20} />
              </p>
              <p
                style={closeButtonStyle}
                onClick={() => {
                  setVisible(false), setPage("about");
                }}
              >
                <CgDetailsMore size={20} />
              </p>
              <p style={closeButtonStyle} onClick={() => setVisible(false)}>
                <GrMapLocation size={20} />
              </p>
              <p style={closeButtonStyle} onClick={() => setVisible(false)}>
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
          <p style={closeButtonStyle} onClick={() => setVisible(false)}>
            <IoIosClose size={30} />
          </p>
        )}
        <br />
        <br />
        <h2>Book An Appointment</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          style={textInputStyle}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          style={textInputStyle}
          placeholder="Email Address"
        />
        <br />
        <br />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          style={textareaStyle}
          placeholder="Message"
        />
        <br />
        <br />
        <button onClick={handleSubmit} style={submitButtonStyle}>
          <p>Submit now</p>
        </button>
      </Sidebar>
    </>
  );
}
