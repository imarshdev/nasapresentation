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
    height: isMobile ? "20vh" : "30vh",
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
    height: isMobile ? "15vh" : "20vh",
    margin: isMobile ? "5%" : "1rem",
    borderRadius: "20px",
    overflow: "hidden",
    display: "flex",
  };

  return (
    <div style={containerStyle}>
      <div style={carouselInnerStyle} className="hide-scrollbar">
        {images.map((image, key) => (
          <div className="item" style={carouselItemStyle} key={key}>
            <div
              style={{
                width: "50%",
                height: "100%",
                backgroundColor: "yellow",
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                flexDirection: "column",
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
              style={{ width: "50%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
