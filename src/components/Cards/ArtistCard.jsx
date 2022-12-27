import React from "react";
import { useNavigate } from "react-router-dom";





const ArtistCard = ({ image, name, listeners, playcount }) => {
  const navigate = useNavigate();
  return (
    // <div className="flex justify-center my-4 bg-scroll bg-center bg-origin-border bg-no-repeat bg-cover bg-hero">
    <div className="flex justify-center my-4">
      <div
        onClick={() => navigate("details/" + name, { state: image })}
        className="flex flex-col items-center w-2/5 bg-orange-300 border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-orange-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div className="mr-5 w-40">
          <img
            className="object-cover w-full  rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={image?.[0]["#text"]}
            alt=""
          />
        </div>
        <div className="flex  flex-col justify-between p-4 leading-normal w-32">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-amber-400">
            Artist
          </h5>
          <p className="mb-3 font-semibold text-lg text-gray-700 dark:text-amber-400">
            {name}
          </p>
        </div>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <p className="mb-3 font-bold text-red-600 ">
            <span className="font-semibold text-lg text-gray-700 dark:text-red-600">
              listeners
            </span>{" "}
            : {listeners}
          </p>
          <p className="mb-3 font-bold text-red-600 ">
            <span className="font-semibold text-lg text-gray-700 dark:text-red-600">
              playcount
            </span>{" "}
            : {playcount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
