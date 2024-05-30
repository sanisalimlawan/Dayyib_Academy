import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Layout from "../layout/Layout"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"
import Gallery from "./Pages/Gallery/Gallery"

export default function App(){
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="About" element={<About />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Gallery" element={<Gallery />} />
     </Route>
    )
  )
  return(
    <main>
      <RouterProvider router={router} />
    </main>
  )
}