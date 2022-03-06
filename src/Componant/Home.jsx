import React from 'react'
import baground from "./Imgs/baground.jpg"
import "./sv.css"
import { useNavigate } from 'react-router-dom'



const Home = () => {
 
  const navigate = useNavigate()

  return (
    
    <>
    
    <div
      style={{
        backgroundImage: `url(${baground})`,
         backgroundPosition: "right",
         backgroundSize: "cover",
           backgroundRepeat: "no-repeat",
          width: "100vw",
         height: "100vh",
         backgroundAttachment: "scroll"
      }}>
    <br />
     <div >
      <h1 style={{color: "red", marginTop:"20%",marginLeft:"2%"}}>Welcome Foodies!</h1>
      <p style={{color: "white",marginLeft:"2%"}}>We are Providing Best In Meals For you..<br />
        
        Explore Our Delicious Items Now, Order Your First Thali.</p>
           <div>
        <button className='or' onClick={() => { navigate("/menu") }} style={{marginLeft:"2%"}}>Order Now!</button>
           </div>
      </div>
      </div>
    </>

  )
}

export default Home
