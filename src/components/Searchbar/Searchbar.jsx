import styles from './Searchbar.module.css';
import React from 'react';

class Searchbar extends React.Component {
  state = {
    inputValue: '',
  };

  handleChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form onSubmit={this.handleOnSubmit} className={styles.SearchForm}>
          <button type="submit" className={styles[`SearchForm-button`]}>
            <span className={styles[`SearchForm-button-label`]}>Search</span>
          </button>

          <input
            className={styles[`SearchForm-input`]}
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
