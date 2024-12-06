import mountain from "../../assets/mountain.png";
export default function Banner() {
  const filterStyle = {
    width: "20%",
    height: "80%",
    borderRight: "solid 1px #ccc",
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
        backgroundColor: "#111111",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "55vh",
          position: "absolute",
          top: 0,
          zIndex: 1,
          background:
            "linear-gradient(to bottom, #111111 50%, transparent 100%)",
        }}
      ></div>
      <img src={mountain} style={{ width: "95%" }} />
      <div
        style={{ position: "absolute", color: "#fff", top: "10%", zIndex: 3 }}
      >
        <h1
          style={{
            fontSize: "6rem",
            WebkitTextStroke: ".3px darkgreen",
            fontWeight: "bolder",
            fontFamily: "helvetica"
          }}
        >
          WAGAGAI TOURS & TRAVEL
        </h1>
        <p>Slogan Goes Here</p>
      </div>
      <div
        style={{
          width: "98%",
          height: "20vh",
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          borderRadius: "20px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={filterStyle}>
          <span style={{ width: "80%", textAlign: "start" }}>Destinations</span>
          <span style={{ width: "80%", textAlign: "end" }}>city or Region</span>
        </div>
        <div style={filterStyle}>
          <span style={{ width: "80%", textAlign: "start" }}>All Activity</span>
          <span style={{ width: "80%", textAlign: "end" }}>city or Region</span>
        </div>
        <div style={filterStyle}>
          <span style={{ width: "80%", textAlign: "start" }}>
            Departure Date
          </span>
          <span style={{ width: "80%", textAlign: "end" }}>city or Region</span>
        </div>
        <div style={filterStyle}>
          <span style={{ width: "80%", textAlign: "start" }}>Guests</span>
          <span style={{ width: "80%", textAlign: "end" }}>city or Region</span>
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
            }}
          >
            Search
          </span>
        </div>
      </div>
    </div>
  );
}
