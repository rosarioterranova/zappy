import {useState, useEffect} from "react"

import style from "./App.module.css"

import Spinner from "./components/Spinner"
import Navbar from "./components/Navbar"
import PropertiesList from "./components/PropertiesList"

function App() {

  const [propertiesData, setPropertiesData] = useState([])
  const [filteredProperties, setFilteredPropertied] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties")
    .then(res => res.json())
    .then(data => {
      setPropertiesData(data)
      setFilteredPropertied(data)
    })
  }, [])

  if(propertiesData.length === 0){
    return (
      <div className={style.loading}>
        <p>Loading</p>
        <Spinner />
      </div>
    )
  }
  
  return (
    <div className={style.app}>
      <Navbar />
      <PropertiesList properties={filteredProperties} />
    </div>
  );
}

export default App;
