import PropTypes from 'prop-types';
import style from "./Property.module.css"

export const Property = ({image}) => {
  return (
    <div className={style.container}>
        <div>
            {/* <label></label> */}
            <img className={style.imgCover} src={image} alt="room photo" />
        </div>
        <div className={style.content}>
            <p>type</p>
            <p>title</p>
            <p>dscription</p>
            {/* <p>numbers</p> */}
            {/* <divider></divider> */}
            <div>
                <p>Canone</p>
                <p>price/mese</p>
            </div>
        </div>
    </div>
  )
}


Property.propTypes = {
    image: PropTypes.string,
  }
  
  Property.defaultProps = {
    image: "https://placeimg.com/1280/960/arch?random=1",
  };
  