import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import AuthPage from '../auth/AuthPage';
import CocktailPage from '../cocktails/CocktailPage';
import FavoritesPage from '../favorites/FavoritesPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import CocktailDetailPage from '../cocktail-detail/CocktailDetailPage';

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

  // now most of the token, localStorage stuff happens in App.js
  handleLogout = () => {
    window.localStorage.clear();
    // a bit heavy handed, but works!
    window.location.reload();
  }

  render() {
    const { token, userName } = this.state;

    return (
      <div className="App">
        <Router>
          <Header userName={userName} onLogout={this.handleLogout}/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/auth" exact={true}
                render={routerProps => (
                  <AuthPage {...routerProps}
                    onUser={this.handleUser}/>
                )}
              />
              
              <Route path="/cocktails" exact={true}
                render={routerProps => (
                  token
                    ? <CocktailPage {...routerProps}/>
                    : <Redirect to="/auth"/>
                )}
              />

              <Route path="/favorites" exact={true}
                render={routerProps => (
                  token
                    ? <FavoritesPage {...routerProps}/>
                    : <Redirect to="/auth"/>
                )}
              />
              <Route path="/cocktails/:id" exact={true}
                render={routerProps => (
                  token
                    ? <CocktailDetailPage {...routerProps}/>
                    : <Redirect to="/auth"/>
                )}/>
              
              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

//what does the fox say?
// WA-PA-PA-PA-PA-PA-PA-POW! HATEE-HATEE-HATEE-HO! CHACHA-CHACHA-CHACH-CHOW! FRAKA-KAKA-KAKA-KOW!

export default App;