import React from "react";
import FadeInView from "../../assets/fadein/fadein";
import ContactBanner from "../7-contactUs/contact";

const AboutUs = ({ isMobile }) => {
  return (
    <>
      <div style={{ width: "90%", marginLeft: "5%" }}>
        <div style={{ height: "6rem" }}></div>
        {/* Header Section */}
        <FadeInView>
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <h1>About Us</h1>
            <p style={{ fontSize: "16px", color: "#555" }}>
              Discover the world with Wagagai Tours & Travel Uganda.
            </p>
          </div>
        </FadeInView>

        {/* Mission Statement */}
        <FadeInView delay={".5s"}>
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ color: "#333" }}>Our Mission</h2>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#666" }}>
              At Wagagai Tours & Travel Uganda, we believe that travel is more
              than just visiting places; it's about creating lasting memories.
              We are committed to providing exceptional service and ensuring
              that every aspect of your journey is seamless and enjoyable.
            </p>
          </div>
        </FadeInView>

        {/* Services Section */}
        <FadeInView delay={"1s"}>
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ color: "#333" }}>What We Offer</h2>
            <ul style={{ fontSize: "14px", lineHeight: "1.8", color: "#666" }}>
              <p>
                Wildlife Safaris: Explore iconic national parks and encounter
                diverse wildlife.
              </p>
              <p>
                Cultural Tours: Immerse yourself in the rich cultural heritage
                of Uganda.
              </p>
              <p>
                Adventure Tours: Embark on thrilling adventures like white-water
                rafting and hiking.
              </p>
              <p>
                Gorilla Trekking: Experience the once-in-a-lifetime opportunity
                to see mountain gorillas.
              </p>
              <p>
                Customized Itineraries: Travel plans tailored to your interests
                and budget.
              </p>
              <p>
                Air Ticket Bookings: Convenient booking for flights to and from
                Uganda.
              </p>
              <p>
                Global Visa Assistance: Guidance for visa applications
                worldwide.
              </p>
            </ul>
          </div>{" "}
        </FadeInView>

        {/* Vision Statement */}
        <FadeInView delay={"1.5s"}>
          <div style={{ marginBottom: "20px" }}>
            <h2 style={{ color: "#333" }}>Our Vision</h2>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "#666" }}>
              To be Uganda's leading travel agency, delivering unforgettable
              experiences and enriching the lives of our clients by exploring
              the beauty of Uganda and beyond.
            </p>
          </div>
        </FadeInView>

        {/* Contact Section */}
        <FadeInView delay={"2s"}>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <h3 style={{ color: "#333" }}>Get In Touch</h3>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Ready to start your journey? Contact us for more information and
              bookings!
            </p>
            <p style={{ fontSize: "14px", color: "#555" }}>
              Email: info@wagagaitours.com | Phone: +256 740 053 621
            </p>
          </div>
        </FadeInView>
        <div style={{ height: "1rem" }}></div>
      </div>
      <ContactBanner />
    </>
  );
};

export default AboutUs;
