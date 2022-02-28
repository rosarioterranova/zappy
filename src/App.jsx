import { useState, useEffect } from "react";

import style from "./App.module.css";
import logo from "./assets/zappyrent.png";

import { ROOM_TYPES } from "./helpers/constants";

import { Spinner } from "./components/Spinner";
import { MultiSelect } from "./components/MultiSelect";
import { Checkbox } from "./components/Checkbox";
import { Divider } from "./components/Divider";

import { PropertiesList } from "./components/PropertiesList";

function App() {
  const [propertiesData, setPropertiesData] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filters, setFilters] = useState(
    ROOM_TYPES.map((type) => ({ label: type, value: false }))
  );
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties"
    )
      .then((res) => res.json())
      .then((data) => {
        setPropertiesData(data);
        setFilteredProperties(data);
      });
  }, []);

  useEffect(() => {
    applyFilter();
  }, [filters, available]);

  if (propertiesData.length === 0) {
    return (
      <div className={style.loading}>
        <p>Loading</p>
        <Spinner />
      </div>
    );
  }

  function applyFilter() {
    setFilteredProperties(
      propertiesData.filter((property) => {
        const typesToFilter = filters
          .filter((filter) => filter.value === true)
          .map((filter) => filter.label);
        return (
          property.available === available ||
          typesToFilter.includes(property.type)
        );
      })
    );
  }

  return (
    <div className={style.app}>
      <div className={style.navbar}>
        <div>
          <img className={style.logo} src={logo} alt="logo" />
        </div>
        <div className={style.filters}>
          <MultiSelect
            label="Tipologia"
            options={filters}
            onChange={(newFilters) => setFilters(newFilters)}
          />
          <Checkbox
            label="Disponibile subito"
            defaultChecked={available}
            onClick={(checked) => setAvailable(!available)}
          />
        </div>
        <Divider />
      </div>
      <PropertiesList properties={filteredProperties} />
    </div>
  );
}

export default App;
