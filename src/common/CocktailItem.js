import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CocktailItem.css';

// nice use of constants for emoji
const MARTINI = '🍸';
const BEER = '🍺';

class CocktailItem extends Component {
  state = {
    isFavorite: Boolean(this.props.cocktail.id)
  }
  
  handleFavoriteClick = e => {
    e.preventDefault();
    const { onFavorited, cocktail } = this.props;
    onFavorited(cocktail);
    this.setState({ isFavorite: !this.state.isFavorite });
  }

  render() {
    const { isFavorite } = this.state;
    const { cocktail } = this.props;
          
    return (
            
      <li className="CocktailItem">
        <Link to={`/cocktails/${cocktail.drinkId}`}>
          <section>
            <h2 className="cocktailName">{cocktail.name}</h2>
            <img className="cocktailImage" src={cocktail.image} alt={cocktail.name}/>
                  
            <button className="favorite" onClick={this.handleFavoriteClick}>
              {isFavorite ? MARTINI : BEER}
            </button>
                  
          </section>
        </Link>
      </li>  
    );
    
        
        
  }
}

export default CocktailItem;