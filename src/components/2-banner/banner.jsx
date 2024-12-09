import { CiLocationArrow1, CiViewTimeline } from "react-icons/ci";
import mountain from "../../assets/backdrop.png";
import { GiCornerFlag } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";

export default function Banner({ isMobile }) {
  // Styles
  const containerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "aliceblue",
    position: "relative",
    marginTop: "5rem",
    zIndex: 1,
  };

  const imageStyle = {
    width: "95%",
    height: isMobile ? "40vh" : "95vh", // Adjust height based on isMobile
    borderRadius: "20px",
  };

  const textStyle = {
    position: "absolute",
    zIndex: 3,
    width: isMobile ? "100%" : "85%", // Full width on mobile
  };

  return (
    <div style={containerStyle}>
      <img src={mountain} style={imageStyle} />
      <div style={textStyle}>
        <span>
          <b
            className="font-item"
            style={{ fontSize: isMobile ? "3rem" : "7rem", margin: 0 }}
          >
            WAGAGAI
            <br />
            <span style={{ fontSize: isMobile ? "2rem" : "5rem", margin: "0" }}>
              TOURS & TRAVEL
            </span>
          </b>
        </span>
      </div>
      <br />
    </div>
  );
}

export function FilterContainer({ isMobile }) {
  const filterContainerStyle = {
    width: "98%",
    height: isMobile ? "50vh" : "30vh",
    backgroundColor: "aliceblue",
    bottom: 0,
    borderRadius: "20px",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    flexDirection: isMobile ? "column" : "row", // Stack filters on mobile
    margin: "0 1%",
    boxSizing: "border-box",
    marginTop: -50,
    position: "relative",
    zIndex: 3,
    paddingTop: "1rem",
    border: "solid 1px #ccc"
  };

  const filterStyle = {
    width: isMobile ? "100%" : "20%", // Full width on mobile
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRight: !isMobile ? "solid 0.1px #00000020" : "none", // Remove border on mobile
  };

  const selectStyle = {
    width: "80%",
    textAlign: isMobile ? "start" : "end",
  };

  const applyButtonStyle = {
    width: isMobile ? "100%" : "20%",
    height: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const applyButtonTextStyle = {
    width: "80%",
    textAlign: "start",
    backgroundColor: "green",
    height: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
    color: "#fff",
  };
  return (
    <div style={filterContainerStyle}>
      <div style={filterStyle}>
        <b
          style={{
            width: "80%",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CiLocationArrow1 style={{ marginRight: "1rem" }} />
          Destinations
        </b>
        <select className="select-style" style={selectStyle}>
          <option className="option-style">City</option>
          <option className="option-style">Region</option>
          <option className="option-style">Country</option>
        </select>
      </div>
      <div style={filterStyle}>
        <b
          style={{
            width: "80%",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
          }}
        >
          <GiCornerFlag style={{ marginRight: "1rem" }} />
          All Activity
        </b>
        <select className="select-style" style={selectStyle}>
          <option className="option-style" value="city or Region">
            Choose Activities
          </option>
          <option className="option-style" value="city or Region">
            Outdoor Activities
          </option>
          <option className="option-style" value="city or Region">
            Cultural Experiences
          </option>
          <option className="option-style" value="city or Region">
            Water Activities
          </option>
          <option className="option-style" value="city or Region">
            Urban Delights
          </option>
          <option className="option-style" value="city or Region">
            Adventure Sports
          </option>
        </select>
      </div>
      <div style={filterStyle}>
        <b
          style={{
            width: "80%",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CiViewTimeline style={{ marginRight: "1rem" }} />
          Departure Date
        </b>
        <select className="select-style" style={selectStyle}>
          <option className="option-style" value="city or Region">
            December 26th, 2024
          </option>
          <option className="option-style" value="city or Region">
            December 27th, 2024
          </option>
          <option className="option-style" value="city or Region">
            December 28th, 2024
          </option>
          <option className="option-style" value="city or Region">
            December 29th, 2024
          </option>
          <option className="option-style" value="city or Region">
            December 30th, 2024
          </option>
        </select>
      </div>
      <div style={filterStyle}>
        <span
          style={{
            width: "80%",
            textAlign: "start",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaPeopleRobbery style={{ marginRight: "1rem" }} />
          Guests
        </span>
        <select className="select-style" style={selectStyle}>
          <option className="option-style" value="city or Region">
            1
          </option>
          <option className="option-style" value="city or Region">
            2-4
          </option>
          <option className="option-style" value="city or Region">
            5-7
          </option>
          <option className="option-style" value="city or Region">
            8-10
          </option>
          <option className="option-style" value="city or Region">
            10+
          </option>
        </select>
      </div>
      <div style={applyButtonStyle}>
        <span style={applyButtonTextStyle}>Apply</span>
      </div>
    </div>
  );
}
