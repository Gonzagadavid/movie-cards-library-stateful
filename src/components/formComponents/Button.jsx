import React, { Component } from 'react';
import { func, string } from 'prop-types';

class Button extends Component {
  render() {
    const { buttonId, buttonOnClick, buttonText } = this.props;
    return (
      <button
        data-testid={ buttonId }
        onClick={ buttonOnClick }
        type="button"
      >
        {buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonId: string.isRequired,
  buttonOnClick: func.isRequired,
  buttonText: string.isRequired,
};

export default Button;
