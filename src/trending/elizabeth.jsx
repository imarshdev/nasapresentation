import React from "react";
import { TiArrowBack } from "react-icons/ti";
import Kibale from "../assets/trendingImages/kibale.png";
import { styles } from "../trendingitems";

const QueenElizabethTour = ({ setIsOpen }) => {
  const itinerary = [
    {
      day: 1,
      title: "Arrival in Uganda",
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
      title: "Drive to Kibale National Park",
      schedule: [
        {
          time: "Morning",
          details: [
            "Depart from Kampala to Kibale National Park (8 hours drive).",
            "Stopover for lunch in Fort Portal town.",
            "Pass through small towns, villages, tea farms, and roadside markets.",
          ],
        },
        {
          time: "Evening",
          details: ["Arrival at Kibale Forest Camp.", "Relax and unwind."],
        },
      ],
    },
    {
      day: 3,
      title: "Chimpanzee Tracking in Kibale National Park",
      schedule: [
        {
          time: "Morning",
          details: [
            "Briefing at Kibale National Park office about chimpanzee tracking.",
            "Go on a guided primate walk in search of chimpanzees and 12 other primates.",
            "Spend 1 hour with the chimpanzees.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Visit the community and take a walk in Bigodi Swamp, home to the great blue Turaco bird.",
            "Enjoy bird watching and primate spotting.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Return to Kibale Forest Camp for dinner and overnight stay.",
          ],
        },
      ],
    },
    {
      day: 4,
      title:
        "Visit Caves & Crater Lakes, Drive to Queen Elizabeth National Park",
      schedule: [
        {
          time: "Morning",
          details: [
            "Cultural tour of Amabere Ga Nyina Mwiru caves near Fort Portal.",
            "Explore the explosion crater lakes surrounding the area.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Lunch in Fort Portal town and visit to the Tooro Kingdom Palace.",
            "Drive to Queen Elizabeth National Park.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Arrival at Bush Lodge.",
            "Overnight stay at Queen Elizabeth National Park.",
          ],
        },
      ],
    },
    {
      day: 5,
      title: "Wildlife Game Drives in Queen Elizabeth National Park",
      schedule: [
        {
          time: "Morning",
          details: [
            "Early morning wildlife safari game drive in Queen Elizabeth National Park.",
            "Spot lions, leopards, elephants, buffalo, and more.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Boat cruise along the Kazinga Channel, spotting hippos and wildlife.",
            "Bird watching with over 600 species in the park.",
          ],
        },
        {
          time: "Evening",
          details: ["Return to Bush Lodge for dinner and overnight stay."],
        },
      ],
    },
    {
      day: 6,
      title: "Drive to Bwindi Impenetrable National Park",
      schedule: [
        {
          time: "Morning",
          details: [
            "Drive to Bwindi Impenetrable National Park (6-hour journey).",
            "Pass through the Kigezi Highlands, known as the ‘Switzerland of Africa.’",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Lunch in Kabale town.",
            "Arrival at Rushaga Gorilla Camp for check-in.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Relax at the lodge and enjoy views of the surrounding forest.",
          ],
        },
      ],
    },
    {
      day: 7,
      title: "Gorilla Trekking in Bwindi Impenetrable National Park",
      schedule: [
        {
          time: "Morning",
          details: [
            "Briefing at the park office about the gorilla trekking experience.",
            "Trek through the dense rainforest in search of mountain gorillas.",
            "Spend 1 hour with the gorillas in their natural habitat.",
          ],
        },
        {
          time: "Afternoon",
          details: ["Return to Rushaga Gorilla Camp for lunch and relaxation."],
        },
        {
          time: "Evening",
          details: ["Enjoy dinner and overnight stay at the lodge."],
        },
      ],
    },
    {
      day: 8,
      title: "Drive to Kampala",
      schedule: [
        {
          time: "Morning",
          details: [
            "Drive from Bwindi to Kampala (9 hours journey).",
            "Stop at the equator crossing in Kayabwe for photos.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Arrival in Kampala and transfer to your hotel in Entebbe.",
            "Overnight stay in Entebbe.",
          ],
        },
      ],
    },
    {
      day: 9,
      title: "Departure",
      schedule: [
        {
          time: "Morning",
          details: ["Relax at the hotel or do last-minute souvenir shopping."],
        },
        {
          time: "Afternoon",
          details: [
            "Transfer to Entebbe International Airport for your departure flight.",
          ],
        },
      ],
    },
  ];

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
        <TiArrowBack size={30} />
      </button>
      <img src={Kibale} style={{ width: "100%" }} />
      <div style={styles.container}>
        <h1>9 Days Uganda Wildlife Vacation</h1>
        <p>
          This Uganda wildlife Vacation Safari takes you on a gratifying journey
          to see gorillas, chimps, and the abundant wildlife in Uganda’s wild
          savannahs. Get up close with chimpanzees in Kibale Forest National
          Park, spot elephants, lions, and hippos in Queen Elizabeth National
          Park, and trek through the dense rainforest to witness the majestic
          mountain gorillas in Bwindi Impenetrable National Park.
        </p>
        <h3>Detailed Itinerary:</h3>
        {itinerary.map((item) => (
          <div key={item.day} style={{ marginBottom: "20px" }}>
            <h3>
              Day {item.day}: {item.title}
            </h3>
            {item.schedule.map((timeSlot, index) => (
              <div key={index}>
                <h4>{timeSlot.time}</h4>
                <ul>
                  {timeSlot.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <h3>What's Included</h3>
        <ul>
          <li>8 days accommodation on a full board basis.</li>
          <li>English speaking guide/driver.</li>
          <li>Meals on a full board basis.</li>
          <li>Drinking water throughout the safari.</li>
          <li>All ground transportations in a 4WD with pop-up roof.</li>
          <li>Entry permits.</li>
        </ul>
        <h3>What's Not Included</h3>
        <ul>
          <li>Flights.</li>
          <li>Insurance.</li>
          <li>Personal spending money.</li>
          <li>Visas.</li>
        </ul>
        <h3>Price: From US$4,100</h3>
        <p>
          We hope you enjoy your time with Wagagai Tours & Travel and create
          memories that will last a lifetime. Safe travels!
        </p>
        <button style={styles.bookNowButton}>Book Now</button>
      </div>
    </div>
  );
};

export default QueenElizabethTour;
