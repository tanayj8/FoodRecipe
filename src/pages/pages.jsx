import React from "react"
import Home from "./home"
import Cuisine from "./Cuisine"
import Searched from "./Searched"
import RecipieInfo from "./RecipieInfo"
import { Route, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function pages() {
  const location=useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>} />
        <Route path="/cuisine/:type" element={<Cuisine/>}/>
        <Route path="/searched/:search" element={<Searched/>}/>
        <Route path="/recipe/:name" element={<RecipieInfo/>}/>
      </Routes>
      </AnimatePresence>
  )
}

export default pages
