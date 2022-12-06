import React from "react";
import CardIcon from "../../assets/card-icon.png";

const Card = (props) => {
  return (
    <div className="flex mx-6 my-8">
      <div
        className="w-1/4 bg-center bg-cover shadow-xl rounded-xl"
        style={{
          backgroundImage: `url(${props.imageUrl})`,
        }}
      ></div>

      <div className="flex flex-col justify-center w-3/4 m-6 ">
        <div className="flex items-center">
          <span>
            <img src={CardIcon} alt="" />
          </span>
          <span className="ml-1 tracking-widest">{props.location.toUpperCase()}</span>
          <span className="ml-3 underline text-[#838383] text-sm">
            <a href={props.googleMapsUrl} target="_blank">
              View on Google Maps
            </a>
          </span>
        </div>

        <h1 className="mt-2 mb-4 text-3xl font-bold">{props.title}</h1>
        <span className="mb-2 font-semibold">
          {props.startDate} - {props.endDate}
        </span>
        <p>{props.description}</p>
      </div>
      <hr />
    </div>
  );
};

export default Card;
