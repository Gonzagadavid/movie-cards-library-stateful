import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import InputText from './formComponents/InputText';
import Checkbox from './formComponents/Checkbox';
import Select from './formComponents/Select';
import { optionsGenre } from '../addMovieData';

class SearchBar extends Component {
  render() {
    const options = [...optionsGenre];
    options.unshift({ value: '', text: 'Todos' });
    const {
      searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form data-testid="search-bar-form">
        <InputText
          inputId="text-input"
          inputName="text"
          handler={ onSearchTextChange }
          inputValue={ searchText }
          labelText="Inclui o texto:"
        />
        <Checkbox
          inputId="checkbox-input"
          inputName="checkbox"
          handler={ onBookmarkedChange }
          inputValue={ bookmarkedOnly }
          labelText="Mostrar somente favoritos"
        />
        <Select
          selectName="filtro"
          selectId="select-input"
          selectValue={ selectedGenre }
          labelText="Filtrar por gênero"
          handler={ onSelectedGenreChange }
          options={ options }
          optionId="select-option"
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: string.isRequired,
  onSearchTextChange: func.isRequired,
  bookmarkedOnly: bool.isRequired,
  onBookmarkedChange: func.isRequired,
  selectedGenre: string.isRequired,
  onSelectedGenreChange: func.isRequired,
};

export default SearchBar;
