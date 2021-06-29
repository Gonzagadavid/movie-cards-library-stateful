import React, { Component } from 'react';
import { func } from 'prop-types';
import FormAddMovie from './formComponents/FormAddMovie';

class AddMovie extends Component {
  constructor() {
    super();
    this.resetState = this.resetState.bind(this);
    this.handlerChange = this.handlerChange.bind(this);
    this.state = {
      subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action',
    };
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  }

  resetState(callback) {
    callback({ ...this.state });
    this.setState({
      subtitle: '', title: '', imagePath: '', storyline: '', rating: 0, genre: 'action',
    });
  }

  render() {
    const { state } = this;
    const { onClick } = this.props;
    return (
      <FormAddMovie
        formId="add-movie-form"
        state={ state }
        resetState={ () => this.resetState(onClick) }
        handlerChange={ this.handlerChange }
      />
    );
  }
}

AddMovie.propTypes = {
  onClick: func.isRequired,
};
export default AddMovie;
