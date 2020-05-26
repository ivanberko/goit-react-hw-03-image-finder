import React, { Component } from "react";
import PropTypes from "prop-types";
import { SearchbarForm, SearchForm, SearchFormButton, SearchFormButtonLabel, SearchFormInput} from "./Searchbar.module.css";

export default class Searchbar extends Component {
  static propsTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { query } = this.state;
    e.preventDefault();
    this.props.onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className={SearchbarForm}>
        <form className={SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={SearchFormButton}>
            <span className={SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={SearchFormInput}
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}
