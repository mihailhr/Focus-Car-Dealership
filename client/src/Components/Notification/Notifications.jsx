import { useEffect, useState } from "react"
import "./Notifications.css"

export default function Notifications({news}){
    const [visibility,setVisibility]=useState(true)
    const root=document.getElementById("notifications")
    useEffect(()=>{
        setTimeout(()=>{
            setVisibility(false)
        },5000)
    },[])

    if (!visibility) return null

    return (
        <div id="notifications">
            <p>{news}</p>
        </div>
    )

   
}