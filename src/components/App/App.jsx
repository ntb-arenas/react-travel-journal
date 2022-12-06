import React from "react";
import Data from "../Data/Data";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

function App() {
  const displayData = Data.map((items, index) => {
    return <Card key={index} {...items} />;
  });

  return (
    <div className="max-w-[767px] mx-auto bg-gray-100">
      <Navbar />
      <div className="px-4 py-1">{displayData}</div>
    </div>
  );
}

export default App;
