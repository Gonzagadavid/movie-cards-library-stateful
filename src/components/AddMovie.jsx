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
    const { title } = this.state;
    const { onClick } = this.props;
    return (
      <form data-testid="add-movie-form">
        <label htmlFor="title-input" data-testid="title-input-label">
          Título
          <input
            data-testid="title-input"
            id="title-input"
            value={ title }
            name="title"
            onChange={ this.handlerChange }
          />
        </label>
      </form>
    );
  }
}

export default AddMovie;
