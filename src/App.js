import "./App.css";
import Header from "./components/Header";
import Item from "./components/Item";

import Accessories from "./assets/Desktop-Accessories.jpg";
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item
          title="Lowest Cost Solar Panel in America"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarPanels}
          leftBtnText="ORDER NOW"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
          first
        ></Item>
        <Item
          title="Model S"
          desc="$69,420"
          descLink=""
          backgroundImg={ModelS}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        ></Item>
        <Item
          title="Model 3"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={Model3}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        ></Item>
        <Item
          title="Model X"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        ></Item>
        <Item
          title="Model Y"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={ModelX}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
          twoButtons="true"
        ></Item>
        <Item
          title="Solar Roof"
          desc="Money-back guarantee"
          descLink=""
          backgroundImg={SolarRoof}
          leftBtnText="CUSTOM ORDER"
          leftBtnLink=""
          rightBtnText="LEARN MORE"
          rightBtnLink=""
        ></Item>
      </div>
    </div>
  );
}

export default App;
