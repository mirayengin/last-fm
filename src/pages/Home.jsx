import React, { useEffect, useState } from "react";
import ArtistCard from "../components/Cards/ArtistCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchError } from "../features/FetchSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
const Home = () => {
  const [pageParam, setPageParam] = useState(1);
  const [artistState, setArtistState] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const API_KEY = process.env.REACT_APP_API_KEY;
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&page=${pageParam}&limit=10&format=json`;

  //? infinity scrollda her seferde on tane veri alıyoruz burda
  const getTopArtist = async () => {
    setLoading(true);
    try {
      //? Artist datalarını çekiyoruz
      const { data } = await axios(url);
      toastSuccessNotify("Artist data get success")


      //! data nın içinden artist i destruct ediyoruz
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
      toastErrorNotify("Artist data doesnt get success")
      setLoading(false);
      dispatch(fetchError());
    }
  };

   //! infinityscroll 
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPageParam((prev) => prev + 1);
    }
  };
  console.log(pageParam);

  //! page değiştiğinde veri çek diyoruz
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
      <h1 className="text-center py-4 mb-16 font-bold text-2xl text-amber-500 shadow-lg shadow-amber-500 bg-slate-600">Artist List</h1>
      {artistState?.map((item, index) => (
        <ArtistCard key={index} {...item} />
      ))}
      {loading && <h2>loading</h2>}
    </div>
  );
};
export default Home;