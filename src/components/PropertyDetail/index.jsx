import style from "./PropertyDetail.module.css";
import PropTypes from "prop-types";
import { disablePageScroll } from "../../helpers";

import { Dialog } from "../Dialog";
import { NumericDetails } from "../NumericDetails";
import { Button } from "../Button";

export const PropertyDetail = ({ data, onClose }) => {
  disablePageScroll();

  return (
    <Dialog onCloseCallback={onClose}>
      <div className={style.propertyDetail}>
        <p className={style.bold}>{data.title}</p>
        <img className={style.imgCover} src={data.images[0].url} alt="room" />
        <NumericDetails
          tenants={data.tenants}
          baths={data.baths}
          beds={data.beds}
        />
        <p className={style.bold}>
          {data.street} {data.streetNumber}, {data.cap} {data.city} (
          {data.province})
        </p>
        <p className={style.description}>{data.description}</p>
        <p className={style.price}>
          Canone d'affitto <span className={style.bold}>€ {data.price}</span>{" "}
          /mese
        </p>
        <Button label="Prenota alloggio" />
      </div>
    </Dialog>
  );
};

PropertyDetail.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
};

PropertyDetail.defaultProps = {
  data: {
    id: 0,
    title: "Title",
    images: [{ url: "https://placeimg.com/1280/960/arch?random=1" }],
    tenants: 2,
    baths: 2,
    beds: 2,
    street: "Via da qui",
    streetNumber: 99,
    city: "Catania",
    cap: 95212,
    province: "CT",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
    price: 300,
  },
  onClose: () => {},
};
