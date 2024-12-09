import { IoIosArrowForward } from "react-icons/io";
import antelopes from "../../assets/misc/antelopes.png";
import boat from "../../assets/misc/boat.png";
import mountain from "../../assets/misc/mountain.png";

export default function Items() {
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
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const carouselOuterStyle = {
    height: "30vh",
    width: "100%",
    overflowX: "hidden", // Hide scrollbar
    position: "relative",
  };
  const carouselInnerStyle = {
    display: "flex",
    height: "100%",
    overflowX: "scroll", // Enable scrolling functionality
    scrollbarWidth: "none", // For Firefox (hide scrollbar)
    msOverflowStyle: "none", // For IE/Edge (hide scrollbar)
    alignItems: "center",
  };
  const carouselItemStyle = {
    flex: "0 0 auto",
    width: "25rem",
    height: "20vh",
    marginLeft: "1rem",
    borderRadius: "20px",
    overflow: "hidden",
    display: "flex",
  };

  return (
    <div style={containerStyle}>
      <div style={carouselOuterStyle}>
        <div style={carouselInnerStyle} className="hide-scrollbar">
          {images.map((image, key) => (
            <div style={carouselItemStyle} key={key}>
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
                  Learn More <IoIosArrowForward size={24} style={{paddingLeft: "10px"}}/>
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
    </div>
  );
}
