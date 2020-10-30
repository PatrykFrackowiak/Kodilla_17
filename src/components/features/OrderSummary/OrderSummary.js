import React from 'react';
import styles from './OrderSummary.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';

class OrderSummary extends React.Component {
  static propTypes = {
    tripCost: PropTypes.string,
    options: PropTypes.object,
  };

  render() {
    const { tripCost, options } = this.props;
    console.log(tripCost);
    return (
      <h2 className={styles.component}>
        Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
      </h2>
    );
  }
}

export default OrderSummary;
