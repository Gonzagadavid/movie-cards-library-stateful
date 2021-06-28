import React, { Component } from 'react';

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
    const { title, subtitle } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            type="text"
            data-testid="title-input"
            id="title-input"
            value={ title }
            name="title"
            onChange={ this.handlerChange }
          />
        </label>
        <label htmlFor="subtitle-input" data-testid="subtitle-input-label">
          Subtítulo
          <input
            type="text"
            data-testid="subtitle-input"
            id="subtitle-input"
            value={ subtitle }
            name="subtitle"
            onChange={ this.handlerChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
