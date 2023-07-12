import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import ApptContainer from "./ApptContainer";
import Mainsection from "./Mainsection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Mainsection>
        <Banner />
        <ApptContainer />
      </Mainsection>
    </div>
  );
}

export default App;
