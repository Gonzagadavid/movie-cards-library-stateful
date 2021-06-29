import React, { Component } from 'react';
import { func, string } from 'prop-types';

class TextArea extends Component {
  render() {
    const {
      textId, textName, handler,
      textValue, labelText,
    } = this.props;
    return (
      <label htmlFor={ textId } data-testid={ `${textId}-label` }>
        {labelText}
        <textarea
          type="text"
          data-testid={ textId }
          id={ textId }
          value={ textValue }
          name={ textName }
          onChange={ handler }
        />
      </label>
    );
  }
}

TextArea.propTypes = {
  textId: string.isRequired,
  textName: string.isRequired,
  handler: func.isRequired,
  textValue: string.isRequired,
  labelText: string.isRequired,
};

export default TextArea;
