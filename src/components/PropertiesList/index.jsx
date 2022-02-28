export default function PropertiesList({ properties }) {
  return (
    <div>
      {properties && properties.map((property) => <p>{property.street}</p>)}
    </div>
  );
}
