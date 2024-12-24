import { AiFillSchedule } from "react-icons/ai";
import { IoIosChatbubbles, IoIosPricetags } from "react-icons/io";
import FadeInView from "../../assets/fadein/fadein";

export default function Details({ isMobile }) {
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

  const iconSize = isMobile ? 24 : 30;

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>
        <FadeInView>
          <b>See it, feel it, love it - We bring you closer</b>
        </FadeInView>
      </h2>
      <span style={spanStyle}>
        <FadeInView delay={"1s"}>
          <IoIosChatbubbles size={iconSize} />
          <br />
          <span>
            See what others are saying - Real reviews from fellow travelers help
            you make the best choice.
          </span>
        </FadeInView>
      </span>
      <span style={spanStyle}>
        <FadeInView delay={"2s"}>
          <AiFillSchedule size={iconSize} />
          <br />
          <span>
            Change your mind anytime - Most bookings allow free cancellations up
            to 24 hours.
          </span>
        </FadeInView>
      </span>
      <span style={spanStyle}>
        <FadeInView delay={"3s"}>
          <IoIosPricetags size={iconSize} />
          <br />
          <span>
            Travel Smart - We offer the best prices so you can enjoy without
            spending a fortune.
          </span>
        </FadeInView>
      </span>
    </div>
  );
}
