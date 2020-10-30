import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';
import { formatPrice } from '../../../utils/formatPrice';


const OrderOptionIcon = (props) => (
  <div className={styles.icon}>
    {props.values.map(value => (
      <div
        className={styles.icon}
        key={value.id}
        onClick={() => props.setOptionValue(value.id)}>
        <Icon name={value.icon} />
        {value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcon.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
  icon: PropTypes.node,
};

export default OrderOptionIcon;
