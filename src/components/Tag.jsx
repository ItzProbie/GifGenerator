import axios from 'axios';
import React, { useState,useEffect } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  const [tag,setTag] = useState('car');
  // const [gif,setGif] = useState('');
  // const [loading,setLoading] = useState(true);

  // async function fetchData()
  // {
  //   setLoading(true)
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url); 
  //   // console.log(data);
  //   const imagesrc = data.data.images.downsized_large.url;
  //   setGif(imagesrc);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [])
  
  // function changeHandler(event)
  // {
  //   setTag(event.target.value);
  // }

  const {gif,loading,fetchData} = useGif(tag);

  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>A Random {tag} Gif</h1>
      {
        loading ? <Spinner/> : (<img src={gif} width="450" />)
      }

      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' 
       onChange={(event)=> setTag(event.target.value)}
       value={tag}/>

      <button className='w-10/12 mb-[20px] bg-white opacity-[83%] text-lg py-2 rounded-lg' onClick={() => fetchData(tag)}>Generate</button>
    </div>
  )
}

export default Tag