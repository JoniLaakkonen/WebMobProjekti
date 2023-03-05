import React from 'react'
import "./MainBtn.css"
import { Link } from "react-router-dom";

function MainBtn({text, where}) {
  return (
    <>
            <Link to={where} id='btn_link'>{text}</Link>
    </>
  )
}

export default MainBtn