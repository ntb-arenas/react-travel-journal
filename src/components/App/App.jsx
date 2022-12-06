import React from "react";
import Data from "../Data/Data";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";

function App() {
  const displayData = Data.map((items, index) => {
    return <Card key={index} {...items} />;
  });

  return (
    <div className="mx-auto max-w-[767px]">
      <Navbar />
      <div className=" py-1 px-4">{displayData}</div>
    </div>
  );
}

export default App;
