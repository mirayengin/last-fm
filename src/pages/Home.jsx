import React, { useEffect, useState } from "react";
import ArtistCard from "../components/Cards/ArtistCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchError } from "../features/FetchSlice";
const Home = () => {
  const [pageParam, setPageParam] = useState(1);
  const [artistState, setArtistState] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&page=${pageParam}&limit=10&format=json`;
  const getTopArtist = async () => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      const {
        artists: { artist },
      } = data;
      if (pageParam === 1) {
        setArtistState([...artistState, ...artist.slice(0, 10)]);
        //console.log(artist.slice(0, 5));
        setLoading(false);
      } else {
        setArtistState([
          ...artistState,
          ...artist.slice((pageParam - 1) * 10, pageParam * 10),
        ]);
        setLoading(false);
        if (pageParam === 6) {
          setPageParam(1);
        }
      }
      console.log(artistState);
    } catch (error) {
      console.log(error);
      setLoading(false);
      dispatch(fetchError());
    }
  };
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPageParam((prev) => prev + 1);
    }
  };
  console.log(pageParam);
  useEffect(() => {
    getTopArtist();
    // eslint-disable-next-line
  }, [pageParam]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    //   // eslint-disable-next-line
  }, []);
  return (
    <div>
      <h1>Artist List</h1>
      {artistState?.map((item, index) => (
        <ArtistCard key={index} {...item} />
      ))}
      {loading && <h2>loading</h2>}
    </div>
  );
};
export default Home;