import React, { useState } from 'react'
import './home.css'
import Header from '../../componets/Header/Header'
import Explore from '../../componets/Explore/explore'
import ServiceDisplay from '../../componets/ServiceDisplay/ServiceDisplay'
const Home = () => {
    const [category, setCategory] = useState("All");
  return (
    <div>
      <Header/> 
      <Explore category={category} setCategory={setCategory} />   
      <ServiceDisplay category={category}/>
    </div> 
  )
}

export default Home
