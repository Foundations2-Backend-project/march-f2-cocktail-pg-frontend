import { Component } from 'react';
import { getCocktail } from '../utils/cocktails-api.js';
import './CocktailDetailPage.css';
export default class CocktailDetailPage extends Component {
  state = {
    cocktail: [],
    loading: false
  }
  async componentDidMount() {
    try {
      const { match } = this.props;
      this.setState({ loading: true });
      console.log(match.params.id, 'this two');
      const cocktail = await getCocktail(match.params.id);
      console.log(cocktail, 'this one');
      this.setState({ cocktail: cocktail }, () => getCocktail(match.params.id));
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { cocktail } = this.state;
    console.log(cocktail, 'ff');
    return (
      <section className="CocktailDetailPage">
        <label className="drinkLabel">
          <span className="leftRow">
            <p className="ingredientsTitle">Ingredients</p>
            <div className="ingredients">
              {
                cocktail && <p>{cocktail.ingredient1}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient2}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient3}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient4}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient5}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient6}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient7}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient8}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient9}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient10}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient11}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient12}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient13}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient14}</p>
              }
              {
                cocktail && <p>{cocktail.ingredient15}</p>
              }
            </div>
          </span>
          <span className="middleRow">
            <div className="drinkName">
              {
                cocktail && <p>{cocktail.name}</p>
              }
            </div>
            <div className="drinkImage">
              {
                cocktail && <img className="drinkImg" src={cocktail.image} alt={cocktail.name}/>
              }
            </div>
          </span>
          <span className="rightRow">
            <div className="drinkGlass">
              <p className="serveTitle">Served in a:</p>   {
                cocktail && <p>{cocktail.glass}</p>
              }
            </div>
            <div className="drinkInstructions">
              {
                cocktail && <p className="instructionText">{cocktail.instructions}</p>
              }
            </div>
          </span>
        </label>
      </section>
    );
  }
}