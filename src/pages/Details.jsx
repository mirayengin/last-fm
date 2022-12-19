import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TopAlbum from "../components/TopAlbum";
import TopTrack from "../components/TopTrack";

const Details = () => {
  const { name } = useParams();
  const { state: image } = useLocation()
  console.log(name);

  const [topAlbumList, settopAlbumList] = useState([]);
  const [topTrackList, setTopTrackList] = useState([]);

  const API_KEY = process.env.REACT_APP_API_KEY;
  const topAlbumsUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${name}&api_key=${API_KEY}&format=json`;

  const topTracksUrl = `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${name}&api_key=${API_KEY}&format=json`;

  const getTopTrack = async () => {
    try {
      const { data } = await axios.get(topTracksUrl);
      setTopTrackList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get(topAlbumsUrl).then((res) => settopAlbumList(res.data));
    getTopTrack();
  }, []);

  console.log(topAlbumList);
  console.log(topTrackList);

  return (
    <div className="flex flex-col align-middle justify-center">
      <div className="flex justify-center">
        <img src={image?.[0]["#text"]} alt="" />
        <h1>{name}</h1>
      </div>
    <div className="flex justify-evenly">
      <div>
      <h2>Top Albums</h2>
        {topAlbumList["topalbums"]?.album?.map((item, indeks) => (
          <TopAlbum key={indeks} {...item} />
        ))}
      </div>
      <div>
      <h2>Top Track</h2>
        {topTrackList["toptracks"]?.track?.map((item, indeks) => (
          <TopTrack key={indeks} {...item} />
        ))}
      </div>
      </div>
      </div>
  );
};

export default Details;
