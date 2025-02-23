import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import Elizabeth from "./assets/trendingImages/image.png";
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
            9 Days Uganda Wildlife Vacation <br /> {"."}
          </h2>
          <p style={styles.description}>
            Embark on a thrilling Uganda safari: gorillas, chimps, wildlife, and
            breathtaking scenery in a customized adventure of a lifetime
          </p>
          <ul style={styles.list}>
            <li>🌍 Explore Entebbe & Kampala</li>
            <li>🦓 Murchison Falls Safari</li>
            <li>🚤 Nile River Cruise</li>
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
            <button style={styles.button}>Get Visa</button>
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
const WagagaiTourDetails = ({ setIsOpen }) => {
  return (
    <div
      style={{
        maxWidth: "800px",
        height: "100vh",
        margin: "auto",
        textAlign: "left",
        overflow: "auto",
        backgroundColor: "#fff",
        scrollbarWidth: "none",
      }}
    >
      <button style={styles.goBack} onClick={() => setIsOpen(false)}>
        <TiArrowBack size="30" />
      </button>
      <img src={Elizabeth} style={{ width: "100%" }} />
      <div style={styles.container}>
        <h1 style={styles.title}>
          Kampala and Murchison Falls: 6-Day Adventure
        </h1>
        <p>
          <strong>Duration:</strong> 6 Days
        </p>
        <p>
          <strong>Price:</strong> $2,100 per traveler
        </p>
        <h2>Itinerary</h2>
        <ul>
          <strong>Day 1: Arrival in Entebbe</strong>
          <ul>
            <li>Arrive at Entebbe International Airport.</li>
            <li>Meet and greet with a Wagagai Tours representative.</li>
            <li>Transfer to your hotel for check-in.</li>
            <li>Optional visit to the Entebbe Botanical Gardens.</li>
            <li>Welcome dinner and overnight stay in Entebbe.</li>
          </ul>
          <strong>Day 2: Kampala City Tour</strong>
          <ul>
            <li>Breakfast at the hotel.</li>
            <li>
              Guided tour of Kampala, visiting the Uganda Museum and Kasubi
              Tombs.
            </li>
            <li>Lunch and cultural experience at Ndere Cultural Centre.</li>
            <li>Return to the hotel for dinner and overnight stay.</li>
          </ul>
          <strong>Day 3: Murchison Falls National Park</strong>
          <ul>
            <li>
              Early breakfast and scenic drive to Murchison Falls National Park.
            </li>
            <li>Picnic lunch and afternoon game drive.</li>
            <li>Check-in at the lodge and overnight stay.</li>
          </ul>
          <strong>Day 4: Nile River Cruise & Safari</strong>
          <ul>
            <li>Boat cruise along the Nile River to Murchison Falls.</li>
            <li>Lunch followed by an afternoon safari.</li>
            <li>Overnight stay at the lodge.</li>
          </ul>
          <strong>Day 5: Return to Kampala</strong>
          <ul>
            <li>Breakfast and check-out from the lodge.</li>
            <li>Scenic drive back to Kampala with lunch en route.</li>
            <li>Farewell dinner and overnight stay in Kampala.</li>
          </ul>
          <strong>Day 6: Departure</strong>
          <ul>
            <li>Breakfast and transfer to Entebbe International Airport.</li>
            <li>Optional visit to local craft markets.</li>
          </ul>
        </ul>
        <h2>What is Included</h2>
        <ul>
          <li>🏨 Accommodation on full board basis</li>
          <li>🗣 English-speaking guide</li>
          <li>🍽 Meals on full board basis</li>
          <li>🚙 All ground transportation</li>
          <li>💧 Water while in the car</li>
          <li>🚤 Boat ride in Murchison Falls</li>
          <li>🎟 Entry permits</li>
        </ul>
        <h2>What is Not Included</h2>
        <ul>
          <li>✈ Flights</li>
          <li>📄 Visas</li>
          <li>💰 Personal spending money</li>
          <li>🛡 Travel insurance</li>
        </ul>
        <br />
        <button style={styles.bookNowButton}>Book Now</button>
        <br />
      </div>
    </div>
  );
};
