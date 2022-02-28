import {useState, useEffect} from "react"

function App() {

  const [propertiesData, setPropertiesData] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties")
    .then(res => res.json())
    .then(data => setPropertiesData(data))
  }, [])
  
  return (
    <div className="App">
      <p>Hello World</p>
    </div>
  );
}

export default App;
