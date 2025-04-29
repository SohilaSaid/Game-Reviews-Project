import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Game_details() {
  let { id } = useParams()
  let [details_data, setDetails] = useState([])
  let navigate = useNavigate();
  let [loading , setLoading] = useState(true)

  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
    params: { id: id },
    headers: {
      'x-rapidapi-key': 'adc9ca3117mshafa8911aaf0d989p1ced4bjsn6e28a915a0da',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

  async function details_display() {
    setLoading(true)
    await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game', options)
      .then((res) => {
        
        setDetails(res.data)
        setLoading(false)

      })
      .catch((err) => {
        setLoading(false)
      })

  }





  useEffect(() => {
    details_display()
  }, [])

  return (
    <>
    {loading? <div className='flex justify-center items-center'>
    <span class="loader"></span>
    </div> : <div className='container m-auto relative'>
        <button
          onClick={() => navigate('/')}
          className='absolute top-0 right-0 text-2xl text-white'>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <h2 className='text-white text-3xl font-bold my-5'>Details Game</h2>

        <div className='flex mt-6'>


          <div className='w-4/12 p-4 '>
            <img className='w-fit' src={details_data?.thumbnail} alt='game_photo'></img>
          </div>
          <div className='w-8/12 p-4'>
            <h3 className='text-white font-medium text-3xl'>Title : {details_data?.title} </h3>
            <h3 className='text-white font-medium text-xl'>Category : <span className="bg-blue-400 rounded-lg text-sm px-5 py-1 mx-1">{details_data?.genre}</span> </h3>
            <h3 className='text-white font-medium text-xl'>Platform : <span className="bg-blue-400 rounded-lg text-sm px-5 py-1 mx-1">{details_data?.platform}</span> </h3>
            <h3 className='text-white font-medium text-xl'>Status : <span className="bg-blue-400 rounded-lg text-sm px-5 py-1 mx-1">{details_data?.status}</span> </h3>
            <p className='text-white my-3'>{details_data?.description}</p>
            <button type="button" className="text-white border-2 border-yellow-300 hover:bg-yellow-300 font-bold rounded-lg text-sm px-5 py-2.5 my-2">
              <a href={details_data?.game_url} target="_blank">Show more</a>
            </button>

          </div>
        </div>
      </div> }
    

      
    </>
  )
}
