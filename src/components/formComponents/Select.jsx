import React, { Component } from 'react';
import { arrayOf, func, shape, string } from 'prop-types';

class Select extends Component {
  render() {
    const {
      selectId, selectValue, labelText,
      handler, options, selectName, optionId,
    } = this.props;
    return (
      <label htmlFor={ selectId } data-testid={ `${selectId}-label` }>
        {labelText}
        <select
          data-testid={ selectId }
          id={ selectId }
          value={ selectValue }
          onChange={ handler }
          name={ selectName }
        >
          {
            options.map(({ value, text }) => (
              <option key={ value } value={ value } data-testid={ optionId }>
                {text}
              </option>))
          }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  selectId: string.isRequired,
  selectValue: string.isRequired,
  labelText: string.isRequired,
  handler: func.isRequired,
  selectName: string.isRequired,
  optionId: string.isRequired,
  options: arrayOf(shape({
    value: string.isRequired,
    text: string.isRequired,
  }).isRequired),
};

Select.defaultProps = {
  options: ['object'],
};

export default Select;
