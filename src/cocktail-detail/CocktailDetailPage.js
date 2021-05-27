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
        {
          cocktail.length && <p>{cocktail[0].name}</p>
        }
       
        <p>
          {/* { cocktail } */}
        </p>
      </section>
    );
  }

}