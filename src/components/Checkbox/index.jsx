import { useState } from "react"
import style from "./Checkbox.module.css"

export default function Checkbox({defaultChecked = false, onClick}) {
    const [checked, setChecked] = useState(defaultChecked)

    function onClickHandler(){
      onClick(!checked)
      setChecked(!checked)
    }

  return (
    <div className={style.checkbox} onClick={onClickHandler} >
        {checked && <div className={style.marker}></div>}
    </div>
  )
}
