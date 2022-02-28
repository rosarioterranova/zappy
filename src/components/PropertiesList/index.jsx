export default function PropertiesList({properties}) {
    console.log(properties)
  return (
    <div>{properties && properties.map(property => <p>{property.street}</p>)}</div>
  )
}
