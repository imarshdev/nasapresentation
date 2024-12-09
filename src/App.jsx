import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Navbar from "./components/1-navbar/navbar";
import Banner from "./components/2-banner/banner";
import Packages from "./components/3-packages/packages";

function App() {
  return (
    <PrimeReactProvider>
      <div style={{ width: "100%", height: "auto" }}>
        <Navbar />
        <Banner />
        <Packages />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
