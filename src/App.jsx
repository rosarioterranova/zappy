import {useState, useEffect} from "react"

import style from "./App.module.css"

import Spinner from "./components/Spinner"
import Navbar from "./components/Navbar"

function App() {

  const [propertiesData, setPropertiesData] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties")
    .then(res => res.json())
    .then(data => setPropertiesData(data))
  }, [])
  
  return (
    <div className={style.app}>
      <Navbar />
      <p>Hello World</p>
      {propertiesData.length > 0 ? "Loaded" : <Spinner />}
    </div>
  );
}

export default App;
