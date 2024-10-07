
import './App.css'
import Navbar from "./Components/Navbar/Navbar.jsx"
import Home from "./Components/Home/Home.jsx"
import About from "./Components/About/About.jsx"
import Offers from "./Components/Offers/Offers.jsx"
import Services from "./Components/Services/Services.jsx"
import Contacts from "./Components/Contacts/Contacts.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import { Routes, Route } from 'react-router-dom';
import SpecificCar from './Components/SpecificCar/SpecificCar.jsx'
import {useEffect} from "react"
function App() {
  
  useEffect(()=>{
    greetDeveloper()
  },[])
  function greetDeveloper(){
const welcomeMessage=`
      ===============================================
      |                                             |
      |  W E L C O M E   T O   F O C U S            |
      |                                             |
      |             C A R   D E A L E R S H I P     |
      |                                             |
      ===============================================
    `

    console.log(welcomeMessage)
  }


  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/offers' element={<Offers/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contacts' element={<Contacts/>}/>
      <Route path='/offers/:id' element={<SpecificCar/>} />
      </Routes>
      <Footer/>
    </div>
  )

}

export default App
