import { useState } from "react"
import PropTypes from 'prop-types';
import style from "./MultiSelect.module.css"

import {Checkbox} from "../Checkbox"

export const MultiSelect = ({label, options, onOptionSelected}) => {
    const [showOptions, setShowOptions] = useState(false)

  return (
    <div>
        <div className={style.dropdownContainer} onClick={()=>setShowOptions(!showOptions)}>
            <p className={style.dropdownLabel}>{label}</p>
            <p className={style.dropdownLabel}>{showOptions? "▲" : "▼"}</p>
        </div>
        {showOptions && (
            <div className={style.optionList}>
                {options.length>0? options.map((option,index) => <Option key={index} text={option.label} onClickCallback={onOptionSelected} />) : "No options"}
            </div>
        )}
    </div>
  )
}

function Option({text, onClickCallback}){
    function onClickHandler(checked){
        onClickCallback({
            label: text,
            value: checked
        })
    }
    return (
        <div className={style.option}>
            <Checkbox onClick={onClickHandler} />
            <p className={style.optionLabel}>{text}</p>
        </div>
    )
}

MultiSelect.propTypes = {
    label: PropTypes.string,
    options: PropTypes.array,
    onOptionSelected: PropTypes.func,
  }
  
  MultiSelect.defaultProps = {
    label: "Title",
    options: [{label: "Option 1", value: false}, {label: "Option 2", value: true}],
    onOptionSelected: ()=>{},
  };
  