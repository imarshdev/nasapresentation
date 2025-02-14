import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import elizabeth from "./imgs/elizabeth.jpg";
import rwenzori from "./imgs/rwenzori.jpg";
import elgon from "./imgs/elgon.jpg";
import bwindi from "./imgs/bwindi.jpg";
import mburo from "./imgs/mburo.jpg";
import mgahinga from "./imgs/mgahinga.jpg";
import murchison from "./imgs/murchison.png";
import semiliki from "./imgs/semiliki.jpg";
import kidepo from "./imgs/kidepo.jpg";
import ContactBanner from "../7-contactUs/contact";

export default function Packages({ isMobile, page }) {
  const headingStyle = {
    width: "100%",
    textAlign: isMobile ? "center" : "start",
    padding: isMobile ? "10px" : "0 20px",
    color: "green",
  };

  const tabContainerStyle = {
    display: "flex",
    gap: "1rem",
    padding: "1.25rem",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const cardStyle = {
    width: isMobile ? "90vw" : "30vw",
    height: isMobile ? "70vh" : "105vh",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
    padding: "0rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    borderRadius: "8px",
    border: "solid 1px #ccc",
    overflow: "hidden",
    position: "relative",
  };

  const spanStylehead = {
    padding: "1rem",
    textAlign: "end",
    width: "100%",
    fontSize: isMobile ? "16px" : "18px",
    fontWeight: "bold",
  };

  const spanStyle = {
    padding: "1rem",
    textAlign: "end",
    width: "100%",
    fontSize: isMobile ? "12px" : "14px",
    fontWeight: "bold",
    position: "absolute",
    bottom: 0,
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

  // Helper function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
  };

  return (
    <>
      <div className="card">
        {page == "destinations" ? <div style={{ height: "6rem" }} /> : <></>}
        <h2 style={headingStyle}>
          <b>Explore Stays in Popular Locations!</b>
        </h2>
        <TabView style={{ padding: isMobile ? "0px" : "0 0px" }}>
          <TabPanel header="Explore Uganda">
            <div style={tabContainerStyle}>
              {PackageItems.map((item) => (
                <div key={item.name} style={cardStyle}>
                  <img
                    src={item.image}
                    style={{ height: "45%", width: "100%" }}
                  />
                  <span style={spanStylehead}>{item.name}</span>
                  <span style={spanStyle2}>{item.description}</span>
                  <span style={spanStyle}>See Packages</span>
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel header="Explore East Africa">
            <div>
              <p>TBA</p>
            </div>
          </TabPanel>
          <TabPanel header="International">
            <div>
              <p>TBA</p>
            </div>
          </TabPanel>
        </TabView>
      </div>
      <ContactBanner />
    </>
  );
}

const PackageItems = [
  {
    name: "Queen Elizabeth National Park",
    description:
      "Queen Elizabeth National Park is Uganda’s most popular and diverse conservation area. It is located on the western rift valley floor, surrounded by breathtaking lakes, escarpments, and the snow-capped Rwenzori Mountains. The park boasts a variety of habitats, including grasslands, acacia woodlands, forests, wetlands, and open water. These ecosystems sustain an impressive array of wildlife, including a wide range of mammals and a remarkable 604 bird species. This makes it one of the most biodiverse parks in the region, offering visitors a chance to experience Uganda’s rich natural heritage.",
    image: elizabeth,
  },
  {
    name: "Rwenzori Mountains National Park",
    description:
      "Rwenzori Mountains National Park is home to Africa’s highest mountain range, famously known as the 'Mountains of the Moon.' The 5,109m peaks are a montane wonderland. Visitors can explore trails that lead to snow-capped summits, glacier-carved valleys, and vibrant moss-covered landscapes filled with rare Afro-alpine plants. Expeditions are supported by basic huts and campsites, allowing adventurers to ascend from trailheads at Kilembe, Mihunga, and Katebwa. While climbing the peaks is possible, the true allure lies in exploring the stunning montane wilderness and its unique flora and fauna.",
    image: rwenzori,
  },
  {
    name: "Mt. Elgon National Park",
    description:
      "Mt. Elgon National Park spans an impressive 1,145km2, protecting the higher slopes of the extinct Mount Elgon volcano. Straddling the Uganda-Kenya border, this park offers a cool respite with its towering 4,321m peak. The mountain’s vast size, measuring 80km in diameter, creates a unique environment that supports a diverse array of flora and fauna. Visitors can embark on multi-day hikes to the summit or enjoy shorter walks through lush forests, taking in the scenic waterfalls and diverse wildlife. It’s a haven for nature lovers and adventurers alike.",
    image: elgon,
  },
  {
    name: "Bwindi Impenetrable National Park",
    description:
      "Bwindi Impenetrable National Park is one of Africa’s oldest and most biologically diverse forests. Spanning 325km2, this ancient forest has existed for over 25,000 years, accumulating a rich biodiversity. It is home to 350 bird species, 310 butterflies, 200 trees, 51 reptiles, 88 moths, and 120 mammals. The park’s most famous residents are the endangered mountain gorillas, with half of the global population found here. Visitors can embark on gorilla tracking adventures, exploring the dense forest and encountering these majestic creatures in their natural habitat.",
    image: bwindi,
  },
  {
    name: "Mgahinga Gorilla National Park",
    description:
      "Mgahinga Gorilla National Park, although Uganda’s smallest park at just 38km2, is part of a larger transboundary conservation area protecting the Virunga volcanoes. The park is situated on the northern slopes of three extinct volcanic cones: Mts. Muhuvura, Gahinga, and Sabinyo. It is renowned for its population of mountain gorillas and golden monkeys. Visitors can track these rare primates, climb the volcanic peaks for panoramic views, and explore diverse habitats, including bamboo forests and moorlands. The park also offers cultural experiences through the Batwa Trail.",
    image: mgahinga,
  },
  {
    name: "Murchison Falls National Park",
    description:
      "Murchison Falls National Park is Uganda’s largest protected area, encompassing 5,000km2 of stunning wilderness. The Nile River traverses the park, creating the dramatic Murchison Falls, where the river explodes through a narrow gorge. The park is home to diverse wildlife, including elephants, lions, and hippos. Visitors can enjoy boat trips to the falls, game drives across the Buligi Peninsula, and birdwatching. The iconic shoebill and other rare species can be spotted along the riverbanks and in the Kaniyo Pabidi Forest.",
    image: murchison,
  },
  {
    name: "Lake Mburo National Park",
    description:
      "Lake Mburo National Park is a compact gem, ideally located for a break between Kampala and Uganda’s western protected areas. Despite its small size, the park is home to unique wildlife such as zebras, elands, and topis. It also boasts 332 recorded bird species, making it a paradise for birdwatchers. Visitors can explore the park through game drives, boat rides, mountain biking, horseback riding, and nature walks. The park’s diverse habitats, including acacia woodlands and seasonal wetlands, offer a rich and rewarding experience.",
    image: mburo,
  },
  {
    name: "Kidepo Valley National Park",
    description:
      "Kidepo Valley National Park, located in Uganda’s remote northeastern corner, is a true wilderness gem. The park’s vast grasslands are home to an array of big game, including elephants, lions, cheetahs, and giraffes. The scenic landscapes, framed by distant mountain ranges, provide a stunning backdrop for wildlife viewing. Kidepo is also culturally significant, with traditional Karamojong manyattas dotting the plains. Visitors can explore the park by air or via improved overland routes, discovering an untouched and awe-inspiring part of Africa.",
    image: kidepo,
  },
  {
    name: "Semliki National Park",
    description:
      "Semliki National Park, a forested 220km2 sanctuary, lies beyond the Rwenzori Mountains in the Albertine Rift Valley. It represents the easternmost extension of the Congo’s Ituri Forest, offering an exceptionally rich biodiversity. The park is a haven for birdwatchers, with 441 recorded species, including 80 Central African species rarely seen elsewhere in East Africa. Primatologists will find 15 primate species within proximity of the primeval hot springs near the park’s tourism office at Sempaya. It’s a fascinating destination for nature enthusiasts.",
    image: semiliki,
  },
];
