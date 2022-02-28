import {useState} from 'react'
import style from "./Navbar.module.css"
import logo from "../../assets/zappyrent.png"

import {MultiSelect} from '../MultiSelect'
import { Checkbox } from '../Checkbox'
import {Divider} from "../Divider"
import {ROOM_TYPES} from "../../helpers/constants"

export default function Navbar() {
  
  const [filters, setFilters] = useState(ROOM_TYPES.map(type => ({label:type, value:false})))


  return (
    <div className={style.navbar}>
        <div>
            <img className={style.logo} src={logo} alt="logo" />
        </div>
        <div className={style.filters}>
          <MultiSelect label="Tipologia" options={filters} onChange={newFilters => setFilters(newFilters)} />
          <Checkbox label='Disponibile subito' />
        </div>
        <Divider />
    </div>
  )
}
