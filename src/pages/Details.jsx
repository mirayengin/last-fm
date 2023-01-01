import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TopAlbum from "../components/TopAlbum";
import TopTrack from "../components/TopTrack";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";

const Details = () => {
  const { name } = useParams();
  const { state: image } = useLocation();
  console.log(name);

  const [show, setShow] = useState(true);

  const [topAlbumList, settopAlbumList] = useState([]);
  const [topTrackList, setTopTrackList] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const topAlbumsUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;

  const topTracksUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;

  const getTopTrack = async () => {
    try {
      const { data } = await axios.get(topTracksUrl);
      setTopTrackList(data);
      toastSuccessNotify("Tracks data get success")
    } catch (error) {
      console.log(error);
      toastErrorNotify("Tracks data does not get success")
    }
  };

  const handleTracks = () => {
    localStorage.setItem("show", false)
    setShow(false)

}
  const handleAlbums = () => {
    localStorage.setItem("show", true)
    setShow(true)
}




  useEffect(() => {
    try {
      axios.get(topAlbumsUrl).then((res) => settopAlbumList(res.data));
      toastSuccessNotify("Albums data get success")
    } catch (error) {
      toastErrorNotify("Albums data does not get success")
    }
    getTopTrack();
    if (localStorage.getItem("show") === true) {
      setShow(true)
      
    } else {
      setShow(false)
      
    }
    // eslint-disable-next-line
  }, []);

  console.log(topAlbumList);
  console.log(topTrackList);

  return (
    <div className="flex flex-col align-middle justify-center">
      <div className="flex justify-center bg-white w-26 mt-2  m-auto align-middle">
        <img src={image?.[0]["#text"]} alt="" />
        <h1 className="mt-1 mx-2 font-extrabold text-red-400 ">{name}</h1>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleAlbums}
          className="border-4 rounded-lg mr-10 px-2 py-1 bg-amber-300  border-teal-500"
        >
          GET ALBUMS
        </button>
        <button
          onClick={handleTracks }
          className="border-4 rounded-lg px-2 py-1 bg-amber-300 border-teal-500"
        >
          GET TRACK
        </button>
      </div>
      <div className="flex justify-center">
        {show ? (
          <div>
            <h2 className="flex justify-center font-medium">Top Albums</h2>
            {topAlbumList["topalbums"]?.album?.map((item, indeks) => (
              <TopAlbum key={indeks} {...item} />
            ))}
          </div>
        ) : (
          <div>
            <h2 className="flex justify-center font-medium">Top Track</h2>
            {topTrackList["toptracks"]?.track?.map((item, indeks) => (
              <TopTrack key={indeks} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
