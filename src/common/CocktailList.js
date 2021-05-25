import { Component } from 'react';
import CocktailItem from './CocktailItem';
import './CocktailList.css';

class CocktailList extends Component {
  
  render() {
    const { cocktails, onFavorited } = this.props;

    return (

      <ul className="CocktailList">
        {cocktails.map(cocktail => (
          <CocktailItem key={cocktail.cocktailId} cocktail={cocktail} onFavorited={onFavorited}/>
        ))}
      </ul>
    );
  }

}

export default CocktailList;