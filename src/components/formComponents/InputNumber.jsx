import React, { Component } from 'react';
import { func, number, string } from 'prop-types';

class InputNumber extends Component {
  render() {
    const {
      inputId, inputName, handler,
      inputValue, labelText,
    } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ `${inputId}-label` }>
        {labelText}
        <input
          type="number"
          data-testid={ inputId }
          id={ inputId }
          value={ inputValue }
          name={ inputName }
          onChange={ handler }
        />
      </label>
    );
  }
}

InputNumber.propTypes = {
  inputId: string.isRequired,
  inputName: string.isRequired,
  handler: func.isRequired,
  inputValue: number.isRequired,
  labelText: string.isRequired,
};

export default InputNumber;
