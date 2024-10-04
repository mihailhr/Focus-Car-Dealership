import { useEffect, useState } from "react";

import "./Offers.css"

export default function Offers() {
  const [currCars, setCurrCars] = useState([]);
  const [content, setContent] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("http://localhost:3000/currentOffers", {
          method: "GET",
        });
        if (!response.ok) {
          console.error("Bad response");
        }
        const allCars = await response.json();
        setCurrCars(allCars);
        console.log(allCars);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCars();
  }, []);
  function sortAndFilter(criteria){
    if(criteria==="new"){
      const filteredCars=currCars.filter((a)=>a.year>=2016)
      setCurrCars(filteredCars)
    }
  }

  return (
    <div id="currentOffer">
        <section id="offersStart">
            <video src="/videos/homeVideo.mp4" autoPlay muted loop></video>
            <h1>Current offers</h1>
        </section>
      <section id="sort">
        <button>All vehicles</button>
        <button>Affordable</button>
        <button onClick={()=>sortAndFilter("new")}>New</button>
        <button>Powerful</button>
        <button>Low mileage</button>
      </section>

      <ul id="cars">
        {currCars.length > 0 ? (
          currCars.map((car) => (
            <li className="car" key={car._id}>
              <img
                src={car.images[0]}
                alt={car.brand + " " + car.model + " photo"}
              />
              <section>
              <a href={"/offers/" + car._id}>
                <h1>
                  {car.brand} {car.model} 
                  
                </h1>

              </a>
              <p>Price: {car.price}$</p>
              <p>Year: {car.year}</p>
              <p>Mileage: {car.mileage} miles</p>
              <p>Power: {car.hp} hp</p>
              </section>
              
            </li>
          ))
        ) : (
          <li id="noCars">
            <h1>No cars available right now</h1>
          </li>
        )}
      </ul>
    </div>
  );
}
