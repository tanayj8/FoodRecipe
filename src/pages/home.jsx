import Popular from "../components/popular";
import Veggie from "../components/veggie";
import { motion } from "framer-motion";

import React from 'react'

function home() {
  return (
    <motiondiv
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration:0.5}}    
    >
      <Veggie/>
      <Popular/>
    </motiondiv>
  )
}

export default home
