import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Landing, Products, SingleProduct } from './pages'
import './App.css'

import SingleProductPage from './pages/SingleProductPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Landing></Landing>,
      },
      {
        path: 'product',
        element: <Products></Products>,
      },
      {
        path: 'product/:id',
        element: <SingleProductPage></SingleProductPage>,
      },
    ]
  },

])

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
