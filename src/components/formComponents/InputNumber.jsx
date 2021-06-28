import React, { Component } from 'react';
import { func, string } from 'prop-types';

class InputText extends Component {
  render() {
    const {
      inputId, inputName, handler,
      inputValue, labelDataId, labelText,
    } = this.props;
    return (
      <label htmlFor={ inputId } data-testid={ labelDataId }>
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

InputText.propTypes = {
  inputId: string.isRequired,
  inputName: string.isRequired,
  handler: func.isRequired,
  inputValue: number.isRequired,
  labelDataId: string.isRequired,
  labelText: string.isRequired,
};

export default InputText;
