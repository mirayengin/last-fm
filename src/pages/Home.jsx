import React, { useEffect } from 'react'
import ArtistCart from '../components/Cards/ArtistCart'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { fetchStart, fetchSucess, fetchFail } from "../features/fetchSlice"

const Home = () => {
  // const { fetchStart, fetchSuccess, fetchFail } = useSelector((state) => state.lastfm)
  const dispatch = useDispatch()
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json `


  const getTopArtist = async () => {
    dispatch(fetchStart())


    try {
      const { data } = await axios.get(API_URL)

      const {artists:{artist}} = data
      console.log(data);
      dispatch(fetchSucess(artist))

    } catch (error) {
      console.log(error)
      dispatch(fetchFail())
    }
  }
  
  useEffect(() => {
    getTopArtist()
  }, [])
  



  return (
    <div>
      <h1>Artist List</h1>
      <ArtistCart/>
       
    </div>
  )
}

export default Home