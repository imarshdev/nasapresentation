import "./App.css";
import Navbar from "./components/1-navbar/navbar";
import Banner from "./components/2-banner/banner";
import Packages from "./components/3-packages/packages";

function App() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Navbar />
      <Banner />
      <Packages />
    </div>
  );
}

export default App;
