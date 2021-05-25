import { Component } from 'react';
import CocktailList from '../common/CocktailList';
import CocktailSearch from './CocktailSearch';
import Loader from '../common/Loader';
import { addFavorite, deleteFavorite, getMyFavorites, getCocktails } from '../utils/cocktails-api';
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

      const cocktails = await getCocktails(search);

      const upgradedCocktails = cocktails.map(cocktail => {
        const found = favorites.find(favorite => favorite.cocktail.Id === cocktail.cocktailId);
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
              cocktailId: cocktail.cocktailId,
              name: cocktail.name,
            // image: cocktail.image
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
      this.setState ({ loading: false });
    }
  }

  render() {
    const { cocktails, loading } = this.state;

    return (
      <div className="CocktailPage">
        <Loader loading={loading}/>
        <CocktailSearch onSearch={this.handleSearch}/>
        <CocktailList cocktails={cocktails} onFavorited={this.handleFavorited}/>
      </div>
    );
  }

}