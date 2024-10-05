
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
function App() {
  

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
