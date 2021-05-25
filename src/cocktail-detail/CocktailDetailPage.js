import { Component } from 'react';
import { getCocktails } from '../utils/cocktails-api';
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

      const cocktail = await getCocktails(match.params.id);
      this.setState({ cocktail: cocktail });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState ({ loading: false });
    }
  }

  render() {
    return (
      <section className="CocktailDetailPage">
        <pre>
          {/* {JSON.stringify(cocktail, true, 2)} */}
        </pre>
      </section>
    );
  }

}