import React from "react";
import CardIcon from "../../assets/card-icon.png";

const Card = (props) => {
  return (
    <div className="flex mx-6 my-8">
      <div
        className="w-1/4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>

      <div className="w-3/4 m-6 flex flex-col justify-center">
        <div className="flex items-center">
          <span>
            <img src={CardIcon} alt="" />
          </span>
          <span className="tracking-widest ml-1">{props.location.toUpperCase()}</span>
          <span className="ml-3 underline text-[#838383] text-sm">
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-4 mt-1">{props.title}</h1>
        <span className="font-semibold mb-2">
          {props.startDate} - {props.endDate}
        </span>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

// title: "Mount Fuji",
// location: "Japan",
// googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
// startDate: "12 Jan, 2021",
// endDate: "24 Jan, 2021",
// description:
//   "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
// imageUrl: "https://source.unsplash.com/WLxQvbMyfas",

export default Card;
