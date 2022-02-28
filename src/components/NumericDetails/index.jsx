import PropTypes from 'prop-types';
import style from "./NumericDetails.module.css"

export const NumericDetails = ({tenants, baths, beds}) => {
  return (
    <div className={style.numericDetails}>
        <p className={style.type}><span className={style.number}>{tenants}</span> inquilini</p>
        <p className={style.type}><span className={style.number}>{baths}</span> bagni</p>
        <p className={style.type}><span className={style.number}>{beds}</span> letti</p>
    </div>
  )
}

NumericDetails.propTypes = {
    tenants: PropTypes.number,
    baths: PropTypes.number,
    beds: PropTypes.number,
}

NumericDetails.defaultProps = {
    tenants: 2,
    baths: 2,
    beds: 2,
};
  