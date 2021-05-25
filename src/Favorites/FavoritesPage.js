import { Component } from 'react';
import CocktailList from '../common/CocktailList';
import Loader from '../common/Loader';
import { getMyFavorites, addFavorite, deleteFavorite } from '../utils/cocktails-api.js';
import './FavoritesPage.css';

export default class FavoritesPage extends Component {
  state = {
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

  handleFavorited = async favorite => {
    try {
      this.setState({ loading: true });

      if (favorite.deleted) {
        const { favorites } = this.state;
        const newFavorite = await addFavorite(favorite);
        const updatedFavorites = favorites.map(f => {
          return f.id === favorite.id ? newFavorite : f;
        });
        this.setState({ favorites: updatedFavorites });
      }
      else {
        await deleteFavorite(favorite.id);
        favorite.deleted = true;
      }

    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { favorites, loading } = this.state;

    return (
      <div className="FavoritesPage">
        <Loader loading={loading} />
        <CocktailList cocktails={favorites} onFavorited={this.handleFavorited} />
      </div>
    );
  }

}