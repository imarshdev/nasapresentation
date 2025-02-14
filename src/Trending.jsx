import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";

export default function Trending({ isMobile }) {
  const [sipiOpen, setSipiOpen] = useState(false);
  const [wagagaiOpen, setWagagaiOpen] = useState(false);
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

const VisaServices = [
  {
    name: "30-Days Dubai Single Entry Visit Visa",
    description:
      "A short-term visa for travelers visiting the UAE for leisure, sightseeing, or visiting family.",
    duration: "30 days (single entry)",
    requirements: [
      "Valid passport (6 months validity)",
      "Confirmed flight bookings",
      "Proof of funds",
      "Hotel booking, invitation letters or host details",
    ],
    price: "$200 (Ugx 750,000)",
  },
  {
    name: "60-Days Dubai Single Entry Visit Visa",
    description:
      "A longer-term visa for travelers visiting the UAE for leisure, sightseeing, or visiting family.",
    duration: "60 days (single entry)",
    requirements: [
      "Valid passport (6 months validity)",
      "Confirmed flight bookings",
      "Proof of funds",
      "Hotel booking, invitation letters or host details",
    ],
    price: "$327 (Ugx 1,200,000)",
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
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
    textAlign: "left",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#007BFF",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  bookNowButton: {
    display: "block",
    width: "100%",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

const WagagaiTourDetails = ({ setIsOpen }) => {
  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(false)} style={styles.backButton}>
        ← Back
      </button>
      <h1 style={styles.title}>Kampala and Murchison Falls: 6-Day Adventure</h1>
      <p>
        <strong>Duration:</strong> 6 Days
      </p>
      <p>
        <strong>Price:</strong> $2,100 per traveler
      </p>

      <h2>Itinerary</h2>
      <ul>
        <li>
          <strong>Day 1:</strong> Arrival in Entebbe
        </li>
        <ul>
          <li>Arrive at Entebbe International Airport.</li>
          <li>Meet and greet with a Wagagai Tours representative.</li>
          <li>Transfer to your hotel for check-in.</li>
          <li>Optional visit to the Entebbe Botanical Gardens.</li>
          <li>Welcome dinner and overnight stay in Entebbe.</li>
        </ul>

        <li>
          <strong>Day 2:</strong> Kampala City Tour
        </li>
        <ul>
          <li>Breakfast at the hotel.</li>
          <li>
            Guided tour of Kampala, visiting the Uganda Museum and Kasubi Tombs.
          </li>
          <li>Lunch and cultural experience at Ndere Cultural Centre.</li>
          <li>Return to the hotel for dinner and overnight stay.</li>
        </ul>

        <li>
          <strong>Day 3:</strong> Murchison Falls National Park
        </li>
        <ul>
          <li>
            Early breakfast and scenic drive to Murchison Falls National Park.
          </li>
          <li>Picnic lunch and afternoon game drive.</li>
          <li>Check-in at the lodge and overnight stay.</li>
        </ul>

        <li>
          <strong>Day 4:</strong> Nile River Cruise & Safari
        </li>
        <ul>
          <li>Boat cruise along the Nile River to Murchison Falls.</li>
          <li>Lunch followed by an afternoon safari.</li>
          <li>Overnight stay at the lodge.</li>
        </ul>

        <li>
          <strong>Day 5:</strong> Return to Kampala
        </li>
        <ul>
          <li>Breakfast and check-out from the lodge.</li>
          <li>Scenic drive back to Kampala with lunch en route.</li>
          <li>Farewell dinner and overnight stay in Kampala.</li>
        </ul>

        <li>
          <strong>Day 6:</strong> Departure
        </li>
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
  );
};

const SipiTourDetails = ({ setIsOpen }) => {
  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(false)} style={styles.backButton}>
        ← Back
      </button>
      <h1 style={styles.title}>7-Day Tour: Sipi Falls & Wagagai Peak Hiking</h1>
      <p>
        <strong>Duration:</strong> 7 Days
      </p>
      <p>
        <strong>Price:</strong> $800 (UGX 3,040,000) per person
      </p>

      <h2>Itinerary</h2>
      <ul>
        <li>
          <strong>Day 1:</strong> Arrival in Entebbe – Airport pickup, hotel
          check-in, and optional tour.
        </li>
        <li>
          <strong>Day 2:</strong> Travel to Sipi Falls – Scenic drive via Jinja
          & Mbale.
        </li>
        <li>
          <strong>Day 3:</strong> Hike the 3 major waterfalls of Sipi Falls.
        </li>
        <li>
          <strong>Day 4:</strong> Hike from Kapkwai to Mude Cave Camp.
        </li>
        <li>
          <strong>Day 5:</strong> Summit Wagagai Peak (4,321m) & return to Mude
          Camp.
        </li>
        <li>
          <strong>Day 6:</strong> Descend to Kapkwai & return to
          Kapchorwa/Mbale.
        </li>
        <li>
          <strong>Day 7:</strong> Return to Kampala.
        </li>
      </ul>

      <h2>Inclusions</h2>
      <ul>
        <li>🏕 Guided trek with experienced guides</li>
        <li>🏨 Accommodation in hotels, lodges, and mountain camps</li>
        <li>🍽 Meals (breakfast, lunch, dinner)</li>
        <li>🚐 Transport & park entry fees</li>
      </ul>

      <h2>Exclusions</h2>
      <ul>
        <li>✈ Travel insurance</li>
        <li>🎒 Personal equipment</li>
        <li>💰 Tips & personal expenses</li>
      </ul>
      <br />
      <button style={styles.bookNowButton}>Book Now</button>
      <br />
    </div>
  );
};
