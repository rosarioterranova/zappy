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
            <p className={style.type}>type</p>
            <p className={style.title}>title</p>
            <div className={style.numericDetails}>
                <p className={style.type}><span className={style.number}>2</span> inquilini</p>
                <p className={style.type}><span className={style.number}>2</span> bagno</p>
                <p className={style.type}><span className={style.number}>2</span> letto</p>
            </div>
            <p className={style.type}>dscription</p>
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
  