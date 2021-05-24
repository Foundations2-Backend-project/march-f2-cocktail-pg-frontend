import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import AuthPage from '../auth/AuthPage.js';
import CocktailPage from '../cocktails/CocktailPage.js';
import CocktailDetailPage from '../cocktail-detail/CocktailDetailPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    token: window.localStorage.getItem('TOKEN'),
    userId: window.localStorage.getItem('USER_ID'),
    userName: window.localStorage.getItem('USER_NAME')
  }

  handleUser = user => {
    window.localStorage.setItem('TOKEN', user.token);
    window.localStorage.setItem('USER_ID', user.id);
    window.localStorage.setItem('USER_NAME', user.name);
    this.setState({ token: user.token });
  }

  render() {
    const { token, userName } = this.state;

    return (
      <div className="App">
        <Router>
          <Header userName={userName} />
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/auth" exact={true}
                render={routerProps => (
                  <AuthPage {...routerProps}
                    onUser={this.handleUser} />
                )}
              />

              <Route path="/cocktail" exact={true}
                render={routerProps => (
                  token
                    ? <CocktailPage {...routerProps} />
                    : <Redirect to="/auth" />
                )}
              />

              {/* <Route path="/favorites" exact={true}
                render={routerProps => (
                  token
                    ? <FavoritesPage {...routerProps} />
                    : <Redirect to="/auth" />
                )}
              /> */}

              {/* <Route path="/favorites/:id"
                render={routerProps => (
                  <div>Implement a page for id {routerProps.match.params.id}</div>
                )}
              /> */}

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

//what does the fox say?
export default App;