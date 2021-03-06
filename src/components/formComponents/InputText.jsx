import React, { Component } from 'react';
import { func, string } from 'prop-types';

class InputText extends Component {
  render() {
    const {
      inputId, inputName, handler,
      inputValue, labelText,
    } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ `${inputId}-label` }>
        {labelText}
        <input
          type="text"
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

InputText.propTypes = {
  inputId: string.isRequired,
  inputName: string.isRequired,
  handler: func.isRequired,
  inputValue: string.isRequired,
  labelText: string.isRequired,
};

export default InputText;
