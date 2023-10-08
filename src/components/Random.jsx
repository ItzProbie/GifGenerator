import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

  // const [gif,setGif] = useState('');
  // const [loading,setLoading] = useState(true);

  // async function fetchData()
  // {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url); 
  //   console.log(data);
  //   const imagesrc = data.data.images.downsized_large.url;
  //   setGif(imagesrc);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])
  
  const {gif,loading,fetchData} = useGif();



  return (
    <div className='w-1/2  bg-green-500 rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random Gif</h1>
      {
        loading ? <Spinner/> : (<img src={gif} width="450" />)
      }
      <button className='w-9/12 mb-[20px] bg-white opacity-[83%] text-lg py-2 rounded-lg' onClick={() => fetchData()}>Generate</button>
    </div>
  )
}

export default Random