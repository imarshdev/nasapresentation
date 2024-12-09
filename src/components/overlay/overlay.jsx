import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { IoIosClose } from "react-icons/io";

export default function Overlay({ visible, setVisible }) {
  return (
    <>
      <Sidebar visible={visible} onHide={() => setVisible(false)} position="right">
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Sidebar>
    </>
  );
}
