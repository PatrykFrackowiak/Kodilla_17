import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionCheckbox from './OrderOptionCheckbox';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionIcon from './OrderOptionIcon';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcon,
  checkbox: OrderOptionCheckbox,
  number: OrderOptionNumber,
};

const OrderOption = ({ name, type, id, setOrderOption,...otherProps }) => {


  const OptionComponent = optionTypes[type];
  if (!OptionComponent) {
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          setOptionValue={value  =>  setOrderOption({ [id]: value })}
          {...otherProps}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  title: PropTypes.string,
};

export default OrderOption;
