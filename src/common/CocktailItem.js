import { Component } from 'react';
import { Link } from 'react-router-dom';
import './CocktailItem.css';

const MARTINI = '🍸';
const BEER = '🍺';

class CocktailItem extends Component {
  state = {
    isFavorite: Boolean(this.props.cocktail.drinkId)
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
    console.log('its this one' + cocktail);
    return (
      <li className="CocktailItem">
        <Link to={`/cocktails/${cocktail.drinkId}`}>
          <label>
            <h2 className="cocktailName">{cocktail.name}</h2>
            <img className="cocktailImage" src={cocktail.image} alt={cocktail.name}/>
            
            <button className="favorite" onClick={this.handleFavoriteClick}>
              {isFavorite ? MARTINI : BEER}
            </button>
            
          </label>
        </Link>
      </li>  
    );
  }

}

export default CocktailItem;