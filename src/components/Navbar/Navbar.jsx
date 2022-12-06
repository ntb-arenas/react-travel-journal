import React from "react";
import Img from "../../assets/nav-icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-center p-5 bg-[#F55A5A]">
      <div className="mx-3">
        <img src={Img} alt="" />
      </div>
      <p className="text-white">My Travel Journal</p>
    </div>
  );
};

export default Navbar;
