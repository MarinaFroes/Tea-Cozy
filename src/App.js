import React from "react";
import Mission from "./components/Mission";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Locations from "./components/Locations";
import Gallery from "./components/Gallery";


function App() {
  return (
    <div className="App">
      <Header />
      <Mission />
      <Gallery />
      <Locations />
      <Footer />
    </div>
  );
}

export default App;
