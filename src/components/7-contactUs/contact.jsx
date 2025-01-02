import logo from "../../assets/logo1.png";
export default function ContactBanner({ isMobile }) {
  const containerStyle = {
    width: "100%",
    height: "auto",
    backgroundColor: "black",
    color: "#fff",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  };
  const spanStyle = {
    padding: "1rem",
    textAlign: "start",
    width: "100%",
    fontSize: isMobile ? "12px" : "14px",
    fontWeight: "bold",
  };
  const spanStyle2 = {
    padding: "0 1rem",
    textAlign: "start",
    width: "100%",
    fontSize: isMobile ? "12px" : "14px",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
  };
  const sectionStyle = {
    width: isMobile ? "100%" : "30%",
    height: "90%",
    display: "flex",
    flexDirection: "column",
  };
  return (
    <div style={containerStyle}>
      <section style={sectionStyle}>
        <span style={spanStyle}>Company</span>
        <span style={spanStyle2}>About Us</span>
        <span style={spanStyle2}>Join Our Team</span>
        <span style={spanStyle2}>Contact Us</span>
        <br />
        <span style={spanStyle}>Travelers</span>
        <span style={spanStyle2}>Inspiring Adventures Blog</span>
        <span style={spanStyle2}>Win a Dream Getaway</span>
        <br />
        <span style={spanStyle}>Why Us</span>
        <span style={spanStyle2}>Why Choose Us?</span>
        <span style={spanStyle2}>Hassle-Free Booking</span>
        <span style={spanStyle2}>Cancellation Policy</span>
      </section>

      <section style={sectionStyle}>
        <span style={spanStyle}>Operators</span>
        <span style={spanStyle2}>Partner With Us</span>
        <span style={spanStyle2}>Payment & Booking Tools</span>
        <span style={spanStyle2}>Operator Log In</span>
        <br />
        <span style={spanStyle}>Guides</span>
        <span style={spanStyle2}>Become a Guide</span>
        <span style={spanStyle2}>Guide Dashboard</span>
        <br />
        <span style={spanStyle}>Partners</span>
        <span style={spanStyle2}>Travel Agencies & Affiliates</span>
        <span style={spanStyle2}>Marketing Solutions</span>
        <span style={spanStyle2}>Partner Log In</span>
      </section>
      <section style={sectionStyle}>
        <span style={spanStyle}>Support</span>
        <span style={spanStyle2}>FAQs</span>
        <br />
        <span style={spanStyle}>Social Profiles</span>
        <span style={spanStyle2}>Facebook</span>
        <span style={spanStyle2}>Instagram</span>
        <span style={spanStyle2}>X</span>
        <span style={spanStyle2}>TikTok</span>
        <span style={spanStyle2}>MailTo: info@wagagaitours.com</span>
        <span style={spanStyle2}>Direct Dial: +256 740 053 621</span>
      </section>
      <div style={{ width: "100%", height: "5rem" }}></div>
    </div>
  );
}
