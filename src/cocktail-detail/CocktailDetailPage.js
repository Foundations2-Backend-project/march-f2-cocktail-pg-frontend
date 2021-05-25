import { Component } from 'react';
import { getCocktail } from '../utils/cocktails-api';
import './CocktailDetailPage.css';

export default class CocktailDetailPage extends Component {
  state = {
    cocktail: null,
    loading: false
  }
  async componentDidMount() {
    try {
      const { match } = this.props;
      this.setState({ loading: true });

      const cocktail = await getCocktail(match.params.id);
      this.setState({ cocktail: cocktail });
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
        {/* <pre> */}
        {/* {JSON.stringify(cocktail, true, 2)} */}
        {/* </pre> */}
        <p>
          { cocktail }
        </p>
      </section>
    );
  }

}