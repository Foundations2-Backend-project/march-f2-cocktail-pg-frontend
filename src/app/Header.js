import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  }

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
          <NavLink to='/auth'>SignIn</NavLink>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/cocktails">Cocktails</NavLink>
          <NavLink to="/Favorites">My Favorites</NavLink>
          {userName
            ? <span>Hi {userName}!</span>
            : <NavLink to="/auth">My Account</NavLink>
          }
          <NavLink to='/auth' onClick={this.handleLogout}>LogOut</NavLink>
        </nav>

      </header>
    );
  }

}

export default Header;