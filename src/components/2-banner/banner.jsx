import mountain from "../../assets/mountain.png";
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
        style={{ width: "95%", height: "80vh", borderRadius: "20px" }}
      />
      <div style={{ position: "absolute", zIndex: 3, left: "5%" }}>
        <h1
          style={{
            fontSize: "5rem",
            color: "#fff",
            textAlign: "start",
          }}
        >
          WAGAGAI TOURS & TRAVEL
        </h1>
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
          <span style={{ width: "80%", textAlign: "start" }}>Destinations</span>
          <select className="select-style" style={{ width: "80%", textAlign: "end" }}>
            <option className="option-style" value="city or Region">City</option>
            <option className="option-style" value="city or Region">Region</option>
            <option className="option-style" value="city or Region">Country</option>
          </select>
        </div>
        <div style={filterStyle}>
          <span style={{ width: "80%", textAlign: "start" }}>All Activity</span>
          <select className="select-style" style={{ width: "80%", textAlign: "end" }}>
            <option className="option-style" value="city or Region">Outdoor Activities</option>
            <option className="option-style" value="city or Region">Cultural Experiences</option>
            <option className="option-style" value="city or Region">Water Activities</option>
            <option className="option-style" value="city or Region">Urban Delights</option>
            <option className="option-style" value="city or Region">Adventure Sports</option>
          </select>
        </div>
        <div style={filterStyle}>
          <span style={{ width: "80%", textAlign: "start" }}>
            Departure Date
          </span>
          <select className="select-style" style={{ width: "80%", textAlign: "end" }}>
            <option className="option-style" value="city or Region">December 26th, 2024</option>
            <option className="option-style" value="city or Region">December 27th, 2024</option>
            <option className="option-style" value="city or Region">December 28th, 2024</option>
            <option className="option-style" value="city or Region">December 29th, 2024</option>
            <option className="option-style" value="city or Region">December 30th, 2024</option>
          </select>
        </div>
        <div style={filterStyle}>
          <span style={{ width: "80%", textAlign: "start" }}>Guests</span>
          <select className="select-style" style={{ width: "80%", textAlign: "end" }}>
            <option className="option-style" value="city or Region">1</option>
            <option className="option-style" value="city or Region">2-4</option>
            <option className="option-style" value="city or Region">5-7</option>
            <option className="option-style" value="city or Region">8-10</option>
            <option className="option-style" value="city or Region">10+</option>
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
