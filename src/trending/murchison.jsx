import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { styles } from "../trendingitems";
import TourImage from "../assets/trendingImages/murchison.png";

const KampalaMurchisonTour = ({ setIsOpen }) => {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Entebbe",
      schedule: [
        {
          time: "Morning",
          details: [
            "Arrive at Entebbe International Airport.",
            "Meet and greet with a Wagagai Tours representative.",
            "Transfer to your hotel for check-in.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Enjoy a leisurely lunch at a local restaurant.",
            "Optional visit to the Entebbe Botanical Gardens.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Welcome dinner at the hotel.",
            "Overnight stay in Entebbe.",
          ],
        },
      ],
    },
    {
      day: 2,
      title: "Kampala City Tour",
      schedule: [
        {
          time: "Morning",
          details: [
            "Breakfast at the hotel.",
            "Depart for a guided tour of Kampala, the bustling capital city of Uganda.",
            "Visit the Uganda Museum.",
            "Explore the Kasubi Tombs, a UNESCO World Heritage site.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Lunch at a local eatery.",
            "Continue the tour with a visit to the Ndere Cultural Centre.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Return to the hotel.",
            "Dinner and overnight stay in Kampala.",
          ],
        },
      ],
    },
    {
      day: 3,
      title: "Murchison Falls National Park",
      schedule: [
        {
          time: "Morning",
          details: [
            "Early breakfast and departure for Murchison Falls National Park.",
            "Scenic drive through the Ugandan countryside.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Arrive at the park and enjoy a picnic lunch.",
            "Afternoon game drive to spot diverse wildlife.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Check into your lodge within the park.",
            "Dinner and overnight stay.",
          ],
        },
      ],
    },
    {
      day: 4,
      title: "Nile River Cruise & Safari",
      schedule: [
        {
          time: "Morning",
          details: [
            "Breakfast at the lodge.",
            "Embark on a boat cruise along the Nile River to the base of Murchison Falls.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Return for lunch.",
            "Afternoon safari to explore more of the park's wildlife.",
          ],
        },
        {
          time: "Evening",
          details: ["Dinner and overnight stay at the lodge."],
        },
      ],
    },
    {
      day: 5,
      title: "Return to Kampala",
      schedule: [
        {
          time: "Morning",
          details: [
            "Breakfast and check-out from the lodge.",
            "Begin the journey back to Kampala.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Lunch en route.",
            "Arrive in Kampala for some last-minute shopping or exploration.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Farewell dinner at a cultural restaurant.",
            "Overnight stay in Kampala.",
          ],
        },
      ],
    },
    {
      day: 6,
      title: "Departure",
      schedule: [
        {
          time: "Morning",
          details: [
            "Breakfast and check-out from the hotel.",
            "Transfer to Entebbe International Airport for your departure flight.",
          ],
        },
        {
          time: "Optional",
          details: ["Visit to local craft markets for souvenirs."],
        },
      ],
    },
  ];

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "auto",
        textAlign: "left",
        overflow: "auto",
        backgroundColor: "#fff",
      }}
    >
      <button style={styles.goBack} onClick={() => setIsOpen(false)}>
        <TiArrowBack size="30" />
      </button>
      <img src={TourImage} style={{ width: "100%" }} alt="Tour" />
      <div style={styles.container}>
        <h1>Kampala and Murchison Falls: 6-Day Adventure</h1>
        {itinerary.map((day) => (
          <div key={day.day}>
            <h2>
              Day {day.day}: {day.title}
            </h2>
            {day.schedule.map((slot, index) => (
              <div key={index}>
                <h3>{slot.time}</h3>
                <ul>
                  {slot.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <h2>What is Included</h2>
        <ul>
          <li>Accommodation on full board basis.</li>
          <li>English speaking guide.</li>
          <li>Meals on full board basis.</li>
          <li>Water while in the car and Boat ride in Murchison Falls.</li>
          <li>All ground transportations.</li>
          <li>Entry permits.</li>
        </ul>
        <h2>What is not included</h2>
        <ul>
          <li>Flights.</li>
          <li>Insurance.</li>
          <li>Personal money for additional spending.</li>
          <li>Visas.</li>
        </ul>
        <h2>Starting at</h2>
        <p>
          <strong>US $2,100 / traveler</strong>
        </p>
        <a
          href={`https://wa.me/+256740053621`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button style={styles.bookNowButton}>Book Now</button>
        </a>
      </div>
    </div>
  );
};

export default KampalaMurchisonTour;
