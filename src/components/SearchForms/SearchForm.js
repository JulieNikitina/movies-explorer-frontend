import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './SearchForm.css';


function SearchForm(props) {
  const { onSubmit } = props;
  const [searchQuery, setSearchQuery] = React.useState("");

  function onSearchQueryChange(e) {
    setSearchQuery(e.currentTarget.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchQuery);
  }

  return (
    <div className="search">
      <form className="search__form" noValidate onSubmit={handleSubmit}>
        <div className="search__form-field">
          <input
            id="search__form-input"
            value={searchQuery}
            required
            className="search__form-input"
            name="search-input"
            placeholder="Фильм"
            onChange={onSearchQueryChange}
          />
          <button className="search__submit-button" type="submit">Поиск</button>
        </div>
        <FilterCheckbox/>
      </form>
    </div>
  );
}

export default SearchForm;
