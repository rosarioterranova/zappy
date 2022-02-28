import { useState, useEffect } from "react";

import style from "./App.module.css";
import logo from "./assets/zappyrent.png";

import { ROOM_TYPES } from "./helpers/constants";

import { Spinner } from "./components/Spinner";
import { MultiSelect } from "./components/MultiSelect";
import { Checkbox } from "./components/Checkbox";
import { Divider } from "./components/Divider";

import { PropertiesList } from "./components/PropertiesList";

export default function App() {
  const [propertiesData, setPropertiesData] = useState([]);
  const [propertiesFiltered, setPropertiesFiltered] = useState([]);
  const [typeFilters, setTypeFilters] = useState(
    ROOM_TYPES.map((type) => ({ label: type, value: false }))
  );
  const [availableFilter, setAvailableFilter] = useState(false);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/zappyrent/frontend-assessment/properties"
    )
      .then((res) => res.json())
      .then((data) => {
        setPropertiesData(data);
        setPropertiesFiltered(data);
      });
  }, []);

  useEffect(() => {
    applyFilters();
  }, [typeFilters, availableFilter]);

  if (propertiesData.length === 0) {
    return (
      <div className={style.loading}>
        <img className={style.logo} src={logo} alt="logo" />
        <p>Loading</p>
        <Spinner />
      </div>
    );
  }

  function applyFilters() {
    const filteredByAvailability = propertiesData.filter(
      (property) => property.available === availableFilter
    );

    const typesToFilter = typeFilters
      .filter((filter) => filter.value === true)
      .map((filter) => filter.label);

    const filteredByTypeAndAvailability = filteredByAvailability.filter(
      (property) => typesToFilter.includes(property.type)
    );

    setPropertiesFiltered(filteredByTypeAndAvailability);
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
            options={typeFilters}
            onChange={(newFilters) => setTypeFilters(newFilters)}
          />
          <Checkbox
            label="Disponibile subito"
            defaultChecked={availableFilter}
            labelPosition="left"
            onClick={(checked) => setAvailableFilter(!availableFilter)}
          />
        </div>
        <Divider />
      </div>
      <PropertiesList properties={propertiesFiltered} />
    </div>
  );
}
