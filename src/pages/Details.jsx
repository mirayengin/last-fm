import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopAlbum from "../components/TopAlbum";
import TopTrack from "../components/TopTrack";

const Details = () => {
  const { name } = useParams();
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
    getTopTrack()
  },[]);
  
  console.log(topAlbumList);
  console.log(topTrackList);


  return (
    <div>
      <TopAlbum />
      <TopTrack />
    </div>
  );
};

export default Details;
