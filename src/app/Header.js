import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  render() { 
    const { userName } = this.props;

    return (
      <header className="Header">
        <img
          className="logo"
          alt="AA"
          src="/purple-cocktail.jpeg"
        />

        <h1>Cocktail Page</h1>
        <nav>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/cocktails">My Favorites</NavLink>
          { userName
            ? <span>Hi {userName}!</span>
            : <NavLink to="/auth">My Account</NavLink>
          }
        </nav>
        
      </header>
    );
  }

}
 
export default Header;