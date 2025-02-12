import React, { useState, useEffect } from "react";
import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider } from "primereact/api";
import Navbar from "./components/1-navbar/navbar";
import Banner, { FilterContainer } from "./components/2-banner/banner";
import Packages from "./components/4-packages/packages";
import Items from "./components/3-locationItems/items";
import Details from "./components/5-details/details";
import AboutUs from "./components/5-aboutUs/about";
import ContactBanner from "./components/7-contactUs/contact";
import Trending from "./Trending";
import All from "./components/7-All/all";

function App() {
  const [isMobile, setIsMobile] = useState(false); // Track mobile screen size
  const [page, setPage] = useState("home");

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
      <div
        style={{
          width: "100%",
          height: "auto",
          boxSizing: "border-box",
        }}
      >
        <Navbar isMobile={isMobile} page={page} setPage={setPage} />{" "}
        {/* Pass isMobile prop to Navbar */}
        {page === "home" && (
          <>
            <Banner isMobile={isMobile} />
            <FilterContainer isMobile={isMobile} />
            <Items isMobile={isMobile} />
            <Trending isMobile={isMobile} />
            <Details isMobile={isMobile} />
            <ContactBanner isMobile={isMobile} />
          </>
        )}
        {page === "about" && <AboutUs isMobile={isMobile} />}
        {page === "tours" && <All isMobile={isMobile} />}
        {page === "destinations" && (
          <Packages page={page} isMobile={isMobile} />
        )}
      </div>
    </PrimeReactProvider>
  );
}

export default App;
