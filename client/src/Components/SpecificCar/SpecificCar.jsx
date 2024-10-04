import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SpecificCar.css";
import Notifications from "../Notification/Notifications";

export default function SpecificCar() {
    
  const [currCar, setCurrCar] = useState({});
  const { id } = useParams();
  const [contentError, setContentError] = useState("");
  const [currImageIndex,setCurrImageIndex]=useState(0)
  const [notification,setNotification]=useState(false)
  useEffect(() => {
    async function getCurrCar() {
      const res = await fetch(`http://localhost:3000/offers/${id}`);
      if (!res.ok) {
        console.log("Server error");
        setContentError("Server error");
      } else {
        const foundCar = await res.json();
        setCurrCar(foundCar);
        if (foundCar.images && foundCar.images.length > 0) {
            const imageRoot = document.getElementById("carImages")
            imageRoot.style.backgroundImage = `url(${foundCar.images[0]})`
            console.log(foundCar.images[0])
            const arrowLeft=document.getElementById("arrowLeft")
             arrowLeft.style.visibility="hidden"
          }
      }
    }
    

    getCurrCar();
    
    
  }, [id]);

  function copyURL(){
    const currentURL = window.location.href
    navigator.clipboard.writeText(currentURL).then(function() {
        setNotification(true)
       setTimeout(() => {
        setNotification(false)
       }, 6000);
    }).catch(function(err) {
        console.error('Error copying URL: ', err)
    })
  }
  function changeArrowVisibility(arrowLeft,arrowRight,newIndex){
    if(newIndex==currCar.images.length-1){
      arrowRight.style.visibility="hidden"
    }else{
      arrowRight.style.visibility="visible"
    }
    if(newIndex===0){
      
      arrowLeft.style.visibility="hidden"
    }else{
      arrowLeft.style.visibility="visible"
    }
  }
  function imageChanger(){
    
    const newIndex = currImageIndex < currCar.images.length - 1 ? currImageIndex + 1 : 0
    setCurrImageIndex(newIndex)
    const imageRoot = document.getElementById("carImages")
    imageRoot.style.backgroundImage = `url(${currCar.images[newIndex]})`
    const arrowRight=document.getElementById("arrowRight")
    const arrowLeft=document.getElementById("arrowLeft")
    
    
   changeArrowVisibility(arrowLeft,arrowRight,newIndex)
  }
  function reverseImageChanger(){
    const newIndex = currImageIndex > 0 ? currImageIndex - 1 : currCar.images.length - 1
    setCurrImageIndex(newIndex)
    const imageRoot = document.getElementById("carImages")
    imageRoot.style.backgroundImage = `url(${currCar.images[newIndex]})`
    const arrowRight=document.getElementById("arrowRight")
    const arrowLeft=document.getElementById("arrowLeft")
    changeArrowVisibility(arrowLeft,arrowRight,newIndex)
  
  }
  return (
    <div id="specificCar">
       {notification ? <Notifications news={"Car URL copied to clipboard"}/> : null}
        
      <section id="interior"></section>
      {contentError ? (
        <h1>{contentError}</h1>
      ) : (
        <div id="specifics">
          <h1>
            Import {currCar.brand} {currCar.model}  <button onClick={()=>copyURL()}><i className="fa-solid fa-share-nodes"></i></button> 
          </h1>
          <p><i className="fa-solid fa-car"></i> Brand, model and series: {currCar.brand+ " " +currCar.model}</p>
          
          <p><i className="fa-solid fa-money-bill-wave"></i> Estimated price: {currCar.price}$</p>
          <p><i className="fa-regular fa-calendar-days"></i> Production year: {currCar.year}</p>
          {currCar.damages ? (
            <p><i className="fa-solid fa-car-burst"></i> Damages: {currCar.damages}</p>
          ) : (
            <p>In perfect condition</p>
          )}
          <p><i className="fa-solid fa-gauge"></i> Mileage: {currCar.mileage}</p>
          <p><i className="fa-solid fa-dumbbell"></i> Power: {currCar.hp}hp</p>
          <p><i className="fa-solid fa-gas-pump"></i> Fuel type: {currCar.fuelType}</p>


          <section id="carImages" >
          <button id="arrowLeft" onClick={reverseImageChanger}><i className="fa-solid fa-arrow-left"></i></button>
          <button id="arrowRight" onClick={imageChanger}><i className="fa-solid fa-arrow-right"></i></button>
          </section>
          <p>
            Available at auction with a "buy now" option. Delivery to Bulgaria
            takes 6-8 weeks. For companies registered for VAT, the price is
            lower because VAT is not due.
          </p>
          <section id="moreInfo">
            <h2>Focus Car Dealership – Importing Cars from America and Canada</h2>
            <p>If you choose to work with us, we will provide you access to our database of imported cars and their prices, allowing you to compare prices with your search. This will give you a real insight into car prices, helping you understand the market and set a budget according to the car you are looking for. You can also rely on us for advice on what type of car to search for, depending on your needs. We will provide you with accurate prices of completed deals on cars similar to what you are looking for, helping you form a realistic assessment of the market.</p>
            <p>For example, if you are purchasing a car for investment and resale, we can advise you on which cars are in high demand and sell the fastest in Bulgaria. If you are looking for the perfect family car with minimal damages (such as scratched paint, broken side glass, or detached bumpers), we will provide information on which cars are easiest to maintain and most reliable for driving in Bulgarian conditions. We will conduct research on the vehicle you have chosen before purchase, as well as check the proper documentation for the desired car. If there are any discrepancies, we will refuse the sale, no matter how much you want a specific vehicle, because we want the client to be satisfied in the end. Our extensive knowledge of documentation gives you confidence that you won’t have any problems later on.</p>
            <p>There are cars manufactured outside the EU that cannot be registered in Bulgaria. We have encountered cases where clients of our competitors reached out to us for assistance with customs clearance and vehicle registration due to complications or rejected technical tests. We will protect you from such situations by advising you on which cars to avoid when purchasing. In our first meeting, we will provide complete information and answer all your questions that we may not have addressed on our website.</p>
          </section>
          <article id="continueBrowsing">
            <a href="/offers"><button>See all offers</button></a>
          </article>
        </div>
      )}
    </div>
  );
}
