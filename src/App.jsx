import React from 'react'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Game_category from './Game_category'
import Game_details from './Game_details'

export default function App() {

  const Routes = createBrowserRouter([
    {
    path:'',
    element:<Layout></Layout>,
    children:[
      { index: true, element: <Navigate to="/category/mmorpg" /> },
      {path:"/category/:category",element:<Game_category/>},
      {path:"game_details/:id",element:<Game_details/>}
    ]
  }

  ])
  return (
    <RouterProvider router={Routes}></RouterProvider>
    
  )
}




