import { AiFillSchedule } from "react-icons/ai";
import { IoIosChatbubbles, IoIosPricetags } from "react-icons/io";
import { FaCampground, FaMountain, FaShip, FaMapSigns } from "react-icons/fa";
import {
  FaRegCalendarCheck,
  FaGlobe,
  FaHiking,
  FaMapMarkedAlt,
  FaSuitcaseRolling,
  FaBinoculars,
} from "react-icons/fa";
import FadeInView from "../../assets/fadein/fadein";

export default function Details({ isMobile }) {
  const benefits = [
    {
      title: "Seamless Booking Process",
      description:
        "Enjoy a hassle-free booking experience tailored to your convenience.",
      icon: <FaRegCalendarCheck color="blue" size={isMobile ? 24 : 30} />,
    },
    {
      title: "Unforgettable Destinations",
      description:
        "Discover unique and breathtaking locations that make every trip memorable.",
      icon: <FaGlobe color="green" size={isMobile ? 24 : 30} />,
    },
    {
      title: "Outdoor Adventure Activities",
      description:
        "Explore thrilling activities like zip-lining, paragliding, and off-road biking.",
      icon: <FaHiking color="orange" size={isMobile ? 24 : 30} />,
    },
    {
      title: "Expert Travel Guidance",
      description:
        "Rely on trusted guides who ensure your trip is both safe and enjoyable.",
      icon: <FaMapMarkedAlt color="green" size={isMobile ? 24 : 30} />,
    },
    {
      title: "Flexible Trip Options",
      description:
        "Customize your itinerary to fit your schedule and preferences.",
      icon: <FaSuitcaseRolling color="orange" size={isMobile ? 24 : 30} />,
    },
    {
      title: "Exclusive Wildlife Encounters",
      description:
        "Witness rare wildlife in their natural habitats with our eco-friendly tours.",
      icon: <FaBinoculars color="blue" size={isMobile ? 24 : 30} />,
    },
  ];

  // Define styles
  const containerStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "black",
    color: "#fff",
    padding: isMobile ? "2rem 1rem" : "5rem 0",
    margin: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center",
  };

  const headingStyle = {
    width: "100%",
    fontSize: isMobile ? "1.5rem" : "2rem",
    marginBottom: isMobile ? "1rem" : "2rem",
  };

  const spanStyle = {
    width: isMobile ? "90%" : "35%",
    padding: "2rem",
    fontSize: isMobile ? "0.9rem" : "1rem",
  };

  const constactStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    textAlign: "center",
    justifyContent: "space-around",
  };

  const benefitStyle = {
    width: isMobile ? "90%" : "30%",
    padding: "2rem",
    fontSize: isMobile ? "0.9rem" : "1rem",
    backgroundColor: "#fff",
    marginBottom: "2rem",
    borderRadius: "5px",
  };

  const benefitSpanStyle = {
    padding: "1rem",
    textAlign: "end",
    width: "100%",
    fontSize: isMobile ? "12px" : "14px",
    fontWeight: "bold",
    color: "black",
  };

  const benefitDescStyle = {
    padding: "0 1rem",
    textAlign: "start",
    width: "100%",
    fontSize: isMobile ? "12px" : "14px",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
    color: "black",
  };
  const iconSize = isMobile ? 24 : 30;

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        <FadeInView>
          <b>See it, feel it, love it - We bring you closer</b>
        </FadeInView>
      </h2>
      <span style={spanStyle}>
        <FadeInView delay={".3s"}>
          <IoIosChatbubbles size={iconSize} />
          <br />
          <span>
            See what others are saying - Real reviews from fellow travelers help
            you make the best choice.
          </span>
        </FadeInView>
      </span>
      <span style={spanStyle}>
        <FadeInView delay={".6s"}>
          <AiFillSchedule size={iconSize} />
          <br />
          <span>
            Change your mind anytime - Most bookings allow free cancellations up
            to 24 hours.
          </span>
        </FadeInView>
      </span>
      <span style={spanStyle}>
        <FadeInView delay={".9s"}>
          <IoIosPricetags size={iconSize} />
          <br />
          <span>
            Travel Smart - We offer the best prices so you can enjoy without
            spending a fortune.
          </span>
        </FadeInView>
      </span>

      <div style={constactStyle}>
        <h2 style={{ width: "100%" }}>Benefits of Wagagai Tours & Travels</h2>
        {benefits.map((item) => (
          <span style={benefitStyle}>
            {item.icon}
            <br />
            <span style={benefitSpanStyle}>{item.title}</span>
            <br />
            <span style={benefitDescStyle}>{item.description}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
