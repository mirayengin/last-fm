import React from 'react'

const TopTrack = ({ name, playcount, listeners, image, url }) => {
  return (
    <div onClick={() => (window.location.href = url)} className="flex justify-center my-5 w-11/12 h-48">
      
    <div
      
      className="flex flex-col items-center w-10/12 bg-yellow-300 border-4  border-red-700 rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-green-100 dark:border-yellow-400 dark:bg-yellow-700 dark:hover:bg-green-400"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={image?.[2]["#text"]}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal w-40 overflow-hidden">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-red-900 dark:text-red-200">
          Artist
        </h5>
        <p className="  mb-3 font-semibold text-rose-400 dark:text-red-700">
          {name}
        </p>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-3 font-semibold text-red-700 dark:text-orange-400">
        <span className="text-blue-700 dark:text-green-800">listeners</span> : <br/> {listeners}
        </p>
        <p className="mb-3 font-semibold text-red-700 dark:text-orange-400">
        <span className="text-blue-700 dark:text-green-800">playcount</span> : {playcount}
        </p>
      </div>
    </div>
  </div>
  )
}

export default TopTrack