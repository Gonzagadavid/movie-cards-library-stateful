import React, { Component } from 'react';
import addMovieInputs from '../formElements';
import InputText from './formComponents/InputText';
import TextArea from './formComponents/TextArea';

class AddMovie extends Component {
  constructor() {
    super();
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { storyline } = this.state;
    const stateObj = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        {addMovieInputs.map(({
          inputId, inputName, labelDataId, labelText,
        }) => (<InputText
          inputId={ inputId }
          inputName={ inputName }
          handler={ this.handlerChange }
          inputValue={ stateObj[inputName] }
          labelDataId={ labelDataId }
          labelText={ labelText }
          key={ inputId }
        />))}
        <TextArea
          labelText="Sinopse"
          labelDataId="storyline-input-label"
          textValue={ storyline }
          textId="storyline-input"
          handler={ this.handlerChange }
          textName="storyline"
        />
      </form>
    );
  }
}

export default AddMovie;
