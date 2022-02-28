import {useState} from 'react'
import style from "./Navbar.module.css"
import logo from "../../assets/zappyrent.png"

import {MultiSelect} from '../MultiSelect'

export default function Navbar() {
  
  const [filters, setFilters] = useState([
    {label: "Private Room", value: false},
    {label: "Entire Property", value: false},
    {label: "Shared Room", value: false},
    {label: "Studio", value: false},
  ])

  function changeFilter(newFilter){
    const filtersCopy = [...filters]
    const filterToReplace = filters.findIndex(el => el.label === newFilter.label)
    filtersCopy.splice(filterToReplace,1,newFilter)
    setFilters(filtersCopy)
  }

  return (
    <div>
        <div>
            <img className={style.logo} src={logo} alt="logo" />
        </div>
        <MultiSelect label="Tipologia" options={filters} onOptionSelected={changeFilter} />
    </div>
  )
}
