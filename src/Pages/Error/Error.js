import { Link } from "react-router-dom";
import './Error.css'

export default function NotFound() {
    return (
    <>
        <div id="error">
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            <Link to='/WebMobProjekti'>Home</Link>
        </div>
    </>
    )
}