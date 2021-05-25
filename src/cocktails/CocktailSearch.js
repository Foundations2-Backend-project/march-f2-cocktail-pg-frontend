import { Component } from 'react';
import './CocktailSearch.css';

export default class CocktailSearch extends Component {
    state = {
      search: ''
    }

    handleChange = ({ target }) => {
      this.setState({ search: target.value });
    }

    handleSubmit = e => {
      const { onSearch } = this.props;
      e.preventDefault();
      onSearch(this.state.search);
    }

    render() {
      const { search } = this.state;

      return (
        <form className="CocktailSearch" onSubmit={this.handleSubmit}>
          <input value={search} onChange={this.handleChange}/>
          <button>🔎</button>
        </form>
      );
    }

}