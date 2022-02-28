import { useState } from "react"
import PropTypes from 'prop-types';
import style from "./MultiSelect.module.css"

import downArrow from "../../assets/down-arrow.svg"
import UpArrow from "../../assets/up-arrow.svg"
import {Checkbox} from "../Checkbox"

export const MultiSelect = ({label, options, onChange}) => {
  const [optionsData, setOptionsData] = useState(options)
  const [showOptions, setShowOptions] = useState(false)

  function onOptionChecked(optionChecked){
    const optionsDataCopy = [...optionsData]
    const optionToChange = optionsData.findIndex(el => el.label === optionChecked.label)
    optionsDataCopy.splice(optionToChange,1,optionChecked)
    onChange(optionsDataCopy)
    setOptionsData(optionsDataCopy)
  }

  return (
    <div className={style.multiSelect}>
        <div className={style.dropdownContainer} onClick={()=>setShowOptions(!showOptions)}>
            <p className={style.dropdownLabel}>{label}</p>
            <img className={style.dropdownArrow} src={showOptions? UpArrow : downArrow} alt="navigation-arrow" />
        </div>
        {showOptions && (
            <div className={style.optionList}>
                {optionsData.length>0? optionsData.map((option,index) => <Option key={index} data={option} onClickCallback={(optionChecked)=>onOptionChecked(optionChecked)} />) : "No options"}
            </div>
        )}
    </div>
  )
}

const Option = ({data, onClickCallback}) =>{
    return (
        <div className={style.option}>
            <Checkbox label={data.label} defaultChecked={data.value} onClick={(checked =>  onClickCallback({ label: data.label, value: checked, }))} />
        </div>
    )
}

MultiSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func,
  }
  
  MultiSelect.defaultProps = {
    label: "Title",
    options: [{label: "Option 1", value: false}, {label: "Option 2", value: true}],
    onChange: ()=>{},
  };
  