import { Property } from "../Property";
import style from "./PropertiesList.module.css";

export const PropertiesList = ({ properties }) => {
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
            />
          ))}
      </div>
    </div>
  );
};
