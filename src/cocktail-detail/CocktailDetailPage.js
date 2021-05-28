import { Component } from 'react';
import { getCocktail } from '../utils/cocktails-api';
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
      const cocktail = await getCocktail(match.params.id);
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
    return (
      <section className="CocktailDetailPage">
        <label className="drinkLabel">
          <span className="leftRow">
            <p className="ingredientsTitle">Ingredients</p>
            <div className="ingredients">
              {
                cocktail.length && <p>{cocktail[0].ingredient1}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient2}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient3}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient4}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient5}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient6}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient7}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient8}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient9}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient10}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient11}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient12}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient13}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient14}</p>
              }
              {
                cocktail.length && <p>{cocktail[0].ingredient15}</p>
              }
            </div>
          </span>
          <span className="middleRow">
            <div className="drinkName">
              {
                cocktail.length && <p>{cocktail[0].name}</p>
              }
            </div>
            <div className="drinkImage">
              {
                cocktail.length && <img className="drinkImg" src={cocktail[0].image} alt={cocktail.name}/>
              }
            </div>
          </span>
          <span className="rightRow">
            <div className="drinkGlass">
              <p>Served in a:  {
                cocktail.length && <p>{cocktail[0].glass}</p>
              }</p> 
            </div>
            <div className="drinkInstructions">
              {
                cocktail.length && <p className="instructionText">{cocktail[0].instructions}</p>
              }
            </div>
          </span>
        </label>
      </section>
    );
  }
}