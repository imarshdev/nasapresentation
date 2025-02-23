export const VisaServices = [
  {
    name: "30-Days Dubai Single Entry Visit Visa",
    description:
      "A short-term visa for travelers visiting the UAE for leisure, sightseeing, or visiting family.",
    duration: "30 days (single entry)",
    requirements: [
      "Valid passport (6 months validity)",
      "Confirmed flight bookings",
      "Proof of funds",
      "Hotel booking, invitation letters or host details",
    ],
    price: "$200 (Ugx 750,000)",
  },
  {
    name: "60-Days Dubai Single Entry Visit Visa",
    description:
      "A longer-term visa for travelers visiting the UAE for leisure, sightseeing, or visiting family.",
    duration: "60 days (single entry)",
    requirements: [
      "Valid passport (6 months validity)",
      "Confirmed flight bookings",
      "Proof of funds",
      "Hotel booking, invitation letters or host details",
    ],
    price: "$327 (Ugx 1,200,000)",
  },
];
export const Locations = [
  {
    name: "Dubai, UAE",
    description:
      "A luxurious metropolis known for its skyscrapers, shopping, and desert adventures.",
    attractions: [
      "Burj Khalifa",
      "Palm Jumeirah",
      "Dubai Mall",
      "Desert Safari",
    ],
  },
  {
    name: "Paris, France",
    description:
      "The city of love, famous for its art, fashion, and iconic landmarks.",
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River",
      "Champs-Élysées",
    ],
  },
  {
    name: "Istanbul, Turkey",
    description:
      "A city where East meets West, filled with rich history and vibrant markets.",
    attractions: [
      "Hagia Sophia",
      "Blue Mosque",
      "Grand Bazaar",
      "Bosphorus Cruise",
    ],
  },
  {
    name: "Cairo, Egypt",
    description:
      "The heart of ancient civilization, home to the Pyramids of Giza and the Sphinx.",
    attractions: [
      "Pyramids of Giza",
      "Sphinx",
      "Nile River Cruise",
      "Egyptian Museum",
    ],
  },
  {
    name: "Bangkok, Thailand",
    description:
      "A bustling city famous for its temples, street food, and nightlife.",
    attractions: [
      "Grand Palace",
      "Floating Markets",
      "Wat Arun",
      "Khao San Road",
    ],
  },
  {
    name: "Maasai Mara, Kenya",
    description:
      "One of Africa's greatest wildlife reserves, known for the annual migration of wildebeests.",
    attractions: [
      "Safari Game Drives",
      "Big Five Animals",
      "Hot Air Balloon Safari",
      "Cultural Maasai Village",
    ],
  },
];
export const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "400px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  description: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
    fontSize: "14px",
  },
  price: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#27ae60",
    marginTop: "10px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "15px",
  },
  container: {
    padding: "40px",
  },
  backButton: {
    background: "none",
    border: "none",
    color: "#007BFF",
    fontSize: "16px",
    cursor: "pointer",
    marginBottom: "15px",
  },
  bookNowButton: {
    display: "block",
    width: "100%",
    backgroundColor: "#27ae60",
    color: "#fff",
    border: "none",
    padding: "12px",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "20px",
  },
  goBack: {
    position: "absolute",
    background: "#ffffff00"
  },
};
