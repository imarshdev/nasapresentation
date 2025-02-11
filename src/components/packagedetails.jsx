import React from "react";

const WagagaiTourDetails = ({ setIsOpen }) => {
  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(false)} style={styles.backButton}>← Back</button>
      <h1 style={styles.title}>Wagagai Tours & Travel: 6-Day Adventure</h1>
      <p><strong>Duration:</strong> 6 Days</p>
      <p><strong>Price:</strong> $2,100 per traveler</p>

      <h2>Itinerary</h2>
      <ul>
        <li><strong>Day 1:</strong> Arrival in Entebbe</li>
        <ul>
          <li>Arrive at Entebbe International Airport.</li>
          <li>Meet and greet with a Wagagai Tours representative.</li>
          <li>Transfer to your hotel for check-in.</li>
          <li>Optional visit to the Entebbe Botanical Gardens.</li>
          <li>Welcome dinner and overnight stay in Entebbe.</li>
        </ul>

        <li><strong>Day 2:</strong> Kampala City Tour</li>
        <ul>
          <li>Breakfast at the hotel.</li>
          <li>Guided tour of Kampala, visiting the Uganda Museum and Kasubi Tombs.</li>
          <li>Lunch and cultural experience at Ndere Cultural Centre.</li>
          <li>Return to the hotel for dinner and overnight stay.</li>
        </ul>

        <li><strong>Day 3:</strong> Murchison Falls National Park</li>
        <ul>
          <li>Early breakfast and scenic drive to Murchison Falls National Park.</li>
          <li>Picnic lunch and afternoon game drive.</li>
          <li>Check-in at the lodge and overnight stay.</li>
        </ul>

        <li><strong>Day 4:</strong> Nile River Cruise & Safari</li>
        <ul>
          <li>Boat cruise along the Nile River to Murchison Falls.</li>
          <li>Lunch followed by an afternoon safari.</li>
          <li>Overnight stay at the lodge.</li>
        </ul>

        <li><strong>Day 5:</strong> Return to Kampala</li>
        <ul>
          <li>Breakfast and check-out from the lodge.</li>
          <li>Scenic drive back to Kampala with lunch en route.</li>
          <li>Farewell dinner and overnight stay in Kampala.</li>
        </ul>

        <li><strong>Day 6:</strong> Departure</li>
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

export const SipiTourDetails = ({ setIsOpen }) => {
  return (
    <div style={styles.container}>
      <button onClick={() => setIsOpen(false)} style={styles.backButton}>← Back</button>
      <h1 style={styles.title}>7-Day Tour: Sipi Falls & Wagagai Peak Hiking</h1>
      <p><strong>Duration:</strong> 7 Days</p>
      <p><strong>Price:</strong> $800 (UGX 3,040,000) per person</p>

      <h2>Itinerary</h2>
      <ul>
        <li><strong>Day 1:</strong> Arrival in Entebbe – Airport pickup, hotel check-in, and optional tour.</li>
        <li><strong>Day 2:</strong> Travel to Sipi Falls – Scenic drive via Jinja & Mbale.</li>
        <li><strong>Day 3:</strong> Hike the 3 major waterfalls of Sipi Falls.</li>
        <li><strong>Day 4:</strong> Hike from Kapkwai to Mude Cave Camp.</li>
        <li><strong>Day 5:</strong> Summit Wagagai Peak (4,321m) & return to Mude Camp.</li>
        <li><strong>Day 6:</strong> Descend to Kapkwai & return to Kapchorwa/Mbale.</li>
        <li><strong>Day 7:</strong> Return to Kampala.</li>
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

const styles = {
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
  title: {
    fontSize: "22px",
    fontWeight: "bold",
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

export default WagagaiTourDetails;