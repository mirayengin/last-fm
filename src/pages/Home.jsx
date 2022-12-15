import React, { useEffect } from 'react'
import ArtistCart from '../components/Cards/ArtistCart'
import axios from "axios"

const Home = () => {
  const API_KEY = process.env.REACT_APP_API_KEY
  const API_URL = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${API_KEY}&format=json `


  const getTopArtist = async () => {
    try {
      const { data } = await axios.get(API_URL)
      console.log(data);
    } catch (error) {
      console.log(error)
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