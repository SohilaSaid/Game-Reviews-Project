import React from 'react'
import {  HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Game_category from './Game_category'
import Game_details from './Game_details'

export default function App() {
  return <HashRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/category/mmorpg" />} />
      <Route path="category/:category" element={<Game_category />} />
      <Route path="game_details/:id" element={<Game_details />} />
    </Route>
  </Routes>
</HashRouter>

}



  // const Routes = createHashRouter([
  //   {
  //   path:'',
  //   element:<Layout></Layout>,
  //   children:[
  //     { index: true, element: <Navigate to="/category/mmorpg" /> },
  //     {path:"/category/:category",element:<Game_category/>},
  //     {path:"game_details/:id",element:<Game_details/>}
  //   ]
  // }

  // ])
  // return (
  //   <RouterProvider router={Routes}></RouterProvider>
    
  // )




// import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

// export default function App() {
//   return (
//     <HashRouter>
//       <Layout>
//         <Routes>
//           <Route index element={<Navigate to="category/mmorpg" />} />
//           <Route path="/category/:category" element={<Game_category />} />
//           <Route path="/game_details/:id" element={<Game_details />} />
//         </Routes>
//       </Layout>
//     </HashRouter>
//   );
// }




