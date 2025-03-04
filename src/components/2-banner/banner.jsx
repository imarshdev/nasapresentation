import { CiLocationOn } from "react-icons/ci";
import banner from "../../assets/banner.png";
import mountain2 from "../../assets/backdrop2.jpg";
import FadeInView from "../../assets/fadein/fadein";

export default function Banner({ isMobile }) {
  // Styles
  const containerStyle = {
    width: "90%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: "6rem",
    marginLeft: "5%",
  };

  const imageStyle = {
    width: "95%",
    height: isMobile ? "30vh" : "75vh", // Adjust height based on isMobile
    borderRadius: "20px",
  };

  const textStyle = {
    position: "absolute",
    zIndex: 3,
    width: isMobile ? "100%" : "85%", // Full width on mobile
  };

  return (
    <div style={containerStyle}>
      {isMobile ? (
        <>
          <img src={banner} style={imageStyle} />
          <div style={textStyle}>
            <span>
              <b
                className="font-item"
                style={{ fontSize: isMobile ? "3rem" : "7rem", margin: 0 }}
              >
                WAGAGAI
                <br />
                <span
                  style={{ fontSize: isMobile ? "2rem" : "5rem", margin: "0" }}
                >
                  TOURS & TRAVEL
                </span>
              </b>
            </span>
          </div>
        </>
      ) : (
        <img src={mountain2} style={imageStyle} />
      )}
      <br />
    </div>
  );
}

export function FilterContainer({ isMobile }) {
  const filterContainerStyle = {
    width: "90vw",
    height: "15vh",
    backgroundColor: "#fff",
    borderRadius: isMobile ? "20px" : "50px",
    display: "flex",
    margin: "0 5%",
    boxSizing: "border-box",
    marginTop: "1rem",
    zIndex: 4,
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };
  const filterContainerStyle2 = {
    width: "90vw",
    height: "7vh",
    backgroundColor: "#fff",
    borderRadius: "50px",
    display: "flex",
    margin: "0 5%",
    boxSizing: "border-box",
    marginTop: "1rem",
    zIndex: 4,
    boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const filterStyle = {
    width: isMobile ? "100%" : "25%", // Full width on mobile
    height: isMobile ? "auto" : "100%", // Full width on mobile
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  };

  const applyButtonStyle = {
    width: isMobile ? "100%" : "20%",
    height: isMobile ? "auto" : "100%", // Full width on mobile
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

  const spanStyle = {
    padding: "1rem",
    textAlign: "start",
    width: "100%",
    fontSize: isMobile ? "12px" : "14px",
    fontWeight: "bold",
  };
  return (
    <>
      {isMobile ? (
        <FadeInView style={{ width: "50%" }}>
          <div style={filterContainerStyle2}>
            <div style={filterStyle}>
              <CiLocationOn size={isMobile ? 24 : 28} strokeWidth={1} />
              <input
                type="text"
                placeholder="Where to ?"
                style={{
                  outline: "none",
                  border: "none",
                  width: "70%",
                  paddingLeft: "10px",
                  fontSize: isMobile ? "22px" : "24px",
                  fontWeight: "bold",
                }}
              />
            </div>
          </div>
        </FadeInView>
      ) : (
        <FadeInView style={{ width: "50%" }}>
          <div style={filterContainerStyle}>
            <div style={filterStyle}>
              <input
                type="text"
                placeholder="Where to ?"
                style={{
                  outline: "none",
                  border: "none",
                  width: "70%",
                  paddingLeft: "10px",
                  fontSize: isMobile ? "22px" : "24px",
                  fontWeight: "bold",
                }}
              />
              <CiLocationOn size={isMobile ? 24 : 28} strokeWidth={1} />
            </div>
            {isMobile ? (
              <></>
            ) : (
              <div
                style={{
                  width: "1px",
                  height: "80%",
                  backgroundColor: "#cccccc",
                }}
              ></div>
            )}
            <div style={filterStyle}>
              <input
                type="date"
                placeholder="When ?"
                style={{
                  outline: "none",
                  border: "none",
                  width: "70%",
                  paddingLeft: "10px",
                  fontSize: isMobile ? "22px" : "24px",
                  fontWeight: "bold",
                }}
              />
            </div>
            <div style={filterStyle}>
              <input
                type="text"
                placeholder="Activity"
                style={{
                  outline: "none",
                  border: "none",
                  width: "70%",
                  paddingLeft: "10px",
                  fontSize: isMobile ? "22px" : "24px",
                  fontWeight: "bold",
                }}
              />
              <CiLocationOn size={isMobile ? 24 : 28} strokeWidth={1} />
            </div>
            <div style={applyButtonStyle}>
              <span style={applyButtonTextStyle}>Apply</span>
            </div>
          </div>
        </FadeInView>
      )}
    </>
  );
}
