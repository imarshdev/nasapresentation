import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import WagagaiTourDetails, { SipiTourDetails } from "../packagedetails";

export default function Trending({ isMobile }) {
  const [sipiOpen, setSipiOpen] = useState(false);
  const [wagagaiOpen, setWagagaiOpen] = useState(true);
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
        >
          <SipiTourDetails setIsOpen={setSipiOpen} />
        </Sidebar>

        <div style={visaItem}>
          <h2 style={styles.title}>Wagagai Tours & Travel: 6-Day Adventure</h2>
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
      </div>
      <Sidebar
        visible={wagagaiOpen}
        onHide={() => setWagagaiOpen(false)}
        fullScreen
      >
        <WagagaiTourDetails setIsOpen={setWagagaiOpen} />
      </Sidebar>

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
          </div>
        ))}
      </div>

      <h2>Trending Travel Destinations</h2>
      <div style={wrapperStyle}>
        {Locations.length > 0 ? (
          Locations.map((location, index) => (
            <div key={index} style={visaItem}>
              <h3>{location.name}</h3>
              <p>{location.description}</p>
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

const VisaServices = [
  {
    name: "UAE Tourist Visa",
    description:
      "A short-term visa for travelers visiting the UAE for leisure, sightseeing, or visiting family.",
    duration: "14, 30, or 60 days (single or multiple entry)",
    requirements: [
      "Valid passport (6 months validity)",
      "Confirmed return ticket",
      "Hotel booking or host details",
      "Proof of funds",
    ],
    price: "Shs. 1,000,000.00",
  },
  {
    name: "Egypt Tourist Visa",
    description:
      "A visa for travelers visiting Egypt for tourism, including sightseeing at historical sites like the pyramids.",
    duration: "30 or 90 days (single or multiple entry)",
    requirements: [
      "Valid passport (6 months validity)",
      "Travel itinerary",
      "Hotel booking or host details",
      "Proof of funds",
    ],
    price: "Shs. 500,000.00",
  },
  {
    name: "Kenya eVisa",
    description:
      "An electronic visa for tourists visiting Kenya for safaris, wildlife, and cultural experiences.",
    duration: "90 days (single entry)",
    requirements: [
      "Valid passport",
      "Return ticket",
      "Proof of accommodation",
      "Proof of funds",
    ],
    price: "Shs. 500,000.00",
  },
];
const Locations = [
  {
    name: "Dubai, UAE",
    description:
      "A luxurious metropolis known for its skyscrapers, shopping, and desert adventures.",
    attractions: [
      "Burj Khalifa",
      "Palm Jumeirah",
      "Dubai Mall",
      "Desert Safari",
    ],
  },
  {
    name: "Paris, France",
    description:
      "The city of love, famous for its art, fashion, and iconic landmarks.",
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River",
      "Champs-Élysées",
    ],
  },
  {
    name: "Istanbul, Turkey",
    description:
      "A city where East meets West, filled with rich history and vibrant markets.",
    attractions: [
      "Hagia Sophia",
      "Blue Mosque",
      "Grand Bazaar",
      "Bosphorus Cruise",
    ],
  },
  {
    name: "Cairo, Egypt",
    description:
      "The heart of ancient civilization, home to the Pyramids of Giza and the Sphinx.",
    attractions: [
      "Pyramids of Giza",
      "Sphinx",
      "Nile River Cruise",
      "Egyptian Museum",
    ],
  },
  {
    name: "Bangkok, Thailand",
    description:
      "A bustling city famous for its temples, street food, and nightlife.",
    attractions: [
      "Grand Palace",
      "Floating Markets",
      "Wat Arun",
      "Khao San Road",
    ],
  },
  {
    name: "Maasai Mara, Kenya",
    description:
      "One of Africa's greatest wildlife reserves, known for the annual migration of wildebeests.",
    attractions: [
      "Safari Game Drives",
      "Big Five Animals",
      "Hot Air Balloon Safari",
      "Cultural Maasai Village",
    ],
  },
];

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
    fontSize: "14px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#27ae60",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "15px",
  },
};
