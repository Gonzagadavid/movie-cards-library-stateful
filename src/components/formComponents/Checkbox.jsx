import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';

class Checkbox extends Component {
  render() {
    const {
      inputId, inputName, handler,
      inputValue, labelText,
    } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ `${inputId}-label` }>
        {labelText}
        <input
          type="checkbox"
          data-testid={ inputId }
          id={ inputId }
          checked={ inputValue }
          name={ inputName }
          onChange={ handler }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  inputId: string.isRequired,
  inputName: string.isRequired,
  handler: func.isRequired,
  inputValue: bool.isRequired,
  labelText: string.isRequired,
};

export default Checkbox;
