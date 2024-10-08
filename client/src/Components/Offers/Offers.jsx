import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./Offers.css"

export default function Offers() {
  const [currCars, setCurrCars] = useState([]);
  const [sortedContent,setSortedContent]=useState(false)
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("https://focus-car-dealership.onrender.com/currentOffers", {
          method: "GET",
        });
        if (!response.ok) {
          console.error("Bad response");
        }
        const allCars = await response.json();
        setCurrCars(allCars)
        setSortedContent(allCars)
        
      } catch (error) {
        console.log(error)
      }
    };

    fetchCars()
  }, [])
  function sort(criteria){
    
    let carsCopy = [...currCars]
    
    if(criteria==="price"){
      carsCopy.sort((a,b)=>a.price -b.price)
    }else if(criteria==="year"){
      carsCopy.sort((a,b)=>b.year-a.year)
    }else if(criteria==="hp"){
      carsCopy.sort((a,b)=>b.hp-a.hp)
    }else if(criteria==="mileage"){
      carsCopy.sort((a,b)=>a.mileage-b.mileage)
      
    }
    setSortedContent(carsCopy)

   
    
  }
  function showSortMenuMobile(){
    const sortMenuMobile=document.getElementById("mobileSortButtons")
    if(!sortMenuMobile.style.display ||sortMenuMobile.style.display==="none"){
      sortMenuMobile.style.display="flex"
    }else{
      sortMenuMobile.style.display="none"
    }
  }



  return (
    <div id="currentOffer">
        <section id="offersStart">
            
            <h1>Current offers</h1>
            
        </section>
      
      {sortedContent.length >0 && <>
      <section id="sortMobile">
      <button id="showSortMenu" onClick={showSortMenuMobile}>Sort <i className="fa-solid fa-arrow-down-wide-short"></i></button>
      <div id="mobileSortButtons">
      <button onClick={()=>sort("all")}>All vehicles</button>
<button onClick={()=>sort("price")}>Cheapest</button>
<button onClick={()=>sort("year")}>Newest</button>
<button onClick={()=>sort("hp")}>Most powerful</button>
<button onClick={()=>sort("mileage")}>Lowest mileage</button>
      </div>
    </section>
      <section id="sort">
        
        
        <button onClick={()=>sort("all")}>All vehicles</button>
        <button onClick={()=>sort("price")}>Cheapest</button>
        <button onClick={()=>sort("year")}>Newest</button>
        <button onClick={()=>sort("hp")}>Most powerful</button>
        <button onClick={()=>sort("mileage")}>Lowest mileage</button>
      </section>
      </>
      
      }
      
     
      <ul id="cars">
        {sortedContent.length > 0 ? (
          sortedContent.map((car) => (
            <li className="car" key={car._id}>
               <Link to={"/offers/" + car._id}> <img
                src={car.images[0]}
                alt={car.brand + " " + car.model + " photo"}
              /></Link>
             
              <section>
             
                <h1>
                  {car.brand} {car.model} <Link to={"/offers/" + car._id}><i className="fa-solid fa-info"></i></Link>
                  
                </h1>

              
              <p>Price: {car.price}$</p>
              <p>Year: {car.year}</p>
              <p>Mileage: {car.mileage} miles</p>
              <p>Power: {car.hp} hp</p>
              </section>
              
            </li>
          ))
        ) : (
          <section id="noCars">
            <h1>No cars available right now</h1>
          </section>
        )}
      </ul>
    </div>
  );
}
