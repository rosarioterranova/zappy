import {useState} from 'react'
import style from "./Navbar.module.css"
import logo from "../../assets/zappyrent.png"

import {MultiSelect} from '../MultiSelect'
import {ROOM_TYPES} from "../../helpers/constants"

export default function Navbar() {
  
  const [filters, setFilters] = useState(ROOM_TYPES.map(type => ({label:type, value:false})))


  return (
    <div>
        <div>
            <img className={style.logo} src={logo} alt="logo" />
        </div>
        <MultiSelect label="Tipologia" options={filters} onChange={newFilters => setFilters(newFilters)} />
    </div>
  )
}
