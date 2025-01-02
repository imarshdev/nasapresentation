import React from "react";
import { TabView, TabPanel } from "primereact/tabview";
import noimage from "../../assets/noimage.avif";
import { CiStar } from "react-icons/ci";
import { MdConnectingAirports } from "react-icons/md";
import FadeInView from "../../assets/fadein/fadein";
import elizabeth from "./imgs/elizabeth.jpg";
import rwenzori from "./imgs/rwenzori.jpg";
import elgon from "./imgs/elgon.jpg";
import bwindi from "./imgs/bwindi.jpg";
import mburo from "./imgs/mburo.jpg";
import mgahinga from "./imgs/mgahinga.jpg";
import murchison from "./imgs/murchison.png";
import semiliki from "./imgs/semiliki.jpg";
import kidepo from "./imgs/kidepo.jpg";

export default function Packages({ isMobile }) {
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
    height: isMobile ? "70vh" : "85vh",
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
    <div className="card">
      <h2 style={headingStyle}>
        <b>Explore Stays in Popular Packages!</b>
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
                <span style={spanStyle2}>
                  {truncateText(item.description, 450)}
                </span>
                <span style={spanStyle}>See Packages</span>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel header="Family">
          <div>
            <p>hello</p>
          </div>
        </TabPanel>
        <TabPanel header="Wellness & Relaxation">
          <div>
            <p>hello</p>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
}

const PackageItems = [
  {
    name: "Queen Elizabeth National Park",
    description:
      "Uganda’s most popular and diverse conservation area, Queen Elizabeth National Park enjoys a fabulous setting on the western rift valley floor, surrounded by lakes, escarpments and snow-capped Rwenzori mountain. A variety of habitats, including grassland, acacia woodland, forest, wetland and open water, sustains a wide range of mammals while the park’s 604 bird species is a quite remarkable tally for protected area covering less than 2000km2.",
    image: elizabeth,
  },
  {
    name: "Rwenzori Mountains National Park.",
    description:
      "Africa’s highest mountain range, the 5,109m Rwenzori - Mountains of the moon is a montane wonderland. The trails to the snow peaks following glacier – carved valleys filled with fantastically colored mosses and rare Afro-alpine plants that include giant forms of lobelias, heathers and groundsels. Expeditions use a chain of basic huts and campsites to ascend the mountain from trailheads at Kilembe, Mihunga and Katebwa. Though the peaks can be climbed, the main attraction is the opportunity to spend days exploring a stunning montane wilderness inhabited by the rare Afromontane botany peculiar to East Africa’s highest mountains. Visitors can also take shorter, day walks to look for birds and primates in the forests on the lower contours of the national park.",
    image: rwenzori,
  },
  {
    name: "Mt. Elgon National Park",
    description:
      "The 1,145km2 Mount Elgon National Park protects the higher slopes of Mount Elgon, an extinct volcano, on the Uganda-Kenya border. The Mountain, which measures 80km in diameter, once towered above Kilimanjaro’s current 5900m. Though now reduced to 4321m, still rises 3000m above the hot, dusty plains of Karamoja to provide a cool respite for humans and a refuge for flora and fauna. Tourist activities on the mountain cater for various levels of ambition. Visitors can extend hikes, requiring a minimum of 3 days, to reach the summits which lie along the jagged rim on a giant caldera, 8km across. Less demandingly, visitors can take day/half day walks through forest on the lower edge of the park or simply relax in resorts overlooking a chain of delightful waterfalls just outside the park at Sipi.",
    image: elgon,
  },
  {
    name: "Bwindi Impenetrable National Park",
    description:
      "One of the Africa’s oldest forests – being one of the few that predate the arid conditions of the last ice age – the 325km2 Bwindi impenetrable has carpeted the margin of the Albertine Rift Valley for some 25,000 years. During this time, it has accumulated a remarkable biodiversity. Species counts include 350 birds, 310 butterflies, 200 trees, 51 reptiles, 88 moths and 120 mammals. The latter includes several primates, among them chimpanzees, L’Hoest monkey, and the star of the Impenetrable show: the mountain Gorilla. The global population of this endangered ape numbers just 800, half of which leave in Bwindui and the remainder on the nearby Virunga",
    image: bwindi,
  },
  {
    name: "Mgahinga Gorilla National Park",
    description:
      "Though uganda’s smallest park covers just 38km2, it forms part of a far larger, transboundary protected area that protects wildlife and habitats on the Virunga volcanoes in Uganda, Rwanda and DRC. Mgahinga gorilla enjoys a magnificient setting on the northern slopes of the three of the Virunga’s six extinct cones; Mts.Muhuvura, Gahinga and Sabinyo. The park is home to the two rare primates, mountain gorillas and golden monkeys, both of which can be tracked through their forest habitat. The volcanic peaks can be climbed; the 4127m Muhuvura provides a stunning 3600 regional panorama while Sabinyo’s highest peak offers the rare privilege of standing over 3600m high whilst in the three countries at once. A range of habitats, including forest, bamboo and moorland, support a wealth of birdlife including the beautiful Rwenzori turaco.  On the lower comtours, visitors can follow the Batwa Trail with Batwa (pigmy) guides to learn about traditional forest life before descending into the Garama Cave, historically the home of the Batwa King, for an unforgattable perfomance of Music and dance.",
    image: mgahinga,
  },
  {
    name: "Murchison Falls National Park",
    description:
      "Uganda’s largestprotected area is a 5000km2 expanse formed by Murchison Falls NP and the contigous Karuma and Bugungu wildlife reserves. The Nile traverses this wilderness, dividing grasslands roamed by big game on the northern bank from bush and forest inhabited by birds and primates on the southern side. `the centerpiece is the river’s eruption through a narrow gorge at Murchison Falls; a spectacle that has captivated visitors since the explorer Samuel Baker added the feature to the map in 2864. The boat trip to the Falls, past hippos and crocodiles, is an essential activity, as is a game drive across the grassy Buligi peninsula to the banks of the river. The park also has much to interest birders. The iconic shoebillinhabits swampy islands along the river while rae and ‘ristricted range’ congo overspills can be checked off in southernly Kaniyo Pabidi Forest. Visitors can also track habituated chimpanzees at this site.",
    image: murchison,
  },
  {
    name: "Lake Mburo National Park",
    description:
      "This compact jewel of a park is ideally placed for an overnight break bewteen kampala and the protected areas of western Uganda. Herbivores in the seasonal wetland valleys and acacia grasslands that sorround Lake Mburo include species such as topi, eland and zebra that are rare or absent from other parks in Uganda. With 332 species recorded, birding is also rewarding with papyrus and acacia species beeing particularly well represented. Visitors need not limit themselves to game drives; the park can also be explored using mountain bikes, by boat, on foot, and on horseback.",
    image: mburo,
  },
  {
    name: "Kidepo Valley National Park",
    description:
      "Located in Uganda’s distant northerneastern corner, close to Kenya and South Sudan and forming the farthest extremity of the remote, sparsely populated Karamoja region, Kidepo represents one of Africa’s most magnificient wilderness. Big game favourites, including elephant, buffalo, giraffe, zebra, eland, lion, cheetah and ostrich, roam grasslands that extend towrds distant mountain ranges in all directions. This is also an atea of rich cultural interest for the plains beyond the park are dotted with the manyattas (homesteads) of the traditional Karamojong pastroralists.The fastest route to Kidepo is by air but with security assured in northern Uganda and Karamoja, overland travel has gained popularity.  Thanks to the  road improvements in the region, growing numbers of visitors are exploring an exciting new northeastern safari circuit including Murchison, Kidepo, Karamoja, Pian-Upe and Mount Elgon. ",
    image: kidepo,
  },
  {
    name: "Semliki National Park",
    description:
      "The forested 220 km2 Semliki National Park occupies an isolated slice of Ugandan territory beyond the Rwenzori mountain on the broad floor of the Albertine Rift Valley. Thanks to its great age (it predates the last Ice Age) and links with the Congo Guinea biome (Semliki represents the easternmost extent of the Congo’s huge Ituri Forest). The park contains an exceptionally rich and varied biodiversity. The forest is particularly exciting for birdwatchers with 441 recorded species that include 216 forest birds and 80 Central African  species found in few, if any, other forests in East Arica. Black dwarf hornbill, Shining blue kingfisher, Nkulenge rail and yellow-throated nicator are just a few random highlights cited by the park’s experienced guides. Nor will primatologists be disappointed either; an astonishing 15 species of primate can be found within 6 km of the primeval hot springs that bubble out of the rift valley floor near the park’s tourism office at Sempaya.",
    image: semiliki,
  },
];
