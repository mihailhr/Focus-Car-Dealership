import Notifications from "../Notification/Notifications";
import "./Contacts.css";
import { useState } from "react";


export default function Contacts() {

    const [notification,setNotification]=useState(false)
    const [formData,setFormData]=useState({
      firstName:"",
      lastName:"",
      phoneNumber:"",
      email:"",
      brand:"",
      model:"",
      budget:""
    })
    
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      

      const response=await fetch("https://focus-car-dealership.onrender.com/contacts",{
        method:"POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      })
      if(!response.ok){
        throw new Error('Network response was not ok');
      }else{
        const result = await response.json();
        setNotification(true)
        setTimeout(() => {
          setNotification(false)
        }, 6000);
        setFormData({
          firstName:"",
          lastName:"",
          phoneNumber:"",
          email:"",
          brand:"",
          model:"",
          budget:""
        })
      }
      
    };
    
  return (
    <div id="contacts">
      {notification ? <Notifications news={"Check your email, you've got a new message."}/> : null}
      <section id="heading">
        <h1>Contacts</h1>
      </section>
      <section id="email">
        <article id="leftPartContacts"></article>
        <article id="contactsForm">
          <h1>Book your free consultation:</h1>
          <form action="/contacts" method="POST"  onSubmit={handleSubmit}>
          <label htmlFor="firstName">First name</label>
          <input type="text" placeholder="John" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} minLength={2} required />
          <label htmlFor="lastName">Last name</label>
          <input type="text" placeholder="Doe" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} minLength={2} required/>
          <label htmlFor="phoneNumber">Phone number</label>
          <input type="number" placeholder="0123456789" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}  required/>
          <label >Email</label>
          <input type="email" placeholder="youremail@gmail.com" name="email" value={formData.email} onChange={handleChange} minLength={8} required/>
          <label >Preferred brand</label>
          <input type="text" placeholder="VW" name="brand"  value={formData.brand} onChange={handleChange} minLength={2} required/>
          <label >Model</label>
          <input type="text" placeholder="Golf 7" name="model" value={formData.model} onChange={handleChange} minLength={1} required/>
          <label >Budget</label>
          <input type="number" placeholder="60000" name="budget" value={formData.budget} onChange={handleChange} min={3000} required/>
          <button type="submit">Submit</button>
          </form>
        </article>
      </section>
      <section id="office">
        <ul>
          <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=focusdealership@gmail.com&su=Your%20Subject&body=Your%20message%20goes%20here" target="_blank"><i className="fa-regular fa-envelope"></i></a> <p>Our email: focusdealership@gmail.com</p></li>
          <li><a href="tel:+35912345678" target="_blank"><i className="fa-solid fa-phone"></i></a><p>Give us a call: +35912345678</p></li>
          <li><a href="https://www.google.com/maps/place/Sofia+Center,+ul.+%22Knyaz+Boris+I%22,+Sofia/@42.6972406,23.3138573,16z/data=!4m6!3m5!1s0x40aa85699dabd83f:0x28878cb70f6c9fef!8m2!3d42.6972406!4d23.3190071!16s%2Fg%2F11_k2bfmw?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank"><i className="fa-solid fa-location-dot"></i></a> <p>Visit our office: Sofia Center, Knyaz Boris &#8470;1</p></li>
        </ul>
       
        
       
      </section>
      
    </div>
  );
}
