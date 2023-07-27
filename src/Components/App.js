import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import ApptContainer from "./Homepage/ApptContainer";
import Mainsection from "./Homepage/Mainsection";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainsection>
        <Banner />
        <ApptContainer />
      </Mainsection>
      <Footer />
    </div>
  );
}

export default App;
