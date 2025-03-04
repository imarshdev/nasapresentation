import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Locations, VisaServices, styles } from "./trendingitems";
import { TiArrowBack } from "react-icons/ti";
import SipiTourDetails from "./trending/sipi";
import QueenElizabethTour from "./trending/elizabeth";
import KampalaMurchisonTour from "./trending/murchison";

export default function Trending({ isMobile }) {
  const [sipiOpen, setSipiOpen] = useState(false);
  const [wagagaiOpen, setWagagaiOpen] = useState(false);
  const [elizabethOpen, setElizabethOpen] = useState(false);
  const wrapperStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "space-around",
  };
  const visaItem = {
    width: isMobile ? "90%" : "30%",
    padding: "2rem",
    fontSize: isMobile ? "0.9rem" : "1rem",
    backgroundColor: "#fff",
    marginBottom: "2rem",
    borderRadius: "5px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  };

  return (
    <>
      <h2>Available Packages</h2>
      <div style={wrapperStyle}>
        <div style={visaItem}>
          <h2 style={styles.title}>
            7-Day Tour: Sipi Falls & Wagagai Peak Hiking
          </h2>
          <p style={styles.description}>
            Embark on a thrilling 7-day adventure to the stunning Sipi Falls and
            summit Wagagai Peak, the highest point of Mount Elgon!
          </p>
          <ul style={styles.list}>
            <li>🌿 Guided hikes to Sipi Falls & Wagagai Peak</li>
            <li>🏔 Stunning views of Uganda and Kenya</li>
            <li>👣 Local guide and porter services</li>
          </ul>
          <p style={styles.price}>From $800 (UGX 3,040,000) per person</p>
          <button onClick={() => setSipiOpen(true)} style={styles.button}>
            Explore Package
          </button>
        </div>
        <Sidebar
          visible={sipiOpen}
          onHide={() => setSipiOpen(false)}
          fullScreen
          style={{ backgroundColor: "#c2c2c2" }}
        >
          <SipiTourDetails setIsOpen={setSipiOpen} />
        </Sidebar>

        <div style={visaItem}>
          <h2 style={styles.title}>
            Kampala and Murchison Falls: 6-Day Adventure
          </h2>
          <p style={styles.description}>
            Experience the best of Uganda with this 6-day adventure, including
            Entebbe, Kampala, Murchison Falls, and a thrilling Nile River
            safari!
          </p>
          <ul style={styles.list}>
            <li>🌍 Explore Entebbe & Kampala</li>
            <li>🦓 Safari at Murchison Falls National Park</li>
            <li>🚤 Boat cruise on the Nile River</li>
          </ul>
          <p style={styles.price}>Starting at $2,100 per traveler</p>
          <button onClick={() => setWagagaiOpen(true)} style={styles.button}>
            Explore Package
          </button>
        </div>
        <Sidebar
          visible={wagagaiOpen}
          onHide={() => setWagagaiOpen(false)}
          fullScreen
          style={{ backgroundColor: "#c2c2c2" }}
        >
          <KampalaMurchisonTour setIsOpen={setWagagaiOpen} />
        </Sidebar>

        <div style={visaItem}>
          <h2 style={styles.title}>
            9 Days Uganda Wildlife Vacation <br />
          </h2>
          <p style={styles.description}>
            Embark on a thrilling Uganda safari: gorillas, chimps, wildlife, and
            breathtaking scenery in a customized adventure of a lifetime
          </p>
          <ul style={styles.list}>
            <li>Gorilla Trekking in Bwindi Impenetrable National Park </li>
            <li>Chimpanzee Tracking in Kibale Forest National Park </li>
            <li>Wildlife Safaris in Queen Elizabeth National Park </li>
          </ul>
          <p style={styles.price}>From $4,100 per traveler</p>
          <button onClick={() => setElizabethOpen(true)} style={styles.button}>
            Explore Package
          </button>
        </div>
        <Sidebar
          visible={elizabethOpen}
          onHide={() => setElizabethOpen(false)}
          fullScreen
          style={{ backgroundColor: "#c2c2c2" }}
        >
          <QueenElizabethTour setIsOpen={setElizabethOpen} />
        </Sidebar>
      </div>

      <h2>Visa Services</h2>
      <div style={wrapperStyle}>
        {VisaServices.map((visa, index) => (
          <div key={index} style={visaItem}>
            <b>{visa.name}</b>
            <p style={{ fontSize: "14px" }}>
              <strong>Duration:</strong> {visa.duration}
            </p>
            <p style={{ fontSize: "14px" }}>{visa.description}</p>
            <p style={{ fontSize: "14px" }}>
              <strong>Requirements:</strong>
            </p>
            <ul style={{ textAlign: "left", fontSize: "0.9em" }}>
              {visa.requirements.map((req, i) => (
                <li style={{ fontSize: "14px" }} key={i}>
                  {req}
                </li>
              ))}
            </ul>
            <b style={{ fontSize: "13px" }}>{visa.price}</b>
            <br />
            <a
              href={`https://wa.me/+256740053621`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button style={styles.button}>Get Visa</button>
            </a>
          </div>
        ))}
      </div>

      <h2>Trending Travel Destinations</h2>
      <div style={wrapperStyle}>
        {Locations.length > 0 ? (
          Locations.map((location, index) => (
            <div key={index} style={visaItem}>
              <h3>{location.name}</h3>
              <p style={{ fontSize: "14px" }}>{location.description}</p>
              <button>
                <span>See Avavilable Packages</span>
              </button>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", width: "100%" }}>
            No trending locations available at the moment.
          </p>
        )}
      </div>
    </>
  );
}
