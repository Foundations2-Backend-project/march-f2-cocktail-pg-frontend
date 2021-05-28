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
              drinkId: m.idDrink,
              name: m.strDrink,
              category: m.strCategory,
              alcoholPresent: m.strAlcoholic,
              instructions: m.strInstructions,
              glass: m.strGlass,
              image: m.strDrinkThumb

            }
            : m;
        });
    
        this.setState({ cocktails: updatedCocktails });
      }
      else {
        const addedFavorite = await addFavorite(cocktail);

        const updatedCocktails = cocktails.map(m => {
          return m.drinkId === addedFavorite.drinkId ? addedFavorite : m;
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