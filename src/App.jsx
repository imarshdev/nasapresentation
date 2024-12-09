import React, { useState, useEffect } from "react";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import Navbar from "./components/1-navbar/navbar";
import Banner, { FilterContainer } from "./components/2-banner/banner";
import Packages from "./components/4-packages/packages";
import Items from "./components/3-locationItems/items";
import Details from "./components/5-details/details";

function App() {
  const [isMobile, setIsMobile] = useState(false); // Track mobile screen size

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true); // Set to true for mobile screens
      } else {
        setIsMobile(false); // Set to false for larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen to window resize events

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <PrimeReactProvider>
      <div style={{ width: "100%", height: "auto", boxSizing: "border-box" }}>
        <Navbar isMobile={isMobile} /> {/* Pass isMobile prop to Navbar */}
        <Banner isMobile={isMobile} />
        <FilterContainer isMobile={isMobile} />
        <Items isMobile={isMobile} />
        <Packages isMobile={isMobile} />
        <Details isMobile={isMobile} />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
