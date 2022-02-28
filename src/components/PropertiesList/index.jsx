import { useState } from "react";
import { Property } from "../Property";
import style from "./PropertiesList.module.css";

import { PropertyDetail } from "../PropertyDetail";

export const PropertiesList = ({ properties }) => {
  const [showDialog, setShowDialog] = useState(false);

  function onClickHandler(id) {
    console.log("clicked id:" + id);
  }

  return (
    <div>
      <p className={style.counter}>{properties.length} alloggi trovati</p>
      <div className={style.list}>
        {properties &&
          properties.map((property, index) => (
            <Property
              id={property.id}
              image={property.images[0].url}
              type={property.type}
              title={property.title}
              tenants={property.tenants}
              baths={property.baths}
              beds={property.beds}
              description={property.description}
              price={property.price}
              available={property.available}
              key={index}
              onClickCallback={onClickHandler}
            />
          ))}
      </div>
      <PropertyDetail />
    </div>
  );
};
