import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import Navbar from "./components/1-navbar/navbar";
import Banner from "./components/2-banner/banner";
import Packages from "./components/4-packages/packages";
import Items from "./components/3-locationItems/items";

function App() {
  return (
    <PrimeReactProvider>
      <div style={{ width: "100%", height: "auto" }}>
        <Navbar />
        <Banner />
        <Items />
        <Packages />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
