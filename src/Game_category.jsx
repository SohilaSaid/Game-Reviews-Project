import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Game_category() {

  const { category } = useParams();
  let [loading , setLoading] = useState(true)


  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {
      category: category
    },
    headers: {
      'x-rapidapi-key': 'adc9ca3117mshafa8911aaf0d989p1ced4bjsn6e28a915a0da',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };


  let [games, setGames] = useState([])

  async function display() {
    setLoading(true)
    await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}', options)
      .then((res) => {
        setLoading(false)
        setGames(res.data)
        
      })
      .catch((err) => {
        setLoading(false)
      })


  }



  useEffect(() => {
    display()
  }, [category])



  return (
    <>
    {loading? <div className='flex justify-center items-center'>
    <span class="loader"></span>
    </div> : <section className='w-10/12 my-20 flex flex-wrap gap-y-2 m-auto '>
        {games?.map((game) => {
          let { thumbnail, id, genre, title, short_description, platform } = game
          return (
            <div className="lg:w-1/4 md:w-12/12 rounded-lg bg-gray-800 border-gray-700 overflow-hidden shadow-md hover:bg-gray-700" key={id}>
              <Link to={"/game_details/" + id}>

                <div className='p-2 photo_container' >
                  <img className="rounded-t-lg w-full" src={thumbnail} alt='game_photo' />
                </div>

                <div className="p-4 relative">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-white ">{title}</h5>
                  <p className="mb-3  text-gray-500 text-sm text-center ">  {short_description.length > 80
                    ? short_description.slice(0, 80) + "..."
                    : short_description}</p>
                  <button type="button" className="text-white bg-nav  rounded-full text-sm px-4 py-0.5 text-center me-2 mb-2 absolute top-0 right-0">Free</button>
                </div>

                <div className="p-2 flex justify-between ">
                  <button type="button" className="text-white bg-gray-700 rounded-full text-sm px-3 py-1  ">{genre}</button>
                  <button type="button" className="text-white bg-gray-700 rounded-full text-sm px-3 py-1 ">{platform}</button>
                </div>

              </Link>

            </div>)


        })}





      </section >}
    
      
    </>
  )
}



