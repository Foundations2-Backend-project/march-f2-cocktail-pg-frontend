import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  // handleLogout = () => {
  //   window.localStorage.clear();
  //   // a bit heavy handed, but works!
  //   window.location.reload();
  //   // other option is to pass this back up to App...
  // }

  render() {
    const { userName, onLogout } = this.props;

    return (
      <header className="Header">
        <img
          className="logo"
          alt="tail"
          src="/cocks-tail.png"
        />
        <h1>Cocktails</h1>
        <nav>
          <NavLink to='/auth'>SignIn</NavLink>
          <NavLink to="/" exact={true}>Home</NavLink>
          <NavLink to="/cocktails">Cocktails</NavLink>
          <NavLink to="/favorites">My Favorites</NavLink>
          { userName
            ? <span>Hello {userName}!</span>
            : <NavLink to="/auth">My Account</NavLink>
          }
          <NavLink to='/auth' onClick={onLogout}>LogOut</NavLink>
        </nav>

      </header>
    );
  }

}

export default Header;