import { IoIosArrowForward } from "react-icons/io";
import antelopes from "../../assets/misc/antelopes.png";
import boat from "../../assets/misc/boat.png";
import mountain from "../../assets/misc/mountain.png";

export default function Items({ isMobile }) {
  const images = [
    {
      phrase:
        "Experience the thrill of Uganda's wildlife with our guided tours.",
      image: antelopes,
    },
    {
      phrase: "Set sail on an unforgettable adventure across serene waters.",
      image: boat,
    },
    {
      phrase: "Reach new heights exploring breathtaking mountain landscapes.",
      image: mountain,
    },
  ];
  const containerStyle = {
    width: "100%",
    height: isMobile ? "40vh" : "50vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const carouselInnerStyle = {
    display: "flex",
    height: "100%",
    overflowX: "scroll", // Enable scrolling functionality
    overflowY: "hidden",
    scrollbarWidth: "none", // For Firefox (hide scrollbar)
    msOverflowStyle: "none", // For IE/Edge (hide scrollbar)
    alignItems: "center",
  };
  const carouselItemStyle = {
    flex: "0 0 auto",
    width: isMobile ? "90%" : "23rem",
    height: isMobile ? "30vh" : "35vh",
    margin: isMobile ? "5%" : "1rem",
    borderRadius: "20px",
    overflow: "hidden",
    display: "flex",
    position: "relative",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={carouselInnerStyle} className="hide-scrollbar">
        {images.map((image, key) => (
          <div className="item" style={carouselItemStyle} key={key}>
            <div
              style={{
                width: "80%",
                height: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
                position: "absolute",
                borderRadius: "10px",
                left: "5%",
                top: "40%",
                backdropFilter: "blur(3px)",
                color: "#fff",
                boxShadow: "1px 2px 5px #02020250",
              }}
            >
              <span className="phrase-text">{image.phrase}</span>
              <span className="phrase-text-2">
                Learn More{" "}
                <IoIosArrowForward size={24} style={{ paddingLeft: "10px" }} />
              </span>
            </div>
            <img
              src={image.image}
              alt={image.phrase}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
