import React, { Component } from 'react';
import { func, number, shape, string } from 'prop-types';
import { textInputs, optionsGenre } from '../../addMovieData';
import InputNumber from './InputNumber';
import InputText from './InputText';
import Select from './Select';
import TextArea from './TextArea';
import Button from './Button';

class FormAddMovie extends Component {
  render() {
    const { formId, state, handlerChange, resetState } = this.props;
    const { storyline, rating, genre } = state;
    return (
      <form data-testid={ formId }>
        {textInputs.map(({
          inputId, inputName, labelText,
        }) => (<InputText
          inputId={ inputId }
          inputName={ inputName }
          handler={ handlerChange }
          inputValue={ state[inputName] }
          labelText={ labelText }
          key={ inputId }
        />))}
        <TextArea
          labelText="Sinopse"
          textValue={ storyline }
          textId="storyline-input"
          handler={ handlerChange }
          textName="storyline"
        />
        <InputNumber
          inputId="rating-input"
          inputName="rating"
          handler={ handlerChange }
          inputValue={ rating }
          labelText="Avaliação"
        />
        <Select
          selectId="genre-input"
          selectValue={ genre }
          selectName="genre"
          labelText="Gênero"
          handler={ handlerChange }
          options={ optionsGenre }
          optionId="genre-option"
        />
        <Button
          buttonId="send-button"
          buttonOnClick={ resetState }
          buttonText="Adicionar filme"
        />
      </form>
    );
  }
}

FormAddMovie.propTypes = {
  formId: string.isRequired,
  state: shape({
    storyline: string.isRequired,
    rating: number.isRequired,
    genre: string.isRequired,
  }).isRequired,
  handlerChange: func.isRequired,
  resetState: func.isRequired,
};

export default FormAddMovie;
