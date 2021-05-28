import { Component } from 'react';
import CocktailList from '../common/CocktailList';
import CocktailSearch from './CocktailSearch';
import Loader from '../common/Loader';
import { getCocktails, addFavorite, getMyFavorites, deleteFavorite } from '../utils/cocktails-api.js';
import './CocktailPage.css';

export default class CocktailPage extends Component {
  state = {
    cocktails: [],
    favorites: [],
    loading: false
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });

      const favorites = await getMyFavorites();
      this.setState({ favorites: favorites });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }
  handleSearch = async search => {
    try {
      this.setState({ loading: true });
      const { favorites } = this.state;

      const booger = await getCocktails(search);
      
      const upgradedCocktails = booger.map(cocktail => {
        const found = favorites.find(favorite => favorite.drinkId === cocktail.drinkId);
        
        return found ? found : cocktail;

      });

      this.setState({ cocktails: upgradedCocktails });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }
  handleFavorited = async cocktail => {
    try {
      this.setState({ loading: true });
      const { cocktails } = this.state;

      const favoriteId = cocktail.id;

      if (favoriteId) {
        await deleteFavorite(favoriteId);
      
      
        const updatedCocktails = cocktails.map(m => {
          return m.id === favoriteId
            ? {
              drinkId: cocktail.idDrink,
              name: cocktail.strDrink,
              category: cocktail.strCategory,
              alcoholPresent: cocktail.strAlcoholic,
              instructions: cocktail.strInstructions,
              glass: cocktail.strGlass,
              image: cocktail.strDrinkThumb,
              ingredient1: cocktail.strIngredient1,
              ingredient2: cocktail.strIngredient2,
              ingredient3: cocktail.strIngredient3,
              ingredient4: cocktail.strIngredient4,
              ingredient5: cocktail.strIngredient5,
              ingredient6: cocktail.strIngredient6,
              ingredient7: cocktail.strIngredient7,
              ingredient8: cocktail.strIngredient8,
              ingredient9: cocktail.strIngredient9,
              ingredient10: cocktail.strIngredient10,
              ingredient11: cocktail.strIngredient11,
              ingredient12: cocktail.strIngredient12,
              ingredient13: cocktail.strIngredient13,
              ingredient14: cocktail.strIngredient14,
              ingredient15: cocktail.strIngredient15

            }
            : m;
        });
    
        this.setState({ cocktails: updatedCocktails });
      }
      else {
        const addedFavorite = await addFavorite(cocktail);

        const updatedCocktails = cocktails.map(m => {
          return m.cocktailId === addedFavorite.cocktailId ? addedFavorite : m;
        });

        this.setState({ cocktails: updatedCocktails });
      }
    }
    catch (err) {
      console.log(err.message);
    
    }
    finally {
      this.setState({ loading: false });
    };
  }
  


  render() {
    const { cocktails, loading } = this.state;
    
    return (
      <div className="CocktailPage">
        <Loader loading={loading} />
        <CocktailSearch onSearch={this.handleSearch} />
        <CocktailList cocktails={cocktails} onFavorited={this.handleFavorited} />
      </div>
    );
  }


}