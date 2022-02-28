import PropTypes from 'prop-types';
import style from "./Property.module.css"

import {NumericDetails} from "../NumericDetails"

import {ROOM_TYPES} from "../../helpers/constants"

import { Divider } from '../Divider';

export const Property = ({id, image, type, title, tenants, baths, beds, description, price}) => {
  return (
    <div className={style.container}>
        <div className={style.imgContainer}>
            <p className={style.badge}>Disponibile subito</p>
            <img className={style.imgCover} src={image} alt="room" />
        </div>
        <div className={style.content}>
            <p className={style.type}>{type}</p>
            <p className={style.title}>{title}</p>
            <NumericDetails tenants={tenants} baths={baths} beds={beds} />
            <p className={style.type}>{description}</p>
            <Divider />
            <div className={style.priceContainer}>
                <p className={style.canone}>Canone</p>
                <p className={style.canone}><span className={style.number}>€ {price}</span>/mese</p>
            </div>
        </div>
    </div>
  )
}

Property.propTypes = {
    id: PropTypes.number,
    image: PropTypes.string,
    type: PropTypes.oneOf([...ROOM_TYPES]),
    title: PropTypes.string,
    tenants: PropTypes.number,
    baths: PropTypes.number,
    beds: PropTypes.number,
    description: PropTypes.string,
    price: PropTypes.number,
  }
  
  Property.defaultProps = {
    id: 0,
    image: "https://placeimg.com/1280/960/arch?random=1",
    type: "Private Room",
    title: "Title",
    tenants: 2,
    baths: 2,
    beds: 2,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, odio",
    price: 300,
  };
  