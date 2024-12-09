import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { IoIosClose } from "react-icons/io";

export default function Overlay({ visible, setVisible }) {
  return (
    <>
      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        position="right"
      >
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
          onClick={() => setVisible(false)}
        >
          <IoIosClose size={30} />
        </p>
        <h2>Sidebar</h2>
        <input
          type="text"
          className="text"
          style={{
            width: "100%",
            height: "2rem",
            border: "solid 1px #ccc",
            paddingLeft: "1rem",
          }}
          placeholder="Name"
        />
        <br />
        <br />
        <input
          type="text"
          className="text"
          style={{
            width: "100%",
            height: "2rem",
            border: "solid 1px #ccc",
            paddingLeft: "1rem",
          }}
          placeholder="Email Address"
        />
        <br />
        <br />
        <textarea
          className="text"
          placeholder="Message"
          style={{
            width: "100%",
            height: "8rem",
            border: "solid 1px #ccc",
            paddingLeft: "1rem",
            paddingTop: ".5rem",
          }}
        />
      </Sidebar>
    </>
  );
}
