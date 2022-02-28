import style from "./PropertyDetail.module.css"
import PropTypes from 'prop-types';

import { Dialog } from "../Dialog"
import { NumericDetails } from "../NumericDetails"
import { Button } from "../Button"

export const PropertyDetail = ({
    id,
    title,
    image,
    tenants,
    baths,
    beds,
    street,
    streetNumber,
    city,
    cap,
    province,
    description,
    price
}) => {
  return (
      <Dialog>
          <div className={style.propertyDetail}>
              <p className={style.bold}>{title}</p>
              <img className={style.imgCover} src={image} alt="room" />
              <NumericDetails tenants={tenants} baths={baths} beds={beds} />
              <p className={style.bold}>{street} {streetNumber}, {cap} {city} ({province})</p>
              <p className={style.description}>{description}</p>
              <p className={style.price}>Canone d'affitto <span className={style.bold}>€ {price}</span> /mese</p>
              <Button label="Prenota alloggio" />
          </div>
      </Dialog>
  )
}

PropertyDetail.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
    tenants: PropTypes.number,
    baths: PropTypes.number,
    beds: PropTypes.number,
    street: PropTypes.string,
    streetNumber: PropTypes.string,
    city: PropTypes.string,
    cap: PropTypes.number,
    province: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
  }
  
  PropertyDetail.defaultProps = {
    id: 0,
    title: "Title",
    image: "https://placeimg.com/1280/960/arch?random=1",
    tenants: 2,
    baths: 2,
    beds: 2,
    street: "Via da qui",
    streetNumber: 99,
    city: "Catania",
    cap: 95212,
    province: "CT",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, odio",
    price: 300,
  };