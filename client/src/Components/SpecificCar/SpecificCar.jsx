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
        </div>
      )}
    </div>
  );
}
