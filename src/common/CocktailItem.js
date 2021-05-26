import { Component } from 'react';
import { Link } from 'react-router-dom';
import './CocktailItem.css';

const MARTINI = '🍸';
const BEER = '🍺';

class CocktailItem extends Component {
  state = {
    isFavorite: Boolean(this.props.cocktail.id)
  }
  handleFavoriteClick = e => {
    const { onFavorited, cocktail } = this.props;
    e.preventDefault();
    onFavorited(cocktail);
    this.setState({ isFavorite: !this.state.isFavorite });
  }

  render() {
    const { isFavorite } = this.state;
    const { cocktail } = this.props;
    console.log(cocktail);
    return (
      <li className="CocktailItem">
        <Link to={`/cocktails/${cocktail.id}`}>
          <h2>{cocktail.name}</h2>
          <button className="favorite" onClick={this.handleFavoriteClick}>
            {isFavorite ? MARTINI : BEER}
          </button>
        </Link>
      </li>  
    );
  }

}

export default CocktailItem;