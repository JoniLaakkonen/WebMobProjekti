import React from 'react'
import "./MainBtnDark.css"
import { Link } from "react-router-dom";

function MainBtnDark({text, where}) {
  return (
    <>
        <Link to={where} id='btn_dark_link'>{text}</Link>
    </>
  )
}

export default MainBtnDark