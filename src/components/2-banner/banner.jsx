import { CiLocationArrow1, CiViewTimeline } from "react-icons/ci";
import mountain from "../../assets/backdrop.png";
import { GiCornerFlag } from "react-icons/gi";
import { FaPeopleRobbery } from "react-icons/fa6";
export default function Banner() {
  const filterStyle = {
    width: "20%",
    height: "80%",
    borderRight: "solid .1px #00000020",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "aliceblue",
        position: "relative",
        marginTop: "5rem",
      }}
    >
      <img
        src={mountain}
        style={{ width: "95%", height: "95vh", borderRadius: "20px" }}
      />
      <div style={{ position: "absolute", zIndex: 3, width: "85%" }}>
        <span>
          <b className="font-item">WAGAGAI TOURS & TRAVEL</b>
        </span>
      </div>
      <br />
      <div
        style={{
          width: "98%",
          height: "25vh",
          backgroundColor: "#ccc",
          bottom: 0,
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
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
          <select
            className="select-style"
            style={{ width: "80%", textAlign: "end" }}
          >
            <option className="option-style" value="city or Region">
              City
            </option>
            <option className="option-style" value="city or Region">
              Region
            </option>
            <option className="option-style" value="city or Region">
              Country
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
            <GiCornerFlag style={{ marginRight: "1rem" }} />
            All Activity
          </b>
          <select
            className="select-style"
            style={{ width: "80%", textAlign: "end" }}
          >
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
          <select
            className="select-style"
            style={{ width: "80%", textAlign: "end" }}
          >
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
          <select
            className="select-style"
            style={{ width: "80%", textAlign: "end" }}
          >
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
        <div
          style={{
            width: "20%",
            height: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span
            style={{
              width: "80%",
              textAlign: "start",
              backgroundColor: "green",
              height: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50px",
              color: "#fff",
            }}
          >
            Apply
          </span>
        </div>
      </div>
    </div>
  );
}
