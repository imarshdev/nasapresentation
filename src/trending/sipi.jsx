import React from "react";
import { styles } from "../trendingitems";
import { TiArrowBack } from "react-icons/ti";
import Elgon from "../assets/trendingImages/elgon.png";

const SipiTourDetails = ({ setIsOpen }) => {
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
            "Lunch at a local restaurant.",
            "Optional visit to the Entebbe Botanical Gardens for a relaxing stroll.",
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
      title: "Journey to Sipi Falls",
      schedule: [
        {
          time: "Morning",
          details: [
            "Journey to Sipi Falls via Mbale City, enjoying panoramic views of:",
            "- Sugar and tea plantations in the Busoga region.",
            "- Mabira Forest (the highway passes through it).",
            "- Jinja Bridge, where the Nile flows from Lake Victoria.",
            "Transfer to your hotel for check-in.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Welcome dinner at the hotel or a local restaurant.",
            "Overnight stay in either Sipi or Kapchorwa Municipality.",
          ],
        },
      ],
    },
    {
      day: 3,
      title: "Explore Sipi Falls",
      schedule: [
        {
          time: "Morning",
          details: [
            "Pick-up from your hotel.",
            "Arrive at Sipi Falls.",
            "Embark on a guided hike to the three main waterfalls:",
            "- *Sipi Falls*: The tallest waterfall at 100 meters, offering stunning views.",
            "- *Nguma Falls*: A cascade leading to a plunge pool, perfect for swimming.",
            "- *Lawa Falls*: 85 meters high, accessible via a challenging but rewarding hike.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Enjoy a picnic lunch amidst the scenic beauty of Sipi Falls.",
            "Choose from optional activities:",
            "- Rock climbing on Sipi's rock faces.",
            "- Abseiling down Sipi Falls ($41 or 150,000 UGX).",
            "- Bird watching in diverse habitats.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Relax and enjoy views of the Karamoja plains and Mount Elgon.",
            "Depart from Sipi Falls and head to Kapchorwa Town for an overnight stay.",
          ],
        },
      ],
    },
    {
      day: 4,
      title: "Arrival at Kapkwai & Hike to Kapkwai Camp",
      schedule: [
        {
          time: "Morning",
          details: [
            "Arrive at the Kapkwai trailhead, the starting point of your adventure.",
            "Ensure you have all necessary permits and gear.",
          ],
        },
        {
          time: "Mid-Morning",
          details: [
            "Meet your guide and porters.",
            "Begin your ascent through lush montane forest.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Continue hiking, looking for black-and-white colobus monkeys and native birds.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Arrive at Kapkwai Camp (2,900m).",
            "Set up camp, enjoy dinner, and rest with stunning views.",
          ],
        },
      ],
    },
    {
      day: 5,
      title: "Kapkwai Camp to Mude Cave Camp",
      schedule: [
        {
          time: "Morning",
          details: [
            "After breakfast, start your hike to Mude Cave Camp.",
            "The trail becomes steeper and more challenging.",
          ],
        },
        {
          time: "Mid-Morning",
          details: [
            "Pass through the heath and moorland zone.",
            "See giant lobelias and unique groundsels.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Arrive at Mude Cave Camp (3,500m).",
            "Explore the caves and their historical significance.",
          ],
        },
        {
          time: "Evening",
          details: [
            "Settle in at the camp, enjoy a warm meal under the stars, and gather around a campfire.",
          ],
        },
      ],
    },
    {
      day: 6,
      title: "Summit Wagagai Peak & Return to Mude Cave Camp",
      schedule: [
        {
          time: "Early Morning",
          details: [
            "Begin your summit attempt before dawn.",
            "Enjoy a breathtaking sunrise over the mountains.",
          ],
        },
        {
          time: "Morning",
          details: [
            "Reach Wagagai Peak (4,321m), the highest point of Mount Elgon.",
            "Take in panoramic views of Uganda and Kenya.",
          ],
        },
        {
          time: "Late Morning",
          details: [
            "Begin your descent back to Mude Cave Camp.",
            "Admire the unique alpine flora.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Arrive back at Mude Cave Camp.",
            "Rest and reflect on your achievement.",
          ],
        },
        {
          time: "Evening",
          details: ["Celebrate your successful summit with a hearty dinner."],
        },
      ],
    },
    {
      day: 7,
      title: "Descend to Kapkwai & Return to Kampala",
      schedule: [
        {
          time: "Morning",
          details: [
            "After breakfast, descend back to Kapkwai.",
            "Enjoy changing landscapes as you descend.",
          ],
        },
        {
          time: "Afternoon",
          details: [
            "Arrive at Kapkwai.",
            "Transfer back to accommodation or onward travel.",
          ],
        },
        {
          time: "Evening",
          details: ["Depart with unforgettable memories of your adventure."],
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
        <TiArrowBack size="30" />
      </button>
      <img src={Elgon} style={{ width: "100%" }} />
      <div style={styles.container}>
        <h1>7-Day Sipi Falls & Wagagai Peak Hiking Tour</h1>
        {itinerary.map((day) => (
          <div key={day.day}>
            <h2>
              Day {day.day}: {day.title}
            </h2>
            {day.schedule.map((event, index) => (
              <div key={index}>
                <h3>{event.time}</h3>
                <ul>
                  {event.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
        <h2>Essential Tips</h2>
        <ul>
          <li>
            <strong>Packing:</strong> Bring warm clothing, waterproof jackets,
            hiking boots, and a sleeping bag.
          </li>
          <li>
            <strong>Fitness Level:</strong> This hike requires moderate to high
            fitness. Training is advisable.
          </li>
          <li>
            <strong>Acclimatization:</strong> Take time to adjust to altitude to
            avoid sickness.
          </li>
          <li>
            <strong>Guides & Porters:</strong> Hiring locals enhances safety and
            supports the community.
          </li>
        </ul>

        <h2>Inclusions</h2>
        <ul>
          <li>Guided trek with knowledgeable guides.</li>
          <li>Accommodation in hotels, lodges, or mountain huts.</li>
          <li>Meals included (breakfast, lunch, and dinner).</li>
          <li>Park entry fees.</li>
          <li>Transport to/from trek starting point.</li>
          <li>Emergency support and first aid.</li>
          <li>Porter services.</li>
        </ul>

        <h2>Exclusions</h2>
        <ul>
          <li>Travel insurance.</li>
          <li>Personal hiking gear.</li>
          <li>Tips & gratuities.</li>
          <li>Optional activities and personal expenses.</li>
        </ul>

        <h2>Package Price</h2>
        <p>$800 (UGX 3,040,000) per person.</p>
        <button style={styles.bookNowButton}>Book Now</button>
      </div>
    </div>
  );
};

export default SipiTourDetails;
