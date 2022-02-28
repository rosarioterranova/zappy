import React from 'react'
import style from "./Navbar.module.css"
import logo from "../../assets/zappyrent.png"

export default function Navbar() {
  return (
    <div>
        <div>
            <img className={style.logo} src={logo} alt="logo" />
        </div>
    </div>
  )
}
