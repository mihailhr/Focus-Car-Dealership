import "./NotFound.css"
import { Link } from "react-router-dom"

export default function NotFound(){
    return <div id="notFound">
        <h1>Unfortunately, the page you are looking for does not exist.</h1>
        <button><Link to={"/"}>Go back to home page</Link></button>
        </div>
}