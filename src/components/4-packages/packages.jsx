import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import noimage from "../../assets/noimage.jpg";
import { CiStar } from "react-icons/ci";
import { MdConnectingAirports } from "react-icons/md";

export default function Packages() {
  // Define styles
  const headingStyle = {
    width: "100%",
    textAlign: "start",
    padding: "0 20px",
    color: "green",
  };

  const tabContainerWrapperStyle = {
    position: "relative",
    overflowX: "auto",
    padding: "10px 0",
  };

  const tabContainerStyle = {
    display: "flex",
    gap: "1rem",
    whiteSpace: "nowrap",
  };

  const cardStyle = {
    minWidth: "20rem",
    height: "25rem",
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    padding: "0rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    border: "solid 1px #ccc",
    overflow: "hidden",
  };
  const spanStyle = {
    padding: "1rem",
    textAlign: "start",
  };
  const spanStyle2 = {
    padding: "0 1rem",
    textAlign: "end",
    width: "100%",
  };

  return (
    <div className="card">
      <h2 style={headingStyle}>
        <b>Explore Stays in Popular Packages !</b>
      </h2>
      <TabView style={{ padding: "0 10px" }}>
        <TabPanel header="Beach">
          <div style={tabContainerWrapperStyle} className="hide-scrollbar">
            <div style={tabContainerStyle}>
              {Beach.map((location, index) => (
                <div key={index} style={cardStyle}>
                  <img src={noimage} style={{ height: "45%", width: "100%" }} />
                  <span style={spanStyle}>
                    <b>{location.name}</b>
                    <br />
                    {location.location}
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      <CiStar style={{ marginRight: "10px" }} />5 stars - 8.8/10
                      Excellent (19)
                    </span>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      <MdConnectingAirports style={{ marginRight: "10px" }} />
                      Entebbe(EBB) - Mombassa (MBA)
                    </span>
                  </span>
                  <span style={spanStyle2}>
                    <b>$530 / Ugx 1,961,000</b>
                    <br />
                    <span style={{ fontSize: "12px" }}>per traveller</span>
                    <br />
                    <span style={{ fontSize: "12px" }}>
                      Mon, Jan 6 - Thu, Jan 9 (3 night)
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Culture">
          <div style={tabContainerWrapperStyle} className="hide-scrollbar">
            <div style={tabContainerStyle}>
              {Culture.map((location, index) => (
                <div key={index} style={cardStyle}>
                <img src={noimage} style={{ height: "45%", width: "100%" }} />
                <span style={spanStyle}>
                  <b>{location.name}</b>
                  <br />
                  {location.location}
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    <CiStar style={{ marginRight: "10px" }} />5 stars - 8.8/10
                    Excellent (19)
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    <MdConnectingAirports style={{ marginRight: "10px" }} />
                    Entebbe(EBB) - Mombassa (MBA)
                  </span>
                </span>
                <span style={spanStyle2}>
                  <b>$530 / Ugx 1,961,000</b>
                  <br />
                  <span style={{ fontSize: "12px" }}>per traveller</span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Mon, Jan 6 - Thu, Jan 9 (3 night)
                  </span>
                </span>
              </div>
            ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Ski">
          <div style={tabContainerWrapperStyle} className="hide-scrollbar">
            <div style={tabContainerStyle}>
              {Ski.map((location, index) => (
                <div key={index} style={cardStyle}>
                <img src={noimage} style={{ height: "45%", width: "100%" }} />
                <span style={spanStyle}>
                  <b>{location.name}</b>
                  <br />
                  {location.location}
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    <CiStar style={{ marginRight: "10px" }} />5 stars - 8.8/10
                    Excellent (19)
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    <MdConnectingAirports style={{ marginRight: "10px" }} />
                    Entebbe(EBB) - Mombassa (MBA)
                  </span>
                </span>
                <span style={spanStyle2}>
                  <b>$530 / Ugx 1,961,000</b>
                  <br />
                  <span style={{ fontSize: "12px" }}>per traveller</span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Mon, Jan 6 - Thu, Jan 9 (3 night)
                  </span>
                </span>
              </div>
            ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Family">
          <div style={tabContainerWrapperStyle} className="hide-scrollbar">
            <div style={tabContainerStyle}>
              {Family.map((location, index) => (
                <div key={index} style={cardStyle}>
                <img src={noimage} style={{ height: "45%", width: "100%" }} />
                <span style={spanStyle}>
                  <b>{location.name}</b>
                  <br />
                  {location.location}
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    <CiStar style={{ marginRight: "10px" }} />5 stars - 8.8/10
                    Excellent (19)
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    <MdConnectingAirports style={{ marginRight: "10px" }} />
                    Entebbe(EBB) - Mombassa (MBA)
                  </span>
                </span>
                <span style={spanStyle2}>
                  <b>$530 / Ugx 1,961,000</b>
                  <br />
                  <span style={{ fontSize: "12px" }}>per traveller</span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Mon, Jan 6 - Thu, Jan 9 (3 night)
                  </span>
                </span>
              </div>
            ))}
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Wellness & Relaxation">
          <div style={tabContainerWrapperStyle} className="hide-scrollbar">
            <div style={tabContainerStyle}>
              {Wellness_And_Relaxation.map((location, index) => (
                <div key={index} style={cardStyle}>
                <img src={noimage} style={{ height: "45%", width: "100%" }} />
                <span style={spanStyle}>
                  <b>{location.name}</b>
                  <br />
                  {location.location}
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    <CiStar style={{ marginRight: "10px" }} />5 stars - 8.8/10
                    Excellent (19)
                  </span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    <MdConnectingAirports style={{ marginRight: "10px" }} />
                    Entebbe(EBB) - Mombassa (MBA)
                  </span>
                </span>
                <span style={spanStyle2}>
                  <b>$530 / Ugx 1,961,000</b>
                  <br />
                  <span style={{ fontSize: "12px" }}>per traveller</span>
                  <br />
                  <span style={{ fontSize: "12px" }}>
                    Mon, Jan 6 - Thu, Jan 9 (3 night)
                  </span>
                </span>
              </div>
            ))}
            </div>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
}

// CSS for hiding the scrollbar
const style = document.createElement("style");
style.textContent = `
  .hide-scrollbar {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Edge */
  }
`;
document.head.appendChild(style);

const Beach = [
  { name: "Bugala Island", location: "Central Region, Uganda" },
  { name: "Whitehaven Beach", location: "Queensland, Australia" },
  { name: "Anse Source d'Argent", location: "La Digue, Seychelles" },
  { name: "Maya Bay", location: "Ko Phi Phi Leh, Thailand" },
  { name: "Grace Bay", location: "Turks and Caicos Islands" },
  { name: "Navagio Beach", location: "Zakynthos, Greece" },
  { name: "Pink Sands Beach", location: "Harbour Island, Bahamas" },
  { name: "Copacabana Beach", location: "Rio de Janeiro, Brazil" },
  { name: "Lanikai Beach", location: "Oahu, Hawaii, USA" },
  { name: "Seven Mile Beach", location: "Grand Cayman, Cayman Islands" },
  { name: "Baia do Sancho", location: "Fernando de Noronha, Brazil" },
  { name: "Eagle Beach", location: "Oranjestad, Aruba" },
  { name: "Playa del Amor", location: "Marietas Islands, Mexico" },
  { name: "Horseshoe Bay", location: "Bermuda" },
  { name: "Matira Beach", location: "Bora Bora, French Polynesia" },
];

const Culture = [
  { name: "Kyoto", location: "Kyoto Prefecture, Japan" },
  { name: "Machu Picchu", location: "Cusco Region, Peru" },
  { name: "Petra", location: "Ma'an Governorate, Jordan" },
  { name: "Angkor Wat", location: "Siem Reap, Cambodia" },
  { name: "Venice", location: "Veneto, Italy" },
  { name: "Fez Medina", location: "Fes-Meknes, Morocco" },
  { name: "Varanasi", location: "Uttar Pradesh, India" },
  { name: "Rome", location: "Lazio, Italy" },
  { name: "Istanbul", location: "Marmara Region, Turkey" },
  { name: "Jerusalem", location: "Jerusalem District, Israel" },
  { name: "Athens", location: "Attica, Greece" },
  { name: "Cairo", location: "Cairo Governorate, Egypt" },
  { name: "Bagan", location: "Mandalay Region, Myanmar" },
  { name: "Paris", location: "Île-de-France, France" },
  { name: "Cusco", location: "Cusco Region, Peru" },
];

const Ski = [
  { name: "Rutland", location: "Vermont, United States of America" },
  { name: "Chamonix", location: "Auvergne-Rhône-Alpes, France" },
  { name: "Zermatt", location: "Valais, Switzerland" },
  { name: "Aspen", location: "Colorado, United States of America" },
  { name: "Whistler", location: "British Columbia, Canada" },
  { name: "St. Anton", location: "Tyrol, Austria" },
  { name: "Courchevel", location: "Auvergne-Rhône-Alpes, France" },
  { name: "Hakuba", location: "Nagano, Japan" },
  { name: "Niseko", location: "Hokkaido, Japan" },
  { name: "Cortina d'Ampezzo", location: "Veneto, Italy" },
  { name: "Banff", location: "Alberta, Canada" },
  { name: "Jackson Hole", location: "Wyoming, United States of America" },
  { name: "Val Thorens", location: "Auvergne-Rhône-Alpes, France" },
  { name: "Park City", location: "Utah, United States of America" },
  { name: "Garmisch-Partenkirchen", location: "Bavaria, Germany" },
];

const Family = [
  { name: "Disneyland", location: "California, United States of America" },
  { name: "Orlando", location: "Florida, United States of America" },
  { name: "Gold Coast", location: "Queensland, Australia" },
  { name: "San Diego Zoo", location: "California, United States of America" },
  { name: "Universal Studios", location: "Singapore" },
  { name: "Legoland", location: "Billund, Denmark" },
  { name: "Efteling", location: "Kaatsheuvel, Netherlands" },
  { name: "Gardaland", location: "Veneto, Italy" },
  { name: "Europa-Park", location: "Rust, Germany" },
  { name: "Seaworld", location: "California, United States of America" },
  { name: "Sentosa Island", location: "Singapore" },
  { name: "Tokyo Disneyland", location: "Chiba, Japan" },
  { name: "Hong Kong Disneyland", location: "Hong Kong SAR, China" },
  { name: "Santa Claus Village", location: "Lapland, Finland" },
  { name: "Alton Towers", location: "Staffordshire, England" },
];

const Wellness_And_Relaxation = [
  { name: "Baden-Baden", location: "Baden-Württemberg, Germany" },
  { name: "Ubud", location: "Bali, Indonesia" },
  { name: "Blue Lagoon", location: "Reykjanes Peninsula, Iceland" },
  { name: "Sedona", location: "Arizona, United States of America" },
  { name: "Lake District", location: "Cumbria, England" },
  { name: "Santorini", location: "Cyclades, Greece" },
  { name: "Phuket", location: "Thailand" },
  { name: "Queenstown", location: "Otago, New Zealand" },
  { name: "Marrakech", location: "Marrakesh-Safi, Morocco" },
  { name: "Banff Hot Springs", location: "Alberta, Canada" },
  { name: "Amalfi Coast", location: "Campania, Italy" },
  { name: "Kyoto", location: "Kyoto Prefecture, Japan" },
  { name: "Tulum", location: "Quintana Roo, Mexico" },
  { name: "Hallstatt", location: "Upper Austria, Austria" },
  { name: "Cappadocia", location: "Central Anatolia, Turkey" },
];
